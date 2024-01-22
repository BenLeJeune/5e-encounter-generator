import {Node} from "../types";

export const filter_nodes = <T extends keyof Node>(nodes: Node[], match: string[], prefix: string, or:boolean=false) => {
    console.log(match.length)
    return new Promise<Node[]>((res, rej) => {
        res(nodes.filter(
            node => match.length === 0 || match.map(key => node[prefix + key as T] === 1)
                .reduce((p, n) => {
                    if (or) return p || n
                    else return p && n
                })
        ) as Node[])
    })
}