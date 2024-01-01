import React, {useContext, useState} from 'react';
import {CombatContext} from "../context/CombatContext";
import {CR_TO_XP, parseCr} from "../helpers/xp_calculations";
import {getMonsterAlignment, getMonsterEnvironments, getMonsterTag, getMonsterType} from "../helpers/monster_parsers";
import {Link, Monster, Node} from "../types";
import {GenerateRandomEncounter} from "../GenerateEncounter";

type CombatProps = {
    bestiary: Monster[],
    graph: {
        nodes:Node[],
        links:Link[]
    }
}
export default function Combat({bestiary, graph}:CombatProps) {

    const monsterLookup = (name: string) => {
        const matches = bestiary.filter(m => m.monster_name === name)
        if (matches.length === 0) return null
        else return matches[0]
    }

    const [combat, setCombat] = useContext(CombatContext)
    const [numMonsters, setNumMonsters] = useState(3)

    const generateEncounter = () => {
        const encounter = GenerateRandomEncounter(graph, bestiary, Object.keys(combat), numMonsters)
        setCombat(prev => {
            const obj = {} as {[mon:string]:number}
            encounter.forEach(monster => {
                if (!(monster in combat)) {
                    obj[monster] = 1
                }
            })
            return {...prev, ...obj}
        })
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
            <div className="col">
                <button className="btn btn-outline-secondary">Advanced</button>
            </div>
        </div>
        <div className="col flex-grow-1 position-relative">
            <div className="position-absolute h-100 w-100 overflow-y-auto overflow-x-hidden px-2">
                {
                    Object.keys(combat).map(monster => [monster, monsterLookup(monster)] as [string, Monster|null])
                        .filter(m => m[1] !== null).map(
                        monster => <CombatRow monster={monster[1] as Monster}/>
                    )
                }
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
                    <select className="form-select">
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

type CombatRowProps = {monster:Monster}
export function CombatRow({monster}:CombatRowProps) {

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
                </small>
            </h6>
            <p className="text-muted text-capitalize mb-0" style={{marginTop: "-.25rem"}}>
                {
                    [
                        getMonsterType(monster), getMonsterTag(monster), getMonsterAlignment(monster), getMonsterEnvironments(monster).join(", ")
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