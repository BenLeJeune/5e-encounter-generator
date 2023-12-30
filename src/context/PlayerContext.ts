import React, {createContext} from "react";
import {PlayerData} from "../types";

type PlayerContextType = [
    PlayerData[],
    React.Dispatch<React.SetStateAction<PlayerData[]>>
]
export const PlayerContext = createContext<PlayerContextType>([[], ()=>{}])