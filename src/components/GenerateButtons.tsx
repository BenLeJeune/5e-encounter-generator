import React, {useContext, useState} from 'react';
import {Difficulty, Link, Node, StringTypeDict} from "../types";
import {PlayerContext} from "../context/PlayerContext";
import {CombatContext} from "../context/CombatContext";
import {FiltersContext} from "../context/FiltersContext";
import {calculatePartyXP, difficulty_increase} from "../helpers/xp_calculations";
import {GenerateRandomEncounter} from "../algorithms/GenerateRandomEncounter";
import {random_from_list} from "../helpers/misc_helpers";
import {GenerateSoloEncounter} from "../algorithms/GenerateSoloEncounter";
import {GenerateBossMinionEncounter} from "../algorithms/GenerateBossMinionEncounter";

type GenerateButtons_Props = {
    graph: {
        nodes: Node[],
        links: Link[]
    },
    all_nodes: StringTypeDict<Node>
}

type GenMode = "solo" | "boss & minions" | "horde" | "random"

export default function GenerateButtons({graph, all_nodes}: GenerateButtons_Props) {

    const players = useContext(PlayerContext)[0]
    const [combat, setCombat] = useContext(CombatContext)
    const [filters] = useContext(FiltersContext)

    const [numMonsters, setNumMonsters] = useState<number|undefined>()
    const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty|"">("")

    // advanced settings
    const [genMode, setGenMode] = useState<GenMode|"">("random")

    const handleNumChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setNumMonsters(Math.max(Number(e.target.value), 1))
    }

    const generateEncounter = () => {
        // const encounter = GenerateRandomEncounter(graph, bestiary, monsterStats,
        //     Object.keys(combat), calculatePartyXP(players)[selectedDifficulty], numMonsters)
        const monsters = Object.keys(combat)
        const locked_monsters = monsters.filter(mon => combat[mon].locked)
        const thresholds = calculatePartyXP(players)
        let diff = selectedDifficulty
        if (diff === "") diff = random_from_list<Difficulty>(['easy', 'medium', 'hard'])
        let num = numMonsters
        if (!num) num = random_from_list([1, 2, 3, 4])
        const xp_min = thresholds[diff]
        const xp_lim = thresholds[difficulty_increase(diff)]
        console.log(xp_lim, diff, thresholds)
        let config = filters.config.affectGenerator ? {
            filters: {
                types: filters.types,
                tags: filters.tags,
                envs: filters.envs,
                sources: filters.sources,
                crMin: filters.crMin,
                crMax: filters.crMax
            }
        } : {}
        console.log("Supplying configs:", config)
        let encounter, error
        if (genMode === "random") encounter = GenerateRandomEncounter(graph, monsters, xp_lim, num, locked_monsters,
            undefined, true, config)
        if (genMode === "solo") {
            console.log(xp_lim)
            const res = GenerateSoloEncounter(graph, xp_lim, all_nodes, true, config.filters || {})
            encounter = res.encounter
            error = res.error

        }
        if (genMode === "boss & minions") {
            const res = GenerateBossMinionEncounter(graph, monsters, xp_lim, num, locked_monsters,
                all_nodes, true, config.filters || {})
            encounter = res.encounter
            error = res.error
        }
        if (genMode === "horde") encounter = GenerateRandomEncounter(graph, monsters, xp_lim, num, locked_monsters,
            undefined, true, config)

        if (encounter) setCombat(encounter)
        if (error) console.error(error)
        else console.log("No error")
    }

    return <div className="col">

        <div className="row py-2">
            <div className="col-md-auto d-flex flex-column justify-content-center encounterButtons">
                {/*<select id="genMode" className="form-select"*/}
                {/*        value={genMode}*/}
                {/*        onChange={e => setGenMode(e.target.value as GenMode)}*/}
                {/*>*/}
                {/*    <option value="" disabled hidden>Select Mode</option>*/}
                {/*    <option value="random">Random</option>*/}
                {/*    <option value="solo">Solo</option>*/}
                {/*    <option value="boss & minions">Boss & Minions</option>*/}
                {/*    <option value="horde">Horde</option>*/}
                {/*</select>*/}
                <button onClick={generateEncounter} id="generateEncounterButton" className="btn btn-outline-primary btn-lg leftbtn">
                    Random Encounter
                </button>
            </div>
            <div className="col-md d-flex flex-column justify-content-center encounterButtons">
                <div className="input-group">
                    <select className="form-select"
                            value={selectedDifficulty}
                            onChange={e => {setSelectedDifficulty(e.target.value as Difficulty)}}
                    >
                        <option value="" disabled hidden>Select</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                        <option value="deadly">Deadly</option>
                    </select>
                    <input className="form-control" disabled={genMode === "solo"} placeholder={`e.g. 1`}
                           type="number" value={numMonsters} onChange={handleNumChange}/>
                </div>
            </div>
        </div>

        {/*<div className="row col-md-auto encounterButtons py-2" id="generateEncounterButton">*/}
        {/*    <div className="col-auto">*/}
        {/*        <button onClick={generateEncounter} id="generateEncounterButton" className="btn btn-outline-primary btn-lg leftbtn">*/}
        {/*            Random Encounter*/}
        {/*        </button>*/}
        {/*    </div>*/}
        {/*</div>*/}
    </div>
}