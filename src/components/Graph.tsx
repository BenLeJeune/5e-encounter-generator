import React, {useContext, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {Node, Link} from "../types";
import {ForceGraph2D} from "react-force-graph";
import {toTitleCase} from "../helpers/misc_helpers";
import {CombatContext} from "../context/CombatContext";
import {share_environment, share_language, share_tag, share_type} from "../helpers/monster_helpers";
import * as d3 from 'd3';

type GraphProps = {
    graph: {
        nodes:Node[],
        links:Link[]
    },
    all_nodes: {
        [monster_name:string]:Node
    }
}
export default function Graph({graph, all_nodes}:GraphProps) {

    const [dimensions, setDimensions] = useState({width:0, height:0})

    const combat = useContext(CombatContext)[0]

    const currentGraphData = () => {
        if (Object.keys(combat).length === 0) return graph
        else {
            let {nodes, links} = graph
            let direct_links = links.filter(link => link.source.id in combat || link.target.id in combat)
            // valid_nodes are nodes with a direct connection to a combat node - isolated combat nodes not included
            let valid_nodes = direct_links.reduce((p, n) => [...p, n.source.id, n.target.id], [] as string[])
            nodes = nodes.filter(node => valid_nodes.indexOf(node.id) !== -1 || node.id in combat)
            links = links.filter(link => valid_nodes.indexOf(link.source.id) !== -1 && valid_nodes.indexOf(link.target.id) !== -1)

            // We look for any isolated nodes (e.g. if the first node selected/randomly chosen has no neighbors)
            // We add links with the tag "predicted" for any shared tags
            let isolated = Object.keys(combat).filter(monster_name => valid_nodes.indexOf(monster_name) === -1)
            isolated.forEach(monster_1 => {
                [...Object.keys(combat)].filter(mon => mon !== monster_1)
                    .forEach(monster_2 => {
                        const [mon_1, mon_2] = [all_nodes[monster_1], all_nodes[monster_2]]
                        if (share_tag(mon_1, mon_2, "boolean")) {
                            links.push({source: mon_1, target: mon_2, weight: 0, type: "predicted"})
                        }
                        if (share_language(mon_1, mon_2, "boolean")) {
                            links.push({source: mon_1, target: mon_2, weight: 0, type: "predicted"})
                        }
                        if (share_type(mon_1, mon_2, "boolean")) {
                            links.push({source: mon_1, target: mon_2, weight: 0, type: "predicted"})
                        }
                    })
            })


            return {nodes, links}
        }
    }

    useLayoutEffect(() => {
        window.addEventListener("resize", handle_resize)
        handle_resize()

        const fg = fgRef.current as any

        fg.d3Force('center', null)
        fg.d3Force('charge', d3.forceManyBody().strength(-50))
        fg.d3Force('x', d3.forceX())
        fg.d3Force('y', d3.forceY())

        return () => window.removeEventListener("resize", handle_resize)
    }, [])

    const handle_resize = () => {
        const col = document.getElementById("graph-column")
        if (col) {
            const {width, height} = col.getBoundingClientRect()
            const dims = {width: width - 12, height: height - 12}
            setDimensions(dims)
        }
    }

    useEffect(() => {
        // Whenever we change the nodes in the graph, we want to focus on them.
        if (fgRef.current) {
            setTimeout(() =>(fgRef.current as any).zoomToFit(400), 500)
        }
    }, [combat])

    const fgRef = useRef()

    return <ForceGraph2D
            ref={fgRef}
            height={dimensions.height}
            width={dimensions.width}
            nodeColor={node => node.id in combat || Object.keys(combat).length === 0 ? "#0d6efd" : "#6c757d"}
            linkColor={link => link.target.id in combat && link.source.id in combat? "#0d6efd" : "#6c757d"}
            linkWidth={link => link.target.id in combat && link.source.id in combat? 3 : 1}
            linkLineDash={link => "type" in link ? [5, 5] : []}
            nodeLabel={node => toTitleCase((node as any)['id']) + ` (CR ${node.cr})`}
            nodeVal={node => node.id in combat ? 1.5 : 1}
            graphData={currentGraphData()}
    />
}