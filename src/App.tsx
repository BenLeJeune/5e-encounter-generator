import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import PlayersManager from "./components/PlayersManager";
import {PlayerData} from "./types";
import {PlayerContext} from "./context/PlayerContext";
import {CombatContext} from "./context/CombatContext";
import Graph from "./components/Graph";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Bestiary from "./components/Bestiary";
import {varUrl} from "./helpers/misc_helpers";

function App() {

    const playerState = useState<PlayerData[]>([{level:undefined, num:undefined}])
    const combatState = useState<string[]>([])

    const [ graphData, setGraphData ] = useState(undefined)

    useEffect(() => {
        const getGraph = async() => {
            const graph_data = await fetch(varUrl('data/graph.json'))
            return await graph_data.json()
        }

        getGraph().then(graph => {
            setGraphData(graph)
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
                            <Bestiary/>
                        </div>
                    </div>
                    <div className="col border">
                        <div className="row" id="graph-column" style={{minHeight: "500px"}}>
                            {
                                graphData ? <Graph graph={graphData}/> : <></>
                            }
                        </div>
                        <div className="row">
                            <p>Combat</p>
                        </div>
                    </div>
                </div>
            </div>
        </CombatContext.Provider>
    </PlayerContext.Provider>
}

export default App;
