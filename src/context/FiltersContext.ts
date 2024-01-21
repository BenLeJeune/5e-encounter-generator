import React, {createContext} from "react";

export type Filters = {
    types: string[],
    tags: string[],
    envs: string[],
    crMin: number,
    crMax: number,
    config: {
        affectGenerator: boolean
    }
}

type FiltersContextType = [
    Filters,
    React.Dispatch<React.SetStateAction<Filters>>
]

export const DEFAULT_FILTERS = {
    types: [],
    tags: [],
    envs: [],
    crMin: 0,
    crMax: 30,
    config: {
        affectGenerator: false
    }
} as Filters

export const FiltersContext = createContext<FiltersContextType>(
    [DEFAULT_FILTERS, () => {}]
)