import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import * as d3 from "d3";
import {Node, Link} from "../types";
import {ForceGraph2D} from "react-force-graph";
import {toTitleCase} from "../helpers/misc_helpers";

type GraphProps = {
    graph: {
        nodes:Node[],
        links:Link[]
    }
}
export default function Graph({graph}:GraphProps) {

    const [dimensions, setDimensions] = useState({width:0, height:0})

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
            console.log(dims)
        }
    }

    return <ForceGraph2D
            height={dimensions.height}
            width={dimensions.width}
            nodeColor={() => "#0d6efd"} linkColor={() => "#6c757d"}
            nodeLabel={node => toTitleCase((node as any)['id'])}
            graphData={graph}
    />
}