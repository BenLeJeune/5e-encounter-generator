import {Node, Link, Monster, MonsterData} from "./types";
import {weightedRandomChoice} from "./helpers/misc_helpers";
import {getMonsterEnvironments, getMonsterTag, getMonsterType, monsterLookup} from "./helpers/monster_parsers";
import {calculateEncounterXP, CR_TO_XP} from "./helpers/xp_calculations";
import {score as PredictCount} from "./models/CountPredictionModel"
import {Simulate} from "react-dom/test-utils";
import copy = Simulate.copy;

export const GenerateRandomEncounter =
    (graph: {nodes: Node[], links: Link[]}, bestiary: Monster[], monsterStats:MonsterData[], monsters: string[], xp_lim:number, num:number, gamma:number=0.3, verbose=false) =>
    {

        // - ========: CHOOSING THE MONSTERS :======== -
        // This is the part where we select monsters
        if (xp_lim === 0) xp_lim = Number.POSITIVE_INFINITY
        const nodes = monsters

        // We store the XPs of the monsters to track how much XP is in the combat already
        // - we don't want to add a monster with XP greater than the total limit
        // todo: considerations for when there are no valid monsters (or xp lim of 0?)
        const node_xp_lookups = nodes.reduce((p, n) => {
            const mon_dat = monsterLookup(n, bestiary)
            return {
                ...p,
                [n]: mon_dat ? CR_TO_XP[+mon_dat.cr] : 0
            }
        }, {} as {[key:string]:number})
        if (nodes.length === 0) {
            const all_nodes_weighted = graph.nodes
                .filter(node => {
                    const mon = monsterLookup(node.id, bestiary)
                    return mon !== null && CR_TO_XP[+(mon as Monster).cr] <= xp_lim
                })
                .reduce((prev, node) => {
                return {
                    ...prev, [node.id]: 1
                }
            }, {})
            nodes.push(weightedRandomChoice(all_nodes_weighted) as string)
        }
        if (verbose) console.log(nodes)
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
                    /// neighbors is of the form [node, weight]
                    if (link.source.id === current_node) return [...prev,
                        [link.target.id, link.weight] as [string, number]]
                    else if (link.target.id === current_node) return [...prev,
                        [link.source.id, link.weight] as [string, number]]
                    else return prev
                }, [] as [string, number][]).filter(neighbor => nodes.indexOf(neighbor[0]) === -1)

                // we do not consider any neighbors that would push us over the XP limitation
                if (verbose) {
                    console.log("Neighbors before filtering: ")
                    console.log(neighbors)
                }
                neighbors.filter(neighbor => {
                    const neighbor_data = monsterLookup(neighbor[0], bestiary)
                    if (neighbor_data !== null) {
                        const new_xp = calculateEncounterXP(
                            {
                                ...nodes.reduce((p, n) => {
                                    return {...p, [n]: 1}
                                }, {} as { [key: string]: number }),
                                [neighbor[0]]: 1
                            },
                            {
                                ...node_xp_lookups,
                                [neighbor[0]]: CR_TO_XP[+neighbor_data.cr]
                            }
                        )
                        if (verbose) console.log(`Adding ${neighbor[0]} brings XP total to ${new_xp}`)
                        return new_xp < xp_lim
                    }
                    // This means we won't generate any creatures not
                    // in the bestiary... which makes sense.
                    if (verbose) console.log(neighbor_data)
                    return false
                })
                    .forEach(neighbor => {
                    // We total the weights - setting all weights to 1 for now
                    const [neighborId, weight] = neighbor
                    if (neighborId in weights) weights[neighborId] += weight * discount
                    else weights[neighborId] = weight * discount
                })
            }
            // We now have our options and their weights
            if (verbose) console.log(weights)
            if (Object.keys(weights).length === 0) {
                break;
            }
            else {
                const choice = weightedRandomChoice(weights) as string
                if (verbose) console.log(`Pushing ${choice}`)
                nodes.push(choice)
                const node_lookup = monsterLookup(choice, bestiary)
                node_xp_lookups[choice] = node_lookup ? CR_TO_XP[+node_lookup.cr] : 0
            }
        }

        // - ========: PREDICTING COMBAT COUNTS :======== -
        // We have the individual nodes; we now predict the no. of each node
        // we have the nodes in the form of an array of monster names

        const chosen_monsters = nodes.map(name => monsterLookup(name, bestiary) || name)
        // xp, avg_frac, avg_count are within chosen_monster_stats; is_min_xp can be calculated
        const chosen_monster_stats = nodes.map(name => monsterLookup(name, monsterStats))

        // we must calculate the following properties: total, min, max, and avg combat_..._xp
        const combat_total_xp = xp_lim
        const combat_min_xp = chosen_monsters.filter(m => typeof m !== 'string')
            .reduce((prev, next) => Math.min(prev, CR_TO_XP[+(next as Monster).cr]), 0)
        const combat_max_xp = chosen_monsters.filter(m => typeof m !== 'string')
            .reduce((prev, next) => Math.min(prev, CR_TO_XP[+(next as Monster).cr]), 0)
        const combat_avg_xp = chosen_monsters.filter(m => typeof m !== 'string')
            .reduce((p, n) => p + CR_TO_XP[+(n as Monster).cr], 0) / chosen_monsters.length

        // we are now ready to compute
        const monster_counts = {} as {[key:string]:number}
        const monster_xps = {} as {[key:string]:number}
        // BELOW: populates the monster_counts and monster_xps objects
        chosen_monsters.map((monster, i) => {
            if (typeof monster === 'string') {
                // If for some reason we fail to read the monster, we let there be 1.
                monster_counts[monster] = 1
                monster_xps[monster] = 0
                console.log(`FAILED TO READ MONSTER: ${monster}`)
            }
            else if  (chosen_monster_stats[i] === null) {
                // If the monster doesn't have any stats recorded for them
                // (i.e not a node in the graph - only if the player adds them)
                const xp = CR_TO_XP[+(monster as Monster).cr]
                const is_min_xp = xp === combat_min_xp ? 1 : 0
                const avg_frac = 0.5
                const avg_count = 1

                const num_predicted = PredictCount(
                    xp, combat_total_xp, combat_min_xp, combat_max_xp, combat_avg_xp, is_min_xp,
                    avg_frac, avg_count
                )

                monster_counts[(monster as Monster).monster_name] = Math.max(Math.round(num_predicted), 1)
                monster_xps[(monster as Monster).monster_name] = xp
            }
            else if (chosen_monster_stats.length > i) {
                // The 'normal' case - node in graph is chosen
                const mon_stats = (chosen_monster_stats[i] as MonsterData)
                const xp = +mon_stats.xp
                const is_min_xp = xp === combat_min_xp ? 1 : 0
                const avg_frac = mon_stats.fraction
                const avg_count = mon_stats.count

                const num_predicted = PredictCount(
                    xp, combat_total_xp, combat_min_xp, combat_max_xp, combat_avg_xp, is_min_xp,
                    avg_frac, avg_count
                )
                monster_counts[(monster as Monster).monster_name] = Math.max(Math.round(num_predicted), 1)
                monster_xps[(monster as Monster).monster_name] = xp
            }
        })

        // - ========: REMOVING MONSTERS :======== -
        // If we have exceeded the XP limit by too much, then we want to
        // remove monsters until we are back within the limit again

        let current_xp = calculateEncounterXP(monster_counts, monster_xps)
        if (verbose) console.log(`Current XP: ${current_xp}`)

        const combat_size = Object.keys(monster_counts).length
        const monster_predicted_fracs = Object.keys(monster_counts).reduce((p, n) => {
            return {
                ...p, [n]: monster_counts[n] / combat_size
            }
        }, {}) as {[key:string]:number}

        if (current_xp > xp_lim + combat_min_xp) {
            // While there are creatures to remove, and we still want to remove them
            let mons_to_remove = Object.keys(monster_counts).filter(m => monster_counts[m] > 1)
            let weights_to_remove = mons_to_remove.reduce((prev, mon) => {
                if (mons_to_remove.indexOf(mon) !== -1) return {...prev, [mon]: monster_predicted_fracs[mon]}
                else return prev
            }, {})
            if (verbose) {
                console.log("Removing monsters")
                console.log(mons_to_remove)
                console.log(weights_to_remove)
            }
            while (current_xp > xp_lim + combat_min_xp && mons_to_remove.length > 0) {
                const selection = weightedRandomChoice(weights_to_remove) as string
                monster_counts[selection] -= 1
                current_xp = calculateEncounterXP(monster_counts, monster_xps)
                if (verbose) console.log(`Removed a ${selection}, xp is now ${current_xp}`)
                /// Refreshing which monsters we want to include
                mons_to_remove = Object.keys(monster_counts).filter(m => monster_counts[m] > 1)
                weights_to_remove = mons_to_remove.reduce((prev, mon) => {
                    if (mons_to_remove.indexOf(mon) !== -1) return {...prev, [mon]: monster_predicted_fracs[mon]}
                    else return prev
                }, {})
            }

        }

        // - ========: (RE-) ADDING MONSTERS :======== -
        // If we were below the XP limit (or have now fallen too far below it), then
        // we will try to re-add monsters, not exceeding the limit by too much

        if (xp_lim !== Number.POSITIVE_INFINITY && current_xp <= xp_lim - combat_min_xp) {
            // we keep track of which monsters are 'full', i.e cannot be added further
            const mons_full = [] as string[]
            let mons_to_add = Object.keys(monster_counts).filter(m => mons_full.indexOf(m) === -1)
            let weights_to_add = mons_to_add.reduce((prev, mon) => {
                if (mons_to_add.indexOf(mon) !== -1) return {...prev, [mon]: monster_predicted_fracs[mon]}
                else return prev
            }, {})
            // we repeat as long as there are still monsters that we can add
            while (mons_to_add.length > 0) {
                // we make a test encounter, and see what the XP total of this is
                const selection = weightedRandomChoice(weights_to_add) as string
                const test_encounter = {...monster_counts}
                test_encounter[selection] += 1
                const next_xp = calculateEncounterXP(test_encounter, monster_xps)
                if (next_xp <= xp_lim) {
                    current_xp = next_xp
                    if (verbose) console.log(`Added ${selection}, XP: ${current_xp}`)
                    monster_counts[selection] += 1
                }
                else {
                    mons_full.push(selection)
                    if (verbose) console.log(`Tried adding ${selection} but brought XP to ${current_xp}`)
                }
                mons_to_add = Object.keys(monster_counts).filter(m => mons_full.indexOf(m) === -1)
                weights_to_add = mons_to_add.reduce((prev, mon) => {
                    if (mons_to_add.indexOf(mon) !== -1) return {...prev, [mon]: monster_predicted_fracs[mon]}
                    else return prev
                }, {})
            }

        }


        return monster_counts
}