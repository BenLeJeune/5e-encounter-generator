import {Node, Link, Monster, MonsterData} from "./types"
import {calculate_encounter_xp, calculateEncounterXP} from "./helpers/xp_calculations";
import {weightedRandomChoice} from "./helpers/misc_helpers";

// - ========: TITLE :======== -

type GenerateEncounterConfig = Partial<{
    // Different modes of generation
    generate_mode : "random" | "xp_unset"
}>
const default_config: GenerateEncounterConfig = {
    generate_mode: "random"
}

type StringTypeDict<T> = {[key:string]:T}

export const GenerateRandomEncounterR =
    (graph:{nodes:Node[], links: Link[]}, monsters:string[], xp_lim:number, num:number,
     gamma:number=0.3, verbose=false, conf:GenerateEncounterConfig={}) =>
    {
        const config = Object.assign(default_config, conf)
        const all_nodes = graph.nodes.reduce((p, n) => {
            return {...p, [n.id]: n}
        }, {} as StringTypeDict<Node>)
        if (xp_lim === 0) {
            xp_lim = Number.POSITIVE_INFINITY
            config.generate_mode = 'xp_unset'
        }

        // - ========: CHOOSING THE MONSTERS :======== -
        // This is the part where we select the monsters

        // The supplied monsters
        const nodes = graph.nodes.filter(node => monsters.indexOf(node.id) !== -1)
        if (nodes.length !== monsters.length) {
            console.log("Nodes length & monster length mismatch!")
            if (verbose) console.log(nodes, monsters)
        }

        // if there aren't any nodes supplied, we pick a source node at random
        if (nodes.length === 0) {
            const valid_nodes = graph.nodes.filter(node => node.xp <= xp_lim)
            const random_choice = valid_nodes[Math.floor(Math.random() * valid_nodes.length)]
            if (verbose) console.log(`No base node; randomly chose ${random_choice}`)
            nodes.push(random_choice)
        }
        if (verbose) {
            console.log("Starting nodes: ", nodes)
            console.log(monsters, nodes.length, monsters.length)
        }

        // Loop to add monsters
        const starting_len = nodes.length
        for (let i = 0; i < num - starting_len; i++) {
            let weights = {} as StringTypeDict<number>
            // For each node, we search for neighbors
            for (let j = 0; j < nodes.length; j++) {
                const discount = gamma ** j // nodes added later considered less
                const current_node = nodes[j]
                const already_chosen_ids = nodes.map(node => node.id)
                if (verbose) console.log("Already chosen: ", already_chosen_ids)
                // Node-weight pairs
                const neighbors = graph.links
                    .filter(link => link.target.id === current_node.id || link.source.id === current_node.id)
                    .reduce((prev, link) => {
                        if (link.target.id === current_node.id
                            && already_chosen_ids.indexOf(link.source.id) === -1)
                            return [...prev, [link.source, link.weight] as [Node, number]]
                        if (link.source.id === current_node.id
                            && already_chosen_ids.indexOf(link.target.id) === -1)
                            return [...prev, [link.target, link.weight] as [Node, number]]
                        return prev
                    }, [] as [Node, number][])
                // Ignore any neighbors that would push us over the xp limit
                const valid_neighbors = neighbors.filter(pair => {
                    const neighbor = pair[0]
                    const new_xp = calculate_encounter_xp(
                        [...nodes.map(node => [node.xp, 1] as [number, number]), [neighbor.xp, 1]]
                    )
                    return new_xp < xp_lim
                })
                // We add the relative weights
                const total_weight = valid_neighbors.reduce((prev, [node, weight]) => prev + weight, 0)
                valid_neighbors.forEach(([neighbor, weight]) => {
                    if (neighbor.id in weights) weights[neighbor.id] += discount * weight / total_weight
                    else weights[neighbor.id] = discount * weight / total_weight
                })
            }
            // Now we have our option weights
            if (verbose) console.log(weights)
            if (Object.keys(weights).length === 0) break;
            else {
                const choice_id = weightedRandomChoice(weights) as string
                if (verbose) console.log(`Pushing ${choice_id}`)
                nodes.push(all_nodes[choice_id])
            }
        }

        // Converts node to an encounter object
        const encounter = nodes.reduce((p, n) => {
            return {...p, [n.id]: 1}}, {})
        return encounter
}