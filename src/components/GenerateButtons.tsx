import React, {useContext, useState} from 'react';
import {Difficulty, Link, Node} from "../types";
import {PlayerContext} from "../context/PlayerContext";
import {CombatContext} from "../context/CombatContext";
import {FiltersContext} from "../context/FiltersContext";
import {calculatePartyXP, difficulty_increase} from "../helpers/xp_calculations";
import {GenerateRandomEncounter} from "../algorithms/GenerateRandomEncounter";
import {random_from_list} from "../helpers/misc_helpers";

type GenerateButtons_Props = {
    graph: {
        nodes: Node[],
        links: Link[]
    }
}

export default function GenerateButtons({graph}: GenerateButtons_Props) {

    const players = useContext(PlayerContext)[0]
    const [combat, setCombat] = useContext(CombatContext)
    const [filters] = useContext(FiltersContext)

    const [numMonsters, setNumMonsters] = useState<number|undefined>()
    const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty|"">("")

    const handleNumChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setNumMonsters(Number(e.target.value))
    }

    const clearEncounter = () => {
        setCombat({})
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
        const xp_max = thresholds[difficulty_increase(diff)]
        const xp_lim = xp_max
        console.log(xp_lim)
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
        const encounter = GenerateRandomEncounter(graph, monsters, xp_lim, num, locked_monsters,
            undefined, true, config)
        setCombat(encounter)
    }

    return <div className="col">
        <div className="row">
            <div className="row col-md-auto encounterButtons" id="generateEncounterButton">
                <div className="col-auto">
                    <button onClick={generateEncounter} id="generateEncounterButton" className="btn btn-outline-primary btn-lg leftbtn">
                        Random Encounter
                    </button>
                </div>
                <div className="col mobileOnly">
                    <button className="btn btn-lg btn-outline-danger" onClick={clearEncounter}>
                        Clear
                    </button>
                </div>
            </div>


            <div className="col-md d-flex py-1 flex-column justify-content-center encounterButtons">
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
                    <input className="form-control" type="number" value={numMonsters} onChange={handleNumChange}/>
                </div>
            </div>
        </div>
    </div>
}