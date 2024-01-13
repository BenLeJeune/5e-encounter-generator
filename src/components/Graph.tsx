import React, {useContext, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {Node, Link} from "../types";
import {ForceGraph2D} from "react-force-graph";
import {toTitleCase} from "../helpers/misc_helpers";
import {CombatContext} from "../context/CombatContext";

type GraphProps = {
    graph: {
        nodes:Node[],
        links:Link[]
    }
}
export default function Graph({graph}:GraphProps) {

    const [dimensions, setDimensions] = useState({width:0, height:0})

    const combat = useContext(CombatContext)[0]

    const currentGraphData = () => {
        if (Object.keys(combat).length === 0) return graph
        else {
            let {nodes, links} = graph
            let direct_links = links.filter(link => link.source.id in combat || link.target.id in combat)
            let valid_nodes = direct_links.reduce((p, n) => [...p, n.source.id, n.target.id], [] as string[])
            nodes = nodes.filter(node => valid_nodes.indexOf(node.id) !== -1 || node.id in combat)
            links = links.filter(link => valid_nodes.indexOf(link.source.id) !== -1 && valid_nodes.indexOf(link.target.id) !== -1)
            return {nodes, links}
        }
    }

    useLayoutEffect(() => {
        window.addEventListener("resize", handle_resize)
        handle_resize()
        return () => window.removeEventListener("resize", handle_resize)
    }, [])

    const handle_resize = () => {
        const col = document.getElementById("graph-column")
        if (col) {
            const {width, height} = col.getBoundingClientRect()
            const dims = {width: width - 2, height: height - 2}
            setDimensions(dims)
        }
    }

    const fgRef = useRef()

    return <ForceGraph2D
            ref={fgRef}
            height={dimensions.height}
            width={dimensions.width}
            nodeColor={node => node.id in combat || Object.keys(combat).length === 0 ? "#0d6efd" : "#6c757d"}
            linkColor={link => link.target.id in combat && link.source.id in combat? "#0d6efd" : "#6c757d"}
            linkWidth={link => link.target.id in combat && link.source.id in combat? 3 : 1}
            nodeLabel={node => toTitleCase((node as any)['id'])}
            nodeVal={node => node.id in combat ? 1.5 : 1}
            graphData={currentGraphData()}
            onEngineStop={() => { // @ts-ignore
            }}
    />
}