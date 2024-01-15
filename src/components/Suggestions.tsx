import React, {useContext, useEffect, useState} from 'react';
import {CombatContext} from "../context/CombatContext";
import {underwater_locations} from "../locations/underwater_locations";
import {random_from_list} from "../helpers/misc_helpers";
import {generic_hazards} from "../locations/generic_hazards";
import {locations} from "../locations/locations";
import {Monster_Environment, Monster_Environment_Key, MONSTER_ENVIRONMENTS, Node} from "../types";

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

    const randomiseLocation = (env_to_use=environment) => {
        const env_locations = locations[env_to_use]
        const loc_titles = Object.keys(env_locations)
        const chosen_title = random_from_list(loc_titles) as keyof typeof env_locations
        setLocation({title: chosen_title, ...env_locations[chosen_title] as {description:string, hazards:string[]}})
    }

    // Whenever we update the location, pick a random hazard from that location
    useEffect(() => {
        randomiseHazard(true)
    }, [location])

    // Whenever combat changes, we want to see if our predicted environment changes
    const [locked, setLocked] = useState<boolean>(false)
    useEffect(() => {
        if (!locked) {
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
                    if (prev !== selected_env) randomiseLocation(selected_env)
                    return selected_env
                })
            }
        }
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
            <p className="text-muted opacity-25">
                Detected environment: {environment}.
                This section uses LLMs: <span className="text-decoration-underline cursor-pointer"
                                              data-bs-toggle="modal" data-bs-target="#encounterDetailModal"
                >click here for more.</span>
            </p>

            <Card title="Strategy"
                  body="The sahaguin should project their leader. She runs away if she falls below 30% HP."/>


            <Card title={location.title} subtitle={environment}
                  body={location.description}/>
            <Card title="Hazards" subtitle={hazardType} body={hazard} buttonName="New Hazard" callback={randomiseHazard}/>

            <div className="row">
                <div className="col-auto">
                    <button type="button" onClick={() => randomiseLocation()} className="btn btn-outline-primary">
                        Regenerate Location
                    </button>
                </div>
                <div className="col">
                    <button type="button" onClick={() => setLocked(prev => !prev)} className={`btn btn${locked ? '' : '-outline'}-secondary`}>
                        Lock
                    </button>
                </div>
            </div>
        </>
}


export const Card = (props:{title: string, subtitle?:string, body: string, buttonName?:string, callback?:()=>void}) => {
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
                <button className="btn btn-outline-secondary mt-2" onClick={() => (props.callback as () => {})()}>
                    {props.buttonName}
                </button> : null}
        </div>
    </div>
}