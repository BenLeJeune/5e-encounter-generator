import React, {useEffect, useState} from 'react';
import './App.css';
import PlayersManager from "./components/PlayersManager";
import {Monster, MonsterData, Node, PlayerData} from "./types";
import {PlayerContext} from "./context/PlayerContext";
import {CombatContext} from "./context/CombatContext";
import Graph from "./components/Graph";
import GraphLogo from './svg/GraphLogo.svg'
import {Modal} from 'bootstrap';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Bestiary from "./components/Bestiary";
import {varUrl} from "./helpers/misc_helpers";
import Combat from "./components/Combat";
import Papa from "papaparse";
import AboutModal from "./components/AboutModal";

function App() {

    const playerState = useState<PlayerData[]>([{level:undefined, num:undefined}])
    const combatState = useState<{[key:string]:number}>({})

    const [graphData, setGraphData] = useState(undefined)
    const [bestiaryData, setBestiaryData] = useState<Monster[]|undefined>(undefined)
    const [monsterStats, setMonsterStats] = useState<MonsterData[]>([])

    const [graphNodes, setGraphNodes] = useState<string[]>([])

    useEffect(() => {
        const getGraph = async() => {
            const graph_data = await fetch(varUrl('data/graph.json'))
            return await graph_data.json()
        }

        const getBestiary = async () => {
            const bestiary = await fetch(varUrl('data/bestiary.csv'))
            return bestiary.text();
        }

        const getMonsterStats = async () => {
            const monsterStats = await fetch(varUrl('data/monster_data.csv'))
            return monsterStats.text()
        }

        getGraph().then(graph => {
            setGraphData(graph)
            setGraphNodes((graph.nodes as {id:string}[]).map(n => n.id))
        })

        getBestiary().then(bestiary => {
            const bestiary_obj = Papa.parse(bestiary, {header:true}).data.slice(1)
            const sortedBestiary = (bestiary_obj as Monster[])
                .slice(0, -1)
                .filter(m => m.reprinted === "False")
                .sort((a, b) => a.monster_name < b.monster_name ? -1 : 1)
            setBestiaryData(sortedBestiary)
        })

        getMonsterStats().then(monsterStats => {
            const monsterStatsObj = Papa.parse(monsterStats, {header:true}).data
            setMonsterStats((monsterStatsObj as MonsterData[]).slice(0, -1))
        })
    }, [])

    const showModal = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        const modalEl = document.getElementById("aboutModal")
        if (modalEl !== null) {
            const modal = new Modal(modalEl, {})
            modal.show()
        }
    }


    return  <>
        <AboutModal/>
    <PlayerContext.Provider value={playerState}>
        <CombatContext.Provider value={combatState}>
          <div className="container-fluid">
              <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                  <a href="/5e-encounter-generator"
                     className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                      <img src={GraphLogo} alt="EnGen logo" style={{height: "3rem"}} className="mx-2"/>
                      <span className="fs-4 fw-bold">EnGen</span>
                  </a>
                  <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                      <li>
                          <a onClick={e => showModal(e)} style={{cursor:"pointer"}} className="nav-link px-2 link-secondary">About EnGen</a>
                      </li>
                      <li>
                          <a href="/" className="nav-link px-2 link-secondary">About Me</a>
                      </li>
                  </ul>
              </header>
          </div>
            <div className="container-xxl flex-grow-1 mb-3">
                <div id="borderRow" className="row">
                    <div className="col-md-5 d-flex flex-column">
                        <div className="row">
                            <PlayersManager/>
                            <hr className="my-4"/>
                        </div>
                        <div className="row flex-grow-1">
                            {bestiaryData ? <Bestiary bestiary={bestiaryData} graphNodes={graphNodes}/> : <></>}
                        </div>
                    </div>
                    <div className="col d-flex flex-column">
                        <div className="row" id="graph-column">
                            {
                                graphData ? <Graph graph={graphData}/> : <></>
                            }
                        </div>
                        <div className="row flex-grow-1">
                            {bestiaryData && graphData ?
                                <Combat graphNodes={graphNodes} monsterStats={monsterStats} bestiary={bestiaryData} graph={graphData}/>
                                :  <></>}
                        </div>
                    </div>
                </div>
            </div>
        </CombatContext.Provider>
    </PlayerContext.Provider>
    </>
}

export default App;
