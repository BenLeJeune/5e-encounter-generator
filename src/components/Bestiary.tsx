import React, {ReactElement, useContext, useEffect, useLayoutEffect, useState} from 'react';
import Papa from "papaparse";
import {Link, Monster, MONSTER_ENVIRONMENTS, MONSTER_TAGS, MONSTER_TYPES, Node} from "../types";
import {CR_TO_XP, parseCr} from "../helpers/xp_calculations";
import {getMonsterAlignment, getMonsterEnvironments, getMonsterTag, getMonsterType} from "../helpers/monster_parsers";
import {PlusCircle} from "iconoir-react";
import {varUrl} from "../helpers/misc_helpers";
import {count} from "d3";
import {CombatContext} from "../context/CombatContext";

type Bestiary_Props = {
    bestiary: Monster[],
    graphNodes:string[]
}

const filterDefaults = (b:boolean) => {
    return {
        types: MONSTER_TYPES.reduce((p, t) => {
            return {
                ...p, [t]: b
            }
        }, {} as { [key: string]: boolean }),
        tags: MONSTER_TAGS.reduce((p, tag) => {
            return {
                ...p, [tag]: b
            }
        }, {} as { [key: string]: boolean }),
        envs: MONSTER_ENVIRONMENTS.reduce((p, env) => {
            return {
                ...p, [env]: b
            }
        }, {} as { [key: string]: boolean })
    }
}

