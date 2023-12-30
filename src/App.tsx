import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import PlayersManager from "./components/PlayersManager";
import {PlayerData} from "./types";
import {PlayerContext} from "./context/PlayerContext";
import Graph from "./components/Graph";

function App() {

    const playerState = useState<PlayerData[]>([{level:undefined, num:undefined}])

    const [ graphData, setGraphData ] = useState(undefined)

    useEffect(() => {
        const getGraph = async() => {
            const graph_data = await fetch('5e-encounter-generator/data/test_graph.json')
            return await graph_data.json()
        }

        getGraph().then(graph => {
            setGraphData(graph)
        })
    }, [])


    return <>
      <PlayerContext.Provider value={playerState}>
          <div className="container-xxl">
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
          <div className="container">
              <div className="row">
                  <div className="col-5 border">
                      <PlayersManager/>
                  </div>
                  <div className="col border" id="graph-column" style={{position: "relative"}}>
                      {
                          graphData ? <Graph graph={graphData}/> : <></>
                      }
                  </div>
              </div>
          </div>
      </PlayerContext.Provider>
  </>
}

export default App;
