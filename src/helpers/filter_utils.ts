import {Node} from "../types";

export const filter_nodes = <T extends keyof Node>(nodes: Node[], match: string[], prefix: string, and:boolean=false) => {
    return new Promise<Node[]>((res, rej) => {
        res(nodes.filter(
            node => match.length === 0 || match.map(key => node[prefix + key as T] === 1)
                .reduce((p, n) => {
                    if (and) return p && n
                    else return p || n
                })
        ) as Node[])
    })
}

export const filter_node = <T extends keyof Node>(node: Node, match: string[], prefix: string, and:boolean=false) => {
    return match.length === 0 || match.map(key => node[prefix + key as T] === 1)
        .reduce((p, n) => {
            if (and) return p && n
            else return p || n
        })
}
