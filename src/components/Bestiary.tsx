import React, {useEffect, useState} from 'react';
import Papa from "papaparse";
import {Monster} from "../types";
import {CR_TO_XP, parseCr} from "../helpers/xp_calculations";
import {getMonsterAlignment, getMonsterEnvironments, getMonsterTag, getMonsterType} from "../helpers/monster_parsers";
import {PlusCircle} from "iconoir-react";
import {varUrl} from "../helpers/misc_helpers";

type Bestiary_Props = {}

export default function Bestiary(props: Bestiary_Props) {

    const [bestiary, setBestiary] = useState<Monster[]>()

    useEffect(() => {
        const fetchBestiary = async () => {
            const bestiary = await fetch(varUrl('data/bestiary.csv'))
            return bestiary.text();
        }

        fetchBestiary().then(bestiary => {
            console.log("BESTIARY")
            const bestiary_obj = Papa.parse(bestiary, {header:true}).data.slice(1)
            console.log(bestiary_obj)
            setBestiary(bestiary_obj as Monster[])
        })
    }, [])

    return bestiary ? <>
        <BestiaryRow monster={bestiary[400]}/> <hr/>
        <BestiaryRow monster={bestiary[401]}/> <hr/>
        <BestiaryRow monster={bestiary[402]}/>
    </> : null
}

type BestiaryRowProps = {
    monster: Monster
}

const count = 3

function BestiaryRow({monster}:BestiaryRowProps) {
    return <div className="row mt-2">
        <div className="col">
            <h6 className="text-capitalize">
                {monster.monster_name} ({monster.source})
                <small className="text-muted" style={{marginLeft: "1em"}}>CR {parseCr(monster.cr)} · XP {CR_TO_XP[+monster.cr]}</small>
            </h6>
            <p className="text-muted text-capitalize mb-0" style={{marginTop: "-.25rem"}}>
                {
                    [
                        getMonsterType(monster), getMonsterTag(monster), getMonsterAlignment(monster), getMonsterEnvironments(monster).join(", ")
                    ].filter(s => s !== "").join(" · ")
                }
            </p>
        </div>
        <div className="col-4 justify-content-end align-items-center d-flex">
            <button type="button" className="btn btn-primary">
                Add
            </button>
        </div>
    </div>
}