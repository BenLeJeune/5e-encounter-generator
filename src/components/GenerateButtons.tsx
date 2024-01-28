import React, {useContext, useState} from 'react';
import {Difficulty, Link, Node} from "../types";
import {PlayerContext} from "../context/PlayerContext";
import {CombatContext} from "../context/CombatContext";
import {FiltersContext} from "../context/FiltersContext";
import {calculatePartyXP, difficulty_increase} from "../helpers/xp_calculations";
import {GenerateRandomEncounter} from "../algorithms/GenerateRandomEncounter";

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

    const [numMonsters, setNumMonsters] = useState(3)
    const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('hard')

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
        const xp_min = thresholds[selectedDifficulty]
        const xp_max = thresholds[difficulty_increase(selectedDifficulty)]
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
        const encounter = GenerateRandomEncounter(graph, monsters, xp_lim, numMonsters, locked_monsters,
            undefined, true, config)
        setCombat(encounter)
    }

    return <div className="col">
        <div className="row">
            <div className="row col-md-auto encounterButtons" id="generateEncounterButton">
                <div className="col-auto">
                    <button onClick={generateEncounter} id="generateEncounterButton" className="btn btn-outline-primary btn-lg leftbtn">
                        Generate Encounter
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