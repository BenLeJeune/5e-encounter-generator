import React, {createContext} from "react";
import {StringTypeDict} from "../types";

export type CombatEntry = {
    count: number,
    locked: boolean
}

type CombatContextType = [
    StringTypeDict<CombatEntry>,
    React.Dispatch<React.SetStateAction<StringTypeDict<CombatEntry>>>
]

export const CombatContext = createContext<CombatContextType>([{}, () => {}])