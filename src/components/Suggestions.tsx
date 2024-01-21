import React, {useContext, useEffect, useState} from 'react';
import {CombatContext} from "../context/CombatContext";
import {random_from_list} from "../helpers/misc_helpers";
import {generic_hazards} from "../locations/generic_hazards";
import {locations} from "../locations/locations";
import {Monster_Environment, Monster_Environment_Key, MONSTER_ENVIRONMENTS, Node} from "../types";
import {Lock, LockSlash} from 'iconoir-react'
import {generate_objective, generic_alternative_objectives} from "../strategies/alternative_objectives";
import {encounter_classifier} from "../strategies/encounter_classifier";

type Suggestions_Props = {
    all_nodes: {[key:string]:Node}
}


export default function Suggestions({all_nodes}: Suggestions_Props) {

    const [combat, setCombat] = useContext(CombatContext)

    const [environment, setEnvironment] = useState<Monster_Environment|"undead"|"fiend"|"aberration">('arctic')

    const [location, setLocation] = useState<{title:string, description:string, hazards:string[]}>
    ({title: '', description: '', hazards: ['']})

    const [hazard, setHazard] = useState<string>('')
    const [hazardType, setHazardType] = useState<"generic"|"location specific">("generic")
    const [strategy, setStrategy] = useState<{"title":string, "text": string}>(() => encounter_classifier(combat, all_nodes))
    const [objective, setObjective] = useState<{"title":string, "description": string}>(() => generate_objective(combat, all_nodes))

    const randomiseLocation = (env_to_use=environment) => {
        const env_locations = locations[env_to_use]
        const loc_titles = Object.keys(env_locations)
        const chosen_title = random_from_list(loc_titles) as keyof typeof env_locations
        setLocation({title: chosen_title, ...env_locations[chosen_title] as {description:string, hazards:string[]}})
    }

    // Whenever we update the location, pick a random hazard from that location
    useEffect(() => {
        if (!hazLocked) randomiseHazard(true)
    }, [location])

    // Whenever combat changes, we want to see if our predicted environment changes
    const [locked, setLocked] = useState<boolean>(false)

    const [stratLocked, setStratLocked] = useState(false)
    const [locLocked, setLocLocked] = useState(false)
    const [hazLocked, setHazLocked] = useState(false)
    const [objLocked, setObjLocked] = useState(false)

    useEffect(() => {
        const combat_nodes = Object.keys(combat).map(id => all_nodes[id])
        const env_weights = {} as {[key:string]:number}
        combat_nodes.forEach(m => {
            MONSTER_ENVIRONMENTS.forEach(env => {
                if (m["environment_" + env as Monster_Environment_Key] === 1) {
                    if (env in env_weights) env_weights[env] += 1
                    else env_weights[env] = 1
                }
            })
            if (m["type_fiend"] === 1) {
                if ('fiend' in env_weights) env_weights['fiend'] += 1
                else env_weights['fiend'] = 1
            }
            if (m["type_undead"] === 1) {
                if ('undead' in env_weights) env_weights['undead'] += 1
                else env_weights['undead'] = 1
            }
            if (m["type_aberration"] === 1) {
                if ('aberration' in env_weights) env_weights['aberration'] += 1
                else env_weights['aberration'] = 1
            }
        })
        const max_weight = Object.values(env_weights).reduce((p, n) => Math.max(p, n), 0)
        const max_weighted_envs = Object.keys(env_weights).filter(env => env_weights[env] === max_weight)
        if (max_weighted_envs.length !== 0) {
            const selected_env = random_from_list(max_weighted_envs as Monster_Environment[])
            setEnvironment(prev => {
                if (prev !== selected_env && !locLocked) randomiseLocation(selected_env)
                return selected_env
            })
        }
        else {
            // We don't have any selection. We make one at random.
            const selected_env = random_from_list([...MONSTER_ENVIRONMENTS] as Monster_Environment[])
            setEnvironment(prev => {
                if (prev !== selected_env && !locLocked) randomiseLocation(selected_env)
                return selected_env
            })
        }

        if (!stratLocked) {
            const strat = encounter_classifier(combat, all_nodes)
            setStrategy(strat)
        }

        if (!objLocked) setObjective(generate_objective(combat, all_nodes))


        encounter_classifier(combat, all_nodes)
    }, [combat])

    const randomiseHazard = (location_specific:boolean=false) => {
        const location_specific_hazards = location.hazards
        const unfair_coin_toss = Math.random() * 2
        if (unfair_coin_toss >= 1 || location_specific || generic_hazards[environment].length === 0) {
            setHazard(random_from_list(location_specific_hazards.filter(h => h !== hazard)))
            setHazardType("location specific")
        }
        else {
            setHazard(random_from_list(generic_hazards[environment].filter(h => h !== hazard)))
            setHazardType("generic")
        }
    }

    const randomiseObjective = (location_specific:boolean=false) => {
        setObjective(prev => random_from_list(generic_alternative_objectives.filter(n => n.title !== prev.title)))
    }

    const randomiseStrategy = () => {
        setStrategy(encounter_classifier(combat, all_nodes))
    }

    return Object.keys(combat).length === 0 ?
        <>
        <h4>Encounter Suggestions</h4>
            <p className="text-muted">
                Add creatures to (or generate) a combat, then get
                insights!
            </p>
        </>
        :
        <>

        <h4>Encounter Suggestions</h4>
        <hr/>
        <p className="opacity-25">
            Detected environment: {environment}.
            This section uses LLMs: <span className="text-decoration-underline cursor-pointer"
                                          data-bs-toggle="modal" data-bs-target="#encounterDetailModal"
        >click here for more.</span>
        </p>

        <div className="col flex-grow-1 position-relative">
            <div  style={{padding: '0 calc(var(--bs-gutter-x) * .5)'}}
                  className="position-absolute overflow-x-hidden overflow-y-auto p-0 d-flex flex-column responsive-fill-block h-100 w-100 suggestion">



                <Card title={strategy.title} subtitle="Strategy" locked={stratLocked} lockedCallback={() => setStratLocked(p=>!p)}
                      body={strategy.text} buttonName="Different Strategy" callback={randomiseStrategy}/>


                <Card title={location.title} subtitle={environment} locked={locLocked} lockedCallback={() => setLocLocked(p=>!p)}
                      body={location.description} buttonName="New Location" callback={randomiseLocation}/>
                <Card title="Hazards" locked={hazLocked} lockedCallback={() => setHazLocked(p=>!p)}
                      subtitle={hazardType} body={hazard} buttonName="New Hazard" callback={randomiseHazard}/>
                <Card title={objective.title} locked={objLocked} lockedCallback={() => setObjLocked(p=>!p)}
                      subtitle="Objective" body={objective.description} buttonName="New Objective"
                      callback={randomiseObjective}/>

                <div className="w-100 my-5 mobileOnly"/>
        </div>
    </div>
    </>
}


export const Card = (props:{
    title: string, subtitle?:string, body: string, buttonName?:string, callback?:()=>void,
    locked:boolean, lockedCallback:() => void
}) => {
    return <div className="card mb-2">
        <div className="card-body">
            <h5 className="card-title text-capitalize">
                {props.title}
                <small className="text-faded opacity-25 text-capitalize">
                    {props.subtitle ? ' ·' : ''} {props.subtitle}
                </small>
            </h5>
            <p className="class-text mb-0">{props.body}</p>
            {props.buttonName && props.callback ?
                <button className="btn btn-outline-primary mt-2" onClick={() => (props.callback as () => {})()}>
                    {props.buttonName}
                </button> : null}
            {<div className="position-absolute m-3 opacity-25" style={{bottom: 0, right: 0}}>
                <button className="btn" onClick={props.lockedCallback}>
                    {props.locked ? <Lock/> : <LockSlash/>}
                </button>
            </div>}
        </div>
    </div>
}