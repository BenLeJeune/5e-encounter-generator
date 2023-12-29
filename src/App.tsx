import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import PlayersManager from "./PlayersManager";
import {PlayerData} from "./types";
import {PlayerContext} from "./Context/PlayerContext";

function App() {

    const playerState = useState<PlayerData[]>([{level:undefined, num:undefined}])

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
                  <div className="col border-danger">
                      <PlayersManager/>
                  </div>
                  <div className="col border">
                      <span>B</span>
                  </div>
              </div>
          </div>
      </PlayerContext.Provider>
  </>
}

export default App;
