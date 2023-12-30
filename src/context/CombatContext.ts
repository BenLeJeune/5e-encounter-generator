import React, {createContext} from "react";

type CombatContextType = [
    string[],
    React.Dispatch<React.SetStateAction<string[]>>
]

export const CombatContext = createContext<CombatContextType>([[], () => {}])