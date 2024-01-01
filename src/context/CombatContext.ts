import React, {createContext} from "react";

type CombatContextType = [
    {[key:string]:number},
    React.Dispatch<React.SetStateAction<{[key:string]:number}>>
]

export const CombatContext = createContext<CombatContextType>([{}, () => {}])