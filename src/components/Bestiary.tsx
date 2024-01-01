import React, {ReactElement, useEffect, useLayoutEffect, useState} from 'react';
import Papa from "papaparse";
import {Monster} from "../types";
import {CR_TO_XP, parseCr} from "../helpers/xp_calculations";
import {getMonsterAlignment, getMonsterEnvironments, getMonsterTag, getMonsterType} from "../helpers/monster_parsers";
import {PlusCircle} from "iconoir-react";
import {varUrl} from "../helpers/misc_helpers";
import {count} from "d3";

type Bestiary_Props = {}

export default function Bestiary(props: Bestiary_Props) {

    const [bestiary, setBestiary] = useState<Monster[]>()

    const [searchTerm, setSearchTerm] = useState<string>('')

    const [numButtons, setNumButtons] = useState<number>(1)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [numResults, setNumResults] = useState<number>(1)
    const [pageLength, setPageLength] = useState<number>(25)
    const [buttonsOffset, setButtonsOffset] = useState<number>(0)
    const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const s = e.target.value
        if (bestiary) {
            const filtered = bestiary.filter(m => m.monster_name.indexOf(s.toLowerCase()) !== -1)
            setNumResults(filtered.length)
        }
        setSearchTerm(s)
    }

    useEffect(() => {
        const fetchBestiary = async () => {
            const bestiary = await fetch(varUrl('data/bestiary.csv'))
            return bestiary.text();
        }

        fetchBestiary().then(bestiary => {
            console.log("BESTIARY")
            const bestiary_obj = Papa.parse(bestiary, {header:true}).data.slice(1)
            console.log(bestiary_obj)
            const sortedBestiary = (bestiary_obj as Monster[]).slice(0, -1).sort((a, b) => a.monster_name < b.monster_name ? -1 : 1)
            setBestiary(sortedBestiary)
            setNumResults(sortedBestiary.length)
        })
    }, [])

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
            console.log(maxX)
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
                .slice(start, end)
            if (filtered.length > 0) {
                return filtered.map(monster =>
                    <>
                        <BestiaryRow monster={monster}/> <hr className="mx-3"/>
                    </>
                )
            }
            else return <p className="text-center text-muted mt-3">No results :(</p>
        }
        else return <p>Loading</p>
    }

    return bestiary ? <div className="container mb-1 d-flex flex-column">
        <div className="row">
            <div className="col">
                <h4>Bestiary</h4>
                <hr/>
            </div>
            <div className="col">
                <button className="btn btn-outline-secondary">Filters</button>
            </div>
            <div className="col">
                    <input type="text" value={searchTerm} onChange={handleSearch} className="form-control" id="monsterSearch" placeholder="Monster Name"/>
            </div>
        </div>
        <div className="col flex-grow-1 position-relative">
            <div className="position-absolute h-100 w-100 overflow-y-auto overflow-x-hidden">
                {
                    displayBestiary()
                }
            </div>
        </div>

        <nav aria-label="Bestiary search" className="d-flex justify-content-center mx-2" id="bestiaryPagination">
            <ul className="pagination d-flex flex-row w-100">
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
     : null
}

type BestiaryRowProps = {
    monster: Monster
}

function BestiaryRow({monster}:BestiaryRowProps) {
    return <div className="row mt-2">
        <div className="col">
            <h6 className="text-capitalize">
                {monster.monster_name} ({monster.source})
                <small className="text-muted" style={{marginLeft: "1em"}}>
                    CR {parseCr(monster.cr)} · XP {CR_TO_XP[+monster.cr]}
                </small>
            </h6>
            <p className="text-muted text-capitalize mb-0" style={{marginTop: "-.25rem"}}>
                {
                    [
                        getMonsterType(monster), getMonsterTag(monster), getMonsterAlignment(monster), getMonsterEnvironments(monster).join(", ")
                    ].filter(s => s !== "").join(" · ")
                }
            </p>
        </div>
        <div className="col-2 justify-content-end align-items-center d-flex">
            <button type="button" className="btn btn-primary">
                Add
            </button>
        </div>
    </div>
}