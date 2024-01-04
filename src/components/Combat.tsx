import React, {useContext, useState} from 'react';
import {CombatContext} from "../context/CombatContext";
import {calculateEncounterXP, calculatePartyXP, CR_TO_XP, parseCr} from "../helpers/xp_calculations";
import {
    getMonsterAlignment,
    getMonsterEnvironments,
    getMonsterTag,
    getMonsterType,
    getTypeAndTag
} from "../helpers/monster_parsers";
import {Difficulty, Link, Monster, MonsterData, Node} from "../types";
import {GenerateRandomEncounter} from "../GenerateEncounter";
import {PlayerContext} from "../context/PlayerContext";
import { } from "iconoir-react"

type CombatProps = {
    bestiary: Monster[],
    graph: {
        nodes:Node[],
        links:Link[]
    },
    monsterStats: MonsterData[],
    graphNodes:string[]
}
export default function Combat({bestiary, graph, monsterStats, graphNodes}:CombatProps) {

    const monsterLookup = (name: string) => {
        const matches = bestiary.filter(m => m.monster_name === name)
        if (matches.length === 0) return null
        else return matches[0]
    }

    const [combat, setCombat] = useContext(CombatContext)
    const [numMonsters, setNumMonsters] = useState(3)

    const players = useContext(PlayerContext)[0]
    const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('hard')

    const generateEncounter = () => {
        const encounter = GenerateRandomEncounter(graph, bestiary, monsterStats,
            Object.keys(combat), calculatePartyXP(players)[selectedDifficulty], numMonsters)
        setCombat(encounter)
    }

    const handleNumChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setNumMonsters(Number(e.target.value))
    }

    const clearEncounter = () => {
        setCombat({})
    }

    return <div className="container mb-1 d-flex flex-column">
        <div className="row">
            <div className="col">
                <h4>Combat</h4>
                <hr/>
            </div>
            {/*<div className="col-auto d-flex flex-column justify-content-center">*/}
            {/*    <button className="btn btn-outline-secondary">Coming Soon</button>*/}
            {/*</div>*/}
        </div>
        <div className="col flex-grow-1 position-relative">
            <div className="position-absolute h-100 w-100 overflow-y-auto overflow-x-hidden px-2">
                {
                    Object.keys(combat).map(monster => [monster, monsterLookup(monster)] as [string, Monster|null])
                        .filter(m => m[1] !== null).map(
                        monster => <CombatRow monster={monster[1] as Monster}
                                        in_graph={graphNodes.indexOf(monster[0]) !== -1}/>
                    )
                }
            </div>
        </div>
        <div className="row">
            <div className="col">
                <h6>
                    Total: {calculateEncounterXP(
                    combat,
                    Object.keys(combat).map(mon => [mon, monsterLookup(mon)] as [string, Monster]).reduce(
                        (p, n) => {
                            return {
                                ...p,
                                [n[0]]: CR_TO_XP[+n[1].cr]
                            }
                        }, {}
                    )
                )} XP
                </h6>
            </div>
        </div>
        <div className="row">
            <div className="col-auto">
                <button onClick={generateEncounter} className="btn btn-outline-primary btn-lg">
                    Generate Encounter
                </button>
            </div>
            <div className="col d-flex flex-column justify-content-center">
                <div className="input-group">
                    <select className="form-select"
                            value={selectedDifficulty}
                            onChange={e => {setSelectedDifficulty(e.target.value as Difficulty)}}
                    >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option selected value="hard">Hard</option>
                        <option value="deadly">Deadly</option>
                    </select>
                    <input className="form-control" type="number" value={numMonsters} onChange={handleNumChange}/>
                    <select className="form-select">
                        <option selected value="random">Random</option>
                        <option value="boss_minions">Boss & Minions</option>
                        <option value="2_monsters">2 Monsters</option>
                    </select>
                </div>
            </div>
            <div className="col-auto d-flex flex-column justify-content-center">
                <button className="btn btn-outline-danger" onClick={clearEncounter}>
                    Clear
                </button>
            </div>
        </div>

    </div>
}

type CombatRowProps = {monster:Monster, in_graph:boolean}
export function CombatRow({monster, in_graph}:CombatRowProps) {

    const [combat, setCombat] = useContext(CombatContext)

    const handleChange = (i:number) => (e:React.MouseEvent) => {
        e.preventDefault()
        let new_count = combat[monster.monster_name] + i
        if (new_count === 0) setCombat(prevState => {
            const {[monster.monster_name]: current, ...rest} = prevState
            return rest
        })
        else setCombat(prevState => {return {...prevState, [monster.monster_name]: new_count as number}})
    }

    return <div className="row mt-2">
        <div className="col">
            <h6 className="text-capitalize">
                {monster.monster_name} ({monster.source})
                <small className="text-muted" style={{marginLeft: "1em"}}>
                    CR {parseCr(monster.cr)} · XP {CR_TO_XP[+monster.cr]}
                    { in_graph ? null : <span className="text-warning"> · Not in graph</span>}
                </small>
            </h6>
            <p className="text-muted text-capitalize mb-0" style={{marginTop: "-.25rem"}}>
                {
                    [
                        getTypeAndTag(monster), getMonsterAlignment(monster), getMonsterEnvironments(monster).join(", ")
                    ].filter(s => s !== "").join(" · ")
                }
            </p>
        </div>
        <div className="col-auto justify-content-end align-items-center d-flex">
            <div className="input-group">
                <button type="button" onClick={handleChange(-1)} className="btn btn-outline-secondary">-</button>
                <div className="input-group-text" id="btnGroupAddon">{combat[monster.monster_name]}</div>
                <button type="button" onClick={handleChange(1)} className="btn btn-outline-secondary">+</button>
            </div>
        </div>
    </div>
}