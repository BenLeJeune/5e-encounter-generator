import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import PlayersManager from "./components/PlayersManager";
import {
    Link,
    Monster,
    Monster_Environment_Key,
    Monster_Tag_Key,
    MONSTER_TAGS,
    Monster_Type_Key,
    MonsterData,
    Node,
    PlayerData, StringTypeDict
} from "./types";
import {PlayerContext} from "./context/PlayerContext";
import {CombatContext, CombatEntry} from "./context/CombatContext";
import Graph from "./components/Graph";
import GraphLogo from './assets/svg/GraphLogo.svg'
import {Modal} from 'bootstrap';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Bestiary from "./components/Bestiary";
import {varUrl} from "./helpers/misc_helpers";
import Combat from "./components/Combat";
import Papa from "papaparse";
import AboutModal from "./components/AboutModal";
import SuggestionsInfo from "./components/SuggestionsInfo";
import Suggestions from "./components/Suggestions";
import {FiltersContext, Filters, DEFAULT_FILTERS} from "./context/FiltersContext";
import {filter_node, filter_nodes} from "./helpers/filter_utils";

function App() {

    const playerState = useState<PlayerData[]>([{level:undefined, num:undefined}])
    const combatState = useState<StringTypeDict<CombatEntry>>({})
    const filterState = useState<Filters>(DEFAULT_FILTERS)

    const [graphData, setGraphData] = useState<{nodes:Node[], links:Link[]}|undefined>(undefined)
    const [graphNodes, setGraphNodes] = useState<string[]>([])

    const [filteredNodes, setFilteredNodes] = useState<Node[]>([])


    useEffect(() => {
        if (graphData) {
            filter_nodes<Monster_Type_Key>(graphData.nodes, filterState[0].types, 'type_')
                .then(nodes => filter_nodes<Monster_Tag_Key>(nodes, filterState[0].tags, 'tag_'))
                .then(nodes => filter_nodes<Monster_Environment_Key>(nodes, filterState[0].envs, 'environment_'))
                .then(nodes => nodes.filter(node => node.cr >= filterState[0].crMin && node.cr <= filterState[0].crMax))
                .then(nodes => nodes.filter(node => filterState[0].sources.length === 0 || filterState[0].sources.indexOf(node.source.toLowerCase()) !== -1))
                .then(setFilteredNodes)
        }
    }, [filterState[0], graphData])

    useEffect(() => {
        // --- :: ---
        // FETCHING THE GRAPH DATA
        // --- :: ---
        const getGraph = async() => {
            const graph_data = await fetch(varUrl('data/detailed_graph.json'))
            return await graph_data.json() as {nodes:Node[], links:Link[]}
        }

        getGraph().then(graph => {
            // @ts-ignore
            window.graph = graph
            // @ts-ignore
            window.filterNode = filter_node
            // @ts-ignore
            window.filterNodes = filter_nodes
            setGraphData(graph)
            setGraphNodes((graph.nodes as {id:string}[]).map(n => n.id))
            all_nodes_ref.current = (graph.nodes as Node[]).reduce((p, n) => {
                return {...p, [n.id]: n}
            }, {} as {[key:string]:Node})
            // @ts-ignore
            window.all_nodes = all_nodes_ref.current
        })
    }, [])

    const all_nodes_ref = useRef<{[key:string]:Node}>({})

    // Shows the 'about' modal
    // for some reason this has to here, otherwise it's weird
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
    <SuggestionsInfo/>
    <PlayerContext.Provider value={playerState}>
        <CombatContext.Provider value={combatState}>
        <FiltersContext.Provider value={filterState}>
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
                    <div className="col-md-4 d-flex flex-column">
                        <div className="row">
                            <PlayersManager/>
                            <hr className="my-4"/>
                        </div>
                        <div className="row flex-grow-1">
                            {graphData ? <Bestiary bestiary={filteredNodes} all_nodes={graphData.nodes} graphNodes={graphNodes}/> : <></>}
                        </div>
                    </div>
                    <div className="col-md-5 d-flex flex-column">
                        <div className="row" id="graph-column">
                            {
                                graphData ? <Graph graph={graphData} all_nodes={all_nodes_ref.current}/> : <></>
                            }
                        </div>
                        <div className="row flex-grow-1">
                            {graphData ?
                                <Combat graphNodes={graphNodes} graph={graphData}/>
                                :  <></>}
                        </div>
                    </div>
                    <div className="col-md-3 d-flex flex-column">
                        <Suggestions all_nodes={all_nodes_ref.current}/>
                    </div>
                </div>
            </div>
        </FiltersContext.Provider>
        </CombatContext.Provider>
    </PlayerContext.Provider>
    </>
}

export default App;
