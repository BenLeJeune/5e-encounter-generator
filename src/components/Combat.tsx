import React, {useContext, useState} from 'react';
import {CombatContext} from "../context/CombatContext";
import {
    calculateEncounterXP,
    calculatePartyXP,
    CR_TO_XP,
    difficulty_increase,
    parseCr
} from "../helpers/xp_calculations";
import {
    getMonsterAlignment,
    getMonsterEnvironments,
    getTypeAndTag
} from "../helpers/monster_parsers";
import {Difficulty, Link, Node} from "../types";
import {GenerateRandomEncounter} from "../GenerateRandomEncounter"
import {PlayerContext} from "../context/PlayerContext";
import {FiltersContext} from "../context/FiltersContext";
import {combat_counts} from "../helpers/monster_helpers";
import {Lock, LockSlash} from "iconoir-react";

type CombatProps = {
    graph: {
        nodes:Node[],
        links:Link[]
    },
    graphNodes:string[]
}
export default function Combat({graph, graphNodes}:CombatProps) {

    const monsterLookup = (name: string) => {
        const matches = graph.nodes.filter(m => m.id === name)
        if (matches.length === 0) return null
        else return matches[0]
    }

    const [filters] = useContext(FiltersContext)

    const [combat, setCombat] = useContext(CombatContext)
    const [numMonsters, setNumMonsters] = useState(3)

    const players = useContext(PlayerContext)[0]
    const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('hard')

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

    const handleNumChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setNumMonsters(Number(e.target.value))
    }

    const clearEncounter = () => {
        setCombat({})
    }

    const get_xp_section = () => {
        const xp = calculateEncounterXP(combat_counts(combat),
            Object.keys(combat).map(mon => [mon, monsterLookup(mon)] as [string, Node])
                .reduce(
                    (p, n) => ({
                        ...p,
                        [n[0]]: CR_TO_XP[+n[1].cr]
                    }), {}
        ))
        const thresholds = calculatePartyXP(players)
        let diff_string = ""
        if (thresholds['absurd'] !== 0) {
            if (xp < thresholds['easy']) diff_string = '(Trivial)'
            else if (xp < thresholds['medium']) diff_string = '(Easy)'
            else if (xp < thresholds['hard']) diff_string = '(Medium)'
            else if (xp < thresholds['deadly']) diff_string = '(Hard)'
            else if (xp < thresholds['absurd']) diff_string = '(Deadly)'
            else diff_string = '(Absurd)'
        }
        return <h6>
            Total: {xp} XP {diff_string}
        </h6>
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
            <div className="position-absolute h-100 w-100 overflow-y-auto overflow-x-hidden px-2 responsive-fill-block">
                {
                    Object.keys(combat).map(monster => [monster, monsterLookup(monster)] as [string, Node|null])
                        .filter(m => m[1] !== null).map(
                        monster => <CombatRow monster={monster[1] as Node}
                                        in_graph={graphNodes.indexOf(monster[0]) !== -1}/>
                    )
                }
            </div>
        </div>
        <div className="row">
            <div className="col">
                {get_xp_section()}
            </div>
        </div>
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
                    {/*<select className="form-select">*/}
                    {/*    <option selected value="random">Random</option>*/}
                    {/*    /!*<option value="boss_minions">Boss & Minions</option>*!/*/}
                    {/*    /!*<option value="2_monsters">2 Monsters</option>*!/*/}
                    {/*</select>*/}
                </div>
            </div>
            <div className="col-md-auto d-flex flex-column justify-content-center encounterButtons mobileHide">
                <button className="btn btn-outline-danger" onClick={clearEncounter}>
                    Clear
                </button>
            </div>
        </div>

    </div>
}

type CombatRowProps = {monster:Node, in_graph:boolean}
export function CombatRow({monster, in_graph}:CombatRowProps) {

    const [combat, setCombat] = useContext(CombatContext)

    const handleChange = (i:number) => (e:React.MouseEvent) => {
        e.preventDefault()
        let new_count = combat[monster.id].count + i
        if (new_count === 0) setCombat(prevState => {
            const {[monster.id]: current, ...rest} = prevState
            return rest
        })
        else setCombat(prevState => ({
            ...prevState,
            [monster.id]: {
                locked: prevState[monster.id].locked,
                count: new_count as number
            }
        }))
    }

    const toggleLocked = () => setCombat(prevState => ({
        ...prevState,
        [monster.id]: {
            locked: !prevState[monster.id].locked,
            count: prevState[monster.id].count
        }
    }))


    return <div className={`row mt-1 p-1 bestiaryRow ${combat[monster.id].locked ? 'bestiaryNoOutline' : 'bg-body-secondary'}`}>
        <div className="col">
            <h6 className="text-capitalize">
                {monster.id} ({monster.source})
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
            <button className="btn opacity-25 mx-1" onClick={toggleLocked}>
                {combat[monster.id].locked ? <Lock/> : <LockSlash/>}
            </button>
            <div className="input-group">
                <button type="button" onClick={handleChange(-1)} className="btn btn-outline-secondary">-</button>
                <div className="input-group-text" id="btnGroupAddon">{combat[monster.id].count}</div>
                <button type="button" onClick={handleChange(1)} className="btn btn-outline-secondary">+</button>
            </div>
        </div>
    </div>
}