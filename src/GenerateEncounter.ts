import {Node, Link, Monster} from "./types";
import {weightedRandomChoice} from "./helpers/misc_helpers";

export const GenerateRandomEncounter =
    (graph: {nodes: Node[], links: Link[]}, bestiary: Monster[], monsters: string[], num:number, gamma:number=0.3) =>
    {
        const nodes = monsters
        if (nodes.length === 0) {
            const all_nodes_weighted = graph.nodes.reduce((prev, node) => {
                return {
                    ...prev, [node.id]: 1
                }
            }, {})
            nodes.push(weightedRandomChoice(all_nodes_weighted) as string)
        }
        console.log(nodes)
        const starting_len = nodes.length
        // For each monster we want to add
        for (let i = 0; i < num - starting_len; i++) {
            let weights = {} as {[key:string]:number}
            // For each of our current nodes, we add the weights of nodes adjacent to that node
            for (let j = 0; j < nodes.length; j++) {
                const discount = gamma ** j
                const current_node = nodes[j]
                // we iterate over every neighbor
                const neighbors = graph.links.reduce((prev, link) => {
                    if (link.source.id === current_node) return [...prev,
                        [link.target.id, link.weight] as [string, number]]
                    else if (link.target.id === current_node) return [...prev,
                        [link.source.id, link.weight] as [string, number]]
                    else return prev
                }, [] as [string, number][]).filter(neighbor => nodes.indexOf(neighbor[0]) === -1)

                neighbors.forEach(neighbor => {
                    // We total the weights - setting all weights to 1 for now
                    const [neighborId, weight] = neighbor
                    if (neighborId in weights) weights[neighborId] += weight * discount
                    else weights[neighborId] = weight * discount
                })
            }
            // We now have our options and their weights
            const choice = weightedRandomChoice(weights) as string
            console.log(`Pushing ${choice}`)
            nodes.push(choice)
        }

        return nodes
}