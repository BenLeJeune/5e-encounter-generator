import {Node, Link, Monster, MonsterData} from "./types";
import {weightedRandomChoice} from "./helpers/misc_helpers";
import {monsterLookup} from "./helpers/monster_parsers";
import {calculateEncounterXP, CR_TO_XP} from "./helpers/xp_calculations";
import {score as PredictCount} from "./models/CountPredictionModel"

export const GenerateRandomEncounter =
    (graph: {nodes: Node[], links: Link[]}, bestiary: Monster[], monsterStats:MonsterData[], monsters: string[], xp_lim:number, num:number, gamma:number=0.3) =>
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
        chosen_monsters.map((monster, i) => {
            if (typeof monster === 'string') {
                // If for some reason we fail to read the monster, we let there be 1.
                monster_counts[monster] = 1
                monster_xps[monster] = 0
                console.log(`FAILED TO READ MONSTER: ${monster}`)
            }
            if (chosen_monster_stats[i] === null) {
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
            if (chosen_monster_stats.length > i) {
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

        const current_xp = calculateEncounterXP(monster_counts, monster_xps)
        console.log(`Current XP: ${current_xp}`)



        return monster_counts
}