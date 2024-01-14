import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {Modal} from 'bootstrap';
import {generic_underwater_hazards, underwater_locations} from "../locations/underwater_locations";
import {random_from_list} from "../helpers/misc_helpers";

const environment = "underwater"

export default function EncounterDetailModal() {

    const [location, setLocation] = useState<{title:string, description:string, hazards:string[]}>
    ({title: '', description: '', hazards: []})

    const [hazard, setHazard] = useState<string>('')

    const randomiseLocation = () => {
        const locations = underwater_locations
        const loc_titles = Object.keys(locations)
        const chosen_title = random_from_list(loc_titles) as keyof typeof locations
        setLocation({title: chosen_title, ...locations[chosen_title] as {description:string, hazards:string[]}})
    }

    // Whenever we update the location, pick a random hazard from that location
    useEffect(() => {
        randomiseHazard(true)
    }, [location])

    const randomiseHazard = (location_specific:boolean=false) => {
        const location_specific_hazards = location.hazards
        const generic_hazards = generic_underwater_hazards
        const unfair_coin_toss = Math.random() * 2
        if (unfair_coin_toss >= 1 || location_specific) setHazard(random_from_list(location_specific_hazards))
        else setHazard(random_from_list(generic_hazards))
    }

    return <div className="modal modal-xl fade" id="encounterDetailModal" tabIndex={-1}
                aria-labelledby="encounterDetailModalLabel"
                aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header border-0">
                    <h2 className="modal-title" id="exampleModalLabel">Encounter Suggestions</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <Card title="Environment" body={`We suggest an ${environment} environment.`}/>
                            <Card title="Hazards" body={hazard}/>
                        </div>
                        <div className="col-sm-6">
                            <Card title={`Location - ${location.title}`}
                                  body={location.description}/>
                            <Card title="Strategy"
                                  body="The sahaguin should project their leader. She runs away if she falls below 30% HP."/>
                        </div>
                    </div>
                </div>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-auto">
                        <button type="button" onClick={() => randomiseLocation()} className="btn btn-outline-primary">
                            Regenerate
                        </button>
                    </div>
                </div>
                <div className="modal-footer border-0">
                    <p className="text-muted opacity-25">
                        The options shown here are a combination of hand-written and AI-generated, to allow
                        for variety.
                    </p>
                    <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
}

export const Card = (props:{title: string, body: string, buttonName?:string, callback?:()=>void}) => {
    return <div className="card mb-2">
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="class-text">{props.body}</p>
            {props.buttonName && props.callback ?
                <button className="btn btn-primary" onClick={() => (props.callback as () => {})()}>
                {props.buttonName}
            </button> : null}
        </div>
    </div>
}