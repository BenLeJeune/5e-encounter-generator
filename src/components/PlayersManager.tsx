import React, {useContext} from 'react';
import {Xmark} from "iconoir-react";
import {PlayerContext} from "../context/PlayerContext";
import {valid_level} from "../types";
import {calculateDailyXP, calculatePartyXP, DIFFICULTIES} from "../helpers/xp_calculations";

export default function PlayersManager() {

    const [playerData, setPlayerData] = useContext(PlayerContext)

    const addLevelGroup = () => {
        setPlayerData(prev => [...prev, {level:undefined, num:undefined}])
    }

    return <>
            <div className="col">
                <h4>Your Party</h4>
                <hr/>
                <div className="row">
                    <div className="col">
                        <h6>Players</h6>
                    </div>
                    <div className="col">
                        <h6>Level</h6>
                    </div>
                </div>
                {
                    playerData.map((d, i) => <LevelGroup index={i}/>)
                }
                <button type='button' onClick={addLevelGroup} className="btn btn-outline-secondary">
                    Add New Level Group
                </button>
            </div>
            <div className="col">
                <h4>Xp</h4>
                <hr/>
                {
                    DIFFICULTIES.map(diff => <div className="row" key={diff}>
                        <div className="col">
                            <p className="text-capitalize m-0">{diff}</p>
                        </div>
                        <div className="col-4">
                            <p className="text-end m-0">{calculatePartyXP(playerData)[diff]}</p>
                        </div>
                    </div>)
                }
                <hr/>
                <div className="row">
                    <div className="col">
                        <p className="text-muted">Daily Budget</p>
                    </div>
                    <div className="col-4">
                        <p className="text-muted text-end">{calculateDailyXP(playerData)}</p>
                    </div>
                </div>
            </div>
    </>
}

function LevelGroup({index}:{index: number}) {

    const [playerData, setPlayerData] = useContext(PlayerContext)

    const changeNum = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        let n = Number(e.target.value)

        setPlayerData(prev => [
            ...prev.slice(0, index),
            { level: prev[index].level, num: Math.max(Math.round(n), 0)},
            ...prev.slice(index + 1)
        ])
    }
    const changeLevel = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        let lvl = Number(e.target.value) as number | undefined
        if (lvl === 0) lvl = undefined

        if (lvl === undefined || (Number.isInteger(lvl) && lvl >= 1 && lvl <= 20)) {
            const valid_lvl = lvl as valid_level
            setPlayerData(prev => [
                ...prev.slice(0, index),
                { num: prev[index].num, level: valid_lvl },
                ...prev.slice(index + 1)
            ])
        }


    }

    return <div className="row align-items-center mb-3" key={`player-levels-${index}`}>
        <div className="col">
            <div className="input-group">
                <input type="number" value={playerData[index].num} onChange={changeNum} className="form-control" placeholder='Players'
                       aria-label="Number of Players"/>
            </div>
        </div>
        <div style={{width: "1.5em", padding: "0"}}>
            <Xmark/>
        </div>
        <div className="col">
            <div className="input-group">
                <input type="number" value={playerData[index].level} onChange={changeLevel} className="form-control" placeholder='Level'
                       aria-label="Player Level"/>
            </div>
        </div>
    </div>
}