export default function Bestiary({bestiary, graphNodes}: Bestiary_Props) {

    //const [bestiary, setBestiary] = useState<Monster[]>()

    const [searchTerm, setSearchTerm] = useState<string>('')

    const [numButtons, setNumButtons] = useState<number>(1)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [numResults, setNumResults] = useState<number>(() => bestiary.length)
    const [pageLength, setPageLength] = useState<number>(25)
    const [buttonsOffset, setButtonsOffset] = useState<number>(0)
    const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const s = e.target.value
        if (bestiary) {
            const filtered = bestiary.filter(m => m.monster_name.indexOf(s) !== -1)
                .filter(m => showAllMonsters || graphNodes.indexOf(m.monster_name) !== -1)
                // .filter(
                //     m => {
                //         const t = getMonsterType(m)
                //         const tags = getMonsterTag(m)
                //         const envs = getMonsterEnvironments(m)
                //         return filters.types[t] &&
                //             (envs.length === 0 || envs.reduce((prev, env) => prev || filters.envs[env], false))
                //             && (tags.length === 0 || tags.reduce((prev, tag) => prev || filters.tags[tag], false))
                //     }
                // )
            setNumResults(filtered.length)
            const next_max_pages = Math.ceil(filtered.length / pageLength)
            if ( next_max_pages < currentPage) {
                setCurrentPage( Math.max(next_max_pages, 1) )
            }
            setButtonsOffset(prev => Math.max(Math.min(prev, next_max_pages - 1), 0))
        }
        setSearchTerm(s)
    }

    useLayoutEffect(() => {
        window.addEventListener('resize', calculatePageLinksNum)
        calculatePageLinksNum()
        return () => window.removeEventListener('resize', calculatePageLinksNum)
    })

    const calculatePageLinksNum = () => {
        const arrowButton = document.getElementById("prevPageButton")
        const numButton = document.getElementById("firstPageNumBtn")
        const container = document.getElementById("bestiaryPagination")
        if (arrowButton && numButton && container) {
            const { width: arrX } = arrowButton.getBoundingClientRect()
            const { width: numX } = numButton.getBoundingClientRect()
            const { width: navX } = container.getBoundingClientRect()
            const maxX = navX - (3*numX)
            const numButtons =  Math.max(Math.floor(maxX / (numX + 2)), 1)
            setNumButtons(numButtons)
        }
    }

    const handlePageNavigation = (e:React.MouseEvent, i:number) => {
        e.preventDefault()
        setCurrentPage(i)
    }
    const incrementButtons = (e:React.MouseEvent, i:number) => {
        e.preventDefault()
        setButtonsOffset(prev => Math.max(0, prev + i))
    }
    const getPageLinks = () => {
        const btns = [] as ReactElement[]
        const num_pages = Math.ceil(numResults / pageLength)
        for (let i = 1; i <= numButtons ; i++) {
            const page = i + buttonsOffset
            btns.push(
                <li className={`page-item align-middle ${page === currentPage ? 'active' : ''} ${num_pages < page ? 'disabled' : ''}`} key={page}
                    id={page === buttonsOffset + 1 ?  "firstPageNumBtn" : ""}>
                    <a className="bestiary page-link" onClick={e => handlePageNavigation(e, page)} href="#">{page}</a>
                </li>
            )
        }
        return btns
    }
    const displayBestiary = () => {
        if (bestiary) {
            const [start, end] = [(currentPage - 1) * pageLength, currentPage * pageLength]
            const filtered = bestiary.filter(m => m.monster_name.indexOf(searchTerm.toLowerCase()) !== -1)
                .filter(m => showAllMonsters || graphNodes.indexOf(m.monster_name) !== -1)
                .slice(start, end)
                // .filter(
                //     m => {
                //         const t = getMonsterType(m)
                //         const tags = getMonsterTag(m)
                //         const envs = getMonsterEnvironments(m)
                //         return filters.types[t] &&
                //         (envs.length === 0 || envs.reduce((prev, env) => prev || filters.envs[env], false))
                //         && (tags.length === 0 || tags.reduce((prev, tag) => prev || filters.tags[tag], false))
                //     }
                // )
            if (filtered.length > 0) {
                return filtered.map(monster =>
                    <>
                        <BestiaryRow monster={monster} in_graph={graphNodes.indexOf(monster.monster_name) !== -1}/>
                        <hr className="mx-3"/>
                    </>
                )
            }
            else return <p className="text-center text-muted mt-3">No results :(</p>
        }
        else return <p>Loading</p>
    }

    //
    /// --==: Filters :==--
    //
    //const [filters, setFilters] = useState(filterDefaults(true))
    const [showAllMonsters, setShowAllMonsters] = useState<boolean>(false)

    return bestiary ? <>
            <div className="container mb-1 d-flex flex-column">
        <div className="row">
            <div className="col">
                <h4>Bestiary</h4>
                <hr/>
            </div>
            {/*<div className="col-auto">*/}
            {/*    <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal"*/}
            {/*            data-bs-target="#filterModal">*/}
            {/*        Filters*/}
            {/*    </button>*/}
            {/*</div>*/}
            <div className="col-auto">
                <input type="checkbox" checked={showAllMonsters}
                       onChange={e => setShowAllMonsters(b => !b)}
                       className="btn-check" id="btn-check" autoComplete="off"/>
                <label className="btn btn-outline-secondary" htmlFor="btn-check">Show All</label>
            </div>
            <div className="col-auto">
                    <input type="text" value={searchTerm} onChange={handleSearch} className="form-control" id="monsterSearch" placeholder="Monster Name"/>
            </div>
        </div>
        <div className="col flex-grow-1 position-relative">
            <div className="position-absolute h-100 w-100 overflow-y-auto overflow-x-hidden responsive-fill-block">
                {
                    displayBestiary()
                }
            </div>
        </div>

        <nav aria-label="Bestiary search" className="d-flex justify-content-center mx-2" id="bestiaryPagination">
            <ul className="pagination d-flex flex-row w-100 my-0">
                <li className="page-item align-middle flex-grow-1" id="prevPageButton">
                    <a className={`page-link text-center ${buttonsOffset === 0 ? 'disabled' : ''}`}
                       href="#" onClick={e => incrementButtons(e, -1)} aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                { getPageLinks() }
                <li className="page-item align-middle flex-grow-1" id="nextPageButton">
                    <a className={`page-link text-center ${buttonsOffset + numButtons > Math.ceil(numResults / pageLength) ? 'disabled' : ''}`}
                       href="#" onClick={e => incrementButtons(e, 1)} aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
        </div>

        {/*<div className="modal modal-lg fade" id="filterModal" tabIndex={-1} aria-labelledby="exampleModalLabel"*/}
        {/*     aria-hidden="true">*/}
        {/*    <div className="modal-dialog modal-dialog-centered">*/}
        {/*        <div className="modal-content">*/}
        {/*            <div className="modal-header">*/}
        {/*                <h5 className="modal-title" id="exampleModalLabel">Filter the Bestiary</h5>*/}
        {/*                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>*/}
        {/*            </div>*/}
        {/*            <div className="modal-body">*/}
        {/*                <h6>Filter by Type</h6>*/}
        {/*                {*/}
        {/*                    MONSTER_TYPES.map(*/}
        {/*                        t => <>*/}
        {/*                            <input type="checkbox" checked={filters.types[t]} className="btn-check" key={`type-check-${t}`}*/}
        {/*                                   onChange={() => setFilters(prev => {*/}
        {/*                                       return {*/}
        {/*                                           ...prev,*/}
        {/*                                           types: {...prev.types, [t]: !prev.types[t]}*/}
        {/*                                       }*/}
        {/*                                   })}*/}
        {/*                                   id={`type-check-${t}`} autoComplete="off"/>*/}
        {/*                            <label className="btn btn-outline-primary m-1 text-capitalize" key={`type-check-${t}-label`}*/}
        {/*                                   htmlFor={`type-check-${t}`}>*/}
        {/*                                {t}*/}
        {/*                            </label>*/}
        {/*                        </>*/}
        {/*                    )*/}
        {/*                }*/}
        {/*                <button type="button" className="btn btn-outline-secondary m-1"*/}
        {/*                        onClick={() => setFilters(prev => {return {...prev, types: filterDefaults(true).types}})}>All</button>*/}
        {/*                <button type="button" className="btn btn-outline-danger m-1"*/}
        {/*                        onClick={() => setFilters(prev => {return {...prev, types: filterDefaults(false).types}})}>None</button>*/}
        {/*                <hr className="mx-4"/>*/}
        {/*                <h6>Filter by Tag</h6>*/}
        {/*                {*/}
        {/*                    MONSTER_TAGS.map(*/}
        {/*                        tag => <>*/}
        {/*                            <input type="checkbox" checked={filters.tags[tag]} className="btn-check" key={`tag-check-${tag}`}*/}
        {/*                                   onChange={() => setFilters(prev => {*/}
        {/*                                       return {*/}
        {/*                                           ...prev,*/}
        {/*                                           tags: {...prev.tags, [tag]: !prev.tags[tag]}*/}
        {/*                                       }*/}
        {/*                                   })}*/}
        {/*                                   id={`tag-check-${tag}`} autoComplete="off"/>*/}
        {/*                            <label className="btn btn-outline-primary m-1 text-capitalize" key={`tag-check-${tag}-label`}*/}
        {/*                                   htmlFor={`tag-check-${tag}`}>*/}
        {/*                                {tag}*/}
        {/*                            </label>*/}
        {/*                        </>*/}
        {/*                    )*/}
        {/*                }*/}
        {/*                <button type="button" className="btn btn-outline-secondary m-1"*/}
        {/*                        onClick={() => setFilters(prev => {return {...prev, tags: filterDefaults(true).tags}})}>All</button>*/}
        {/*                <button type="button" className="btn btn-outline-danger m-1"*/}
        {/*                        onClick={() => setFilters(prev => {return {...prev, tags: filterDefaults(false).tags}})}>None</button>*/}
        {/*                <hr className="mx-4"/>*/}
        {/*                <h6>Filter by Environment</h6>*/}
        {/*                {*/}
        {/*                    MONSTER_ENVIRONMENTS.map(*/}
        {/*                        env => <>*/}
        {/*                            <input type="checkbox" checked={filters.envs[env]} className="btn-check" key={`env-check-${env}`}*/}
        {/*                                   onChange={() => setFilters(prev => {*/}
        {/*                                       return {*/}
        {/*                                           ...prev,*/}
        {/*                                           envs: {...prev.envs, [env]: !prev.envs[env]}*/}
        {/*                                       }*/}
        {/*                                   })}*/}
        {/*                                   id={`env-check-${env}`} autoComplete="off"/>*/}
        {/*                            <label className="btn btn-outline-primary m-1 text-capitalize" key={`env-check-${env}-label`}*/}
        {/*                                   htmlFor={`env-check-${env}`}>*/}
        {/*                                {env}*/}
        {/*                            </label>*/}
        {/*                        </>*/}
        {/*                    )*/}
        {/*                }*/}
        {/*                <button type="button" className="btn btn-outline-secondary m-1"*/}
        {/*                        onClick={() => setFilters(prev => {return {...prev, envs: filterDefaults(true).envs}})}>All</button>*/}
        {/*                <button type="button" className="btn btn-outline-danger m-1"*/}
        {/*                        onClick={() => setFilters(prev => {return {...prev, envs: filterDefaults(false).envs}})}>None</button>*/}

        {/*            </div>*/}
        {/*            <div className="modal-footer">*/}
        {/*                <button type="button" className="btn btn-outline-danger"*/}
        {/*                        onClick={() => setFilters(filterDefaults(true))}>Reset</button>*/}
        {/*                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
        </>
     : null
}

type BestiaryRowProps = {
    monster: Monster,
    in_graph:boolean
}

export function BestiaryRow({monster, in_graph}:BestiaryRowProps) {

    const setCombat = useContext(CombatContext)[1]

    const getTypeAndTag = (m:Monster) => {
        const m_type = getMonsterType(m)
        const m_tags = getMonsterTag(m)
        if (m_tags.length > 0) return m_type + " (" + m_tags.join(", ") + ")"
        else return m_type
    }
    const handleClick = () => {
        const m = monster.monster_name
        setCombat(combat => {
            let prev_amount = 0
            if (m in combat) prev_amount = combat[m]
            return {
                ...combat,
                [m]: prev_amount + 1
            }
        })
    }

    return <div className="row mt-2">
        <div className="col">
            <h6 className="text-capitalize">
                {monster.monster_name} ({monster.source})
                <small className="text-muted" style={{marginLeft: "1em"}}>
                    CR {parseCr(monster.cr)} · XP {CR_TO_XP[+monster.cr]}
                    { in_graph ? null : <span className="text-warning"> · Not in graph</span>}
                </small>
            </h6>
            <p className="text-muted text-capitalize mb-0" style={{marginTop: "-.25rem"}}>
                {
                    [
                        getTypeAndTag(monster), getMonsterAlignment(monster), getMonsterEnvironments(monster).join(", ")
                    ].filter(s => s !== "").join(" · ")
                }
            </p>
        </div>
        <div className="col-2 justify-content-end align-items-center d-flex">
            <button type="button" onClick={handleClick} className="btn btn-outline-primary monsterAddButton">
                Add
            </button>
        </div>
    </div>
}