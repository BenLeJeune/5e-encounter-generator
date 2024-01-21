import React, {ReactElement, useContext, useEffect, useLayoutEffect, useState} from 'react';
import Papa from "papaparse";
import {Link, Monster, MONSTER_ENVIRONMENTS, MONSTER_TAGS, MONSTER_TYPES, Node} from "../types";
import {CR_TO_XP, parseCr} from "../helpers/xp_calculations";
import {getMonsterAlignment, getMonsterEnvironments, getMonsterTag, getMonsterType} from "../helpers/monster_parsers";
import {PlusCircle} from "iconoir-react";
import {capitalise, varUrl} from "../helpers/misc_helpers";
import {count} from "d3";
import {CombatContext} from "../context/CombatContext";
import FilterModal from "./FilterModal";

type Bestiary_Props = {
    bestiary: Node[],
    graphNodes:string[]
}

const filterDefaults = {
    types: [] as string[],
    tags: [] as string[],
    envs: [] as string[]
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
            const filtered = bestiary.filter(m => m.id.indexOf(s) !== -1)
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
            const filtered = bestiary.filter(m => m.id.indexOf(searchTerm.toLowerCase()) !== -1)
                .sort((a, b) => a.id < b.id ? -1 : 1)
                .slice(start, end)
            if (filtered.length > 0) {
                return filtered.map(monster =>
                    <>
                        <BestiaryRow monster={monster} in_graph={graphNodes.indexOf(monster.id) !== -1}/>
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
    const [filters, setFilters] = useState(filterDefaults)

    return bestiary ? <>
        <FilterModal/>
            <div className="container mb-1 d-flex flex-column" style={{minHeight: "300px"}}>
        <div className="row">
            <div className="col">
                <h4>Bestiary</h4>
                <hr/>
            </div>
            <div className="col-auto">
                <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal"
                        data-bs-target="#filterModal">
                    Filters
                </button>
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
        </>
     : null
}

type BestiaryRowProps = {
    monster: Node,
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
        const m = monster.id
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
                {monster.id} ({monster.source})
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