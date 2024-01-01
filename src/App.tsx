import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import PlayersManager from "./components/PlayersManager";
import {Monster, PlayerData} from "./types";
import {PlayerContext} from "./context/PlayerContext";
import {CombatContext} from "./context/CombatContext";
import Graph from "./components/Graph";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Bestiary from "./components/Bestiary";
import {varUrl} from "./helpers/misc_helpers";
import Combat from "./components/Combat";
import Papa from "papaparse";

function App() {

    const playerState = useState<PlayerData[]>([{level:undefined, num:undefined}])
    const combatState = useState<{[key:string]:number}>({})

    const [ graphData, setGraphData ] = useState(undefined)
    const [bestiaryData, setBestiaryData] = useState<Monster[]|undefined>(undefined)

    useEffect(() => {
        const getGraph = async() => {
            const graph_data = await fetch(varUrl('data/graph.json'))
            return await graph_data.json()
        }

        const getBestiary = async () => {
            const bestiary = await fetch(varUrl('data/bestiary.csv'))
            return bestiary.text();
        }

        getGraph().then(graph => {
            setGraphData(graph)
        })

        getBestiary().then(bestiary => {
            console.log("BESTIARY")
            const bestiary_obj = Papa.parse(bestiary, {header:true}).data.slice(1)
            console.log(bestiary_obj)
            const sortedBestiary = (bestiary_obj as Monster[]).slice(0, -1).sort((a, b) => a.monster_name < b.monster_name ? -1 : 1)
            setBestiaryData(sortedBestiary)
        })
    }, [])


    return  <PlayerContext.Provider value={playerState}>
        <CombatContext.Provider value={combatState}>
          <div className="container-fluid">
              <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                  <a href="/5e-encounter-generator"
                     className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                      <span className="fs-4 fw-bold">EnGen</span>
                  </a>
                  <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                      <li>
                          <a href="/5e-encounter-generator" className="nav-link px-2 link-secondary">Encounter Builder</a>
                      </li>
                      <li>
                          <a href="/" className="nav-link px-2">About Me</a>
                      </li>
                  </ul>
              </header>
          </div>
            <div className="container-xxl flex-grow-1 mb-3">
                <div id="borderRow" className="row">
                    <div className="col-5 border d-flex flex-column">
                        <div className="row">
                            <PlayersManager/>
                            <hr className="my-4"/>
                        </div>
                        <div className="row flex-grow-1">
                            {bestiaryData ? <Bestiary bestiary={bestiaryData}/> : <></>}
                        </div>
                    </div>
                    <div className="col border d-flex flex-column">
                        <div className="row" id="graph-column" style={{minHeight: "500px"}}>
                            {
                                graphData ? <Graph graph={graphData}/> : <></>
                            }
                        </div>
                        <div className="row flex-grow-1">
                            {bestiaryData && graphData ? <Combat bestiary={bestiaryData} graph={graphData}/> :  <></>}
                        </div>
                    </div>
                </div>
            </div>
        </CombatContext.Provider>
    </PlayerContext.Provider>
}

export default App;
