import {Node, Link, Monster, MonsterData} from "./types"
import {calculate_encounter_xp, calculateEncounterXP} from "./helpers/xp_calculations";
import {weightedRandomChoice} from "./helpers/misc_helpers";
import {score as PredictCount} from "./models/CountPredictionModel";

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
        const nodes = monsters.map(monster_name => all_nodes[monster_name])
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
            const already_chosen_ids = nodes.map(node => node.id)
            if (verbose) console.log("Already chosen so far: ", already_chosen_ids)
            // For each node, we search for neighbors
            for (let j = 0; j < nodes.length; j++) {
                const discount = gamma ** j // nodes added later considered less
                const current_node = nodes[j]
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

        // - ========: PREDICTING COMBAT COUNTS :======== -
        // We have the individual nodes; these will not be changing
        // We now want to populate the encounter up to the xp limit / down below the xp lim

        if (verbose) console.log("Chosen nodes:", nodes)

        const encounter = nodes.reduce((p, n) => {
            return {
                ...p, [n.id]: 1
            }
        }, {} as StringTypeDict<number>)
        const combat_xps = nodes.map(node => node.xp)
        const combat_total_xp = combat_xps.reduce((p, n) => p + 1, 0)
        const combat_min_xp = combat_xps.reduce((p, n) => Math.min(p, n), 0)
        const combat_max_xp = combat_xps.reduce((p, n) => Math.max(p, n), 0)
        const combat_avg_xp =  combat_total_xp / combat_xps.length

        // We predict the counts using the tree algorithm
        nodes.forEach(node => {
            const num_predicted = PredictCount(
                node.xp, combat_total_xp, combat_min_xp, combat_max_xp, combat_avg_xp,
                node.xp === combat_min_xp ? 1 : 0, node.fraction, node.count
            )
            encounter[node.id] = Math.max(Math.round(num_predicted), 1)
        })

        const predicted_fracs = Object.keys(encounter).reduce((prev, key) => {
            return {...prev, [key]: encounter[key] / nodes.length}
        }, {} as StringTypeDict<number>)

        if (verbose) console.log("Initial predicted counts:", encounter)


        // - ========: REMOVING MONSTERS :======== -
        // If we have exceeded the XP limit, we want to remove monsters until
        // we fall below the limit

        const calc_current_xp = (encounter_to_use=encounter) => {
            // We will use this to refresh the current xp
            const xp_count_pairs = Object.keys(encounter_to_use).reduce((p, n) => {
                return [...p, [all_nodes[n].xp, encounter_to_use[n]] as [number, number]]
            }, [] as [number, number][])
            return calculate_encounter_xp(xp_count_pairs)
        }
        let current_xp = calc_current_xp()
        if (verbose) console.log("Current XP:", current_xp)

        if (current_xp > xp_lim + combat_min_xp) {
            let mons_to_remove = Object.keys(encounter).filter(mon => encounter[mon] > 1)
            let weights_to_remove = mons_to_remove.reduce((prev, monster) => {
                return {...prev, [monster]: predicted_fracs[monster]}
            }, {} as StringTypeDict<number>)
            if (verbose) console.log("Removing monsters")

            // While there are monsters to remove, and we still want to remove them:
            while (current_xp > xp_lim + combat_min_xp && mons_to_remove.length > 0) {
                const mon_to_remove = weightedRandomChoice(weights_to_remove) as string
                encounter[mon_to_remove] -= 1
                current_xp = calc_current_xp()
                if (verbose) console.log(`Removed ${mon_to_remove}, xp now ${current_xp}`)

                mons_to_remove = Object.keys(encounter).filter(mon => encounter[mon] > 1)
                weights_to_remove = mons_to_remove.reduce((prev, monster) => {
                    return {...prev, [monster]: predicted_fracs[monster]}
                }, {} as StringTypeDict<number>)
            }
        }

        // - ========: (RE-) ADDING MONSTERS :======== -
        // If we are now below the XP limit, then we will try to re-add monsters, not exceeding the limit

        if (xp_lim !== Number.POSITIVE_INFINITY && current_xp <= xp_lim - combat_min_xp) {
            const mons_full = [] as string[]
            let mons_to_add = Object.keys(encounter).filter(m => mons_full.indexOf(m) === -1)
            let weights_to_add = mons_to_add.reduce((prev, mon) => {
                if (mons_to_add.indexOf(mon) !== -1) return {...prev, [mon]: predicted_fracs[mon]}
                else return prev
            }, {} as StringTypeDict<number>)

            // While there are still monsters that can 'fit', we add them
            while (mons_to_add.length > 0) {
                const mon_to_add = weightedRandomChoice(weights_to_add) as string
                const test_encounter = {...encounter, [mon_to_add]: encounter[mon_to_add] + 1}
                const next_xp = calc_current_xp(test_encounter)
                if (next_xp < xp_lim) {
                    current_xp = next_xp
                    encounter[mon_to_add] += 1
                    if (verbose) console.log(`Added ${mon_to_add}, XP is now ${current_xp}`, encounter)
                }
                else {
                    mons_full.push(mon_to_add)
                    if (verbose) console.log(`Tried to add ${mon_to_add} but XP became ${next_xp}`)
                }
                mons_to_add = Object.keys(encounter).filter(m => mons_full.indexOf(m) === -1)
                weights_to_add = mons_to_add.reduce((prev, mon) => {
                    if (mons_to_add.indexOf(mon) !== -1) return {...prev, [mon]: predicted_fracs[mon]}
                    else return prev
                }, {} as StringTypeDict<number>)
            }

        }

        return encounter
}