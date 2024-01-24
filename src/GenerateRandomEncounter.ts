import {Node, Link, StringTypeDict, Monster_Type_Key, Monster_Tag_Key, Monster_Environment_Key} from "./types"
import {calculate_encounter_xp, CR_TO_XP, xp_multiplier} from "./helpers/xp_calculations";
import {random_from_list, weightedRandomChoice} from "./helpers/misc_helpers";
import {score as PredictCount} from "./models/CountPredictionModel";
import {share_language, share_tag, share_type, share_environment} from "./helpers/monster_helpers";
import {filter_node, filter_nodes} from "./helpers/filter_utils";

// - ========: TITLE :======== -

type GenerateEncounterConfig = {
    // Different modes of generation
    generate_mode : "random" | "xp_unset",
    filters: {
        tags:string[],
        types:string[],
        envs:string[],
        crMin:number,
        crMax:number
    }
}

export const GenerateRandomEncounter =
    (graph:{nodes:Node[], links: Link[]}, monsters:string[], xp_lim:number, num:number,
     gamma:number=0.3, verbose=false, conf:Partial<GenerateEncounterConfig>={}) =>
    {
        const default_config: GenerateEncounterConfig = {
            generate_mode: "random",
            filters: {
                tags: [],
                types: [],
                envs: [],
                crMin: 0,
                crMax: 30
            }
        }

        const config = Object.assign(default_config, conf)
        const all_nodes = graph.nodes.reduce((p, n) => {
            return {...p, [n.id]: n}
        }, {} as StringTypeDict<Node>)

        if (xp_lim === 0) {
            xp_lim = Number.POSITIVE_INFINITY
            config.generate_mode = 'xp_unset'
        }

        let min_xp = xp_lim === Number.POSITIVE_INFINITY ? 0 : xp_lim / 30
        if (config.filters.crMin !== 0) {
            min_xp = CR_TO_XP[config.filters.crMin]
        }

        if (verbose) {
            console.group("GENERATING AN ENCOUNTER")
            console.log("Config", config)
            console.log("Chosen min xp as ", min_xp)
        }

        // - ========: INFERRED LINKS :======== -
        // We want to use inferred links, from creatures
        // that share a tag, language, or type with another creature.
        let inferred_links = [] as Link[]
        const find_inferred_links = (source:Node) => {
            const links_to_ret = [] as Link[]
            // tag > language > type
            const tag_matches = graph.nodes.filter(node => share_tag(node, source, "boolean"))
            const lang_matches = graph.nodes.filter(node => share_language(node, source, "boolean")
                && tag_matches.indexOf(node) === -1)
            const type_matches = graph.nodes.filter(node => share_type(node, source, "boolean")
                    && tag_matches.indexOf(node) === -1 && lang_matches.indexOf(node) === -1) as Node[] //???? needed?
            // These will all later be augmented by adjusted_link_weight
            [...tag_matches, ...lang_matches, ...type_matches].forEach(match => {
                    links_to_ret.push({source:source, target:match, weight: 0.5} as Link)
            })
            return links_to_ret
        }

        const get_poor_quality_links = (source:Node) => {
            const links_to_ret = [] as Link[]
            console.log("Trying to find environment matches")
            const environment_matches = graph.nodes.filter(node => share_type(node, source, "boolean"))
            environment_matches.forEach(match => {
                links_to_ret.push({source:source, target:match, weight: 1} as Link)
            })

            if (links_to_ret.length === 0) {
                console.log("Still no matches, trying to match 'humanoid'")
                const humanoid_matches = graph.nodes.filter(node => node.type_humanoid === 1 && source.type_humanoid === 1)
                humanoid_matches.forEach(match => {
                    links_to_ret.push({source:source, target:match, weight: 1} as Link)
                })
            }
            return links_to_ret
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
            const max_xp = Math.min((xp_lim / xp_multiplier(num)) - ((num - 1) & min_xp), CR_TO_XP[config.filters.crMax])
            const valid_nodes = graph.nodes.filter(node => node.xp <= max_xp && node.is_npc === 0 && node.xp >= min_xp)
            const filtered_nodes = valid_nodes
                .filter(node => filter_node<Monster_Type_Key>(node, config.filters.types, 'type_'))
                .filter(node => filter_node<Monster_Tag_Key>(node, config.filters.tags, 'tag_'))
                .filter(node => filter_node<Monster_Environment_Key>(node, config.filters.envs, 'environment_'))
                .filter(node => node.cr > config.filters.crMin && node.cr < config.filters.crMax)
            if (verbose) console.log("Nodes remaining after filter:")
            const random_choice = random_from_list(filtered_nodes)
            if (verbose) console.log(`No base node; randomly chose`, random_choice)
            if (random_choice) nodes.push(random_choice)
            else {
                if (verbose) console.log('No nodes available for initial choice after filters - choosing one at random.')
                const new_random_choice = random_from_list(valid_nodes)
                nodes.push(new_random_choice)
                alert("Filters too restrictive, random monster chosen.")
            }
        }
        if (verbose) {
            console.log("Starting nodes: ", nodes)
        }

        // Update the inferred links
        nodes.forEach(node => {
            inferred_links.push(...find_inferred_links(node))
        })

        if (verbose) {
            console.log("Initial inferred links: ", inferred_links)
        }


        // Loop to add monsters
        const starting_len = nodes.length
        for (let i = 0; i < num - starting_len; i++) {
            let weights = {} as StringTypeDict<number>
            // The max monster xp we can get away with adding.
            let max_xp = (xp_lim / xp_multiplier(num)) - nodes.reduce((p, n) => n.xp + p, 0) - ((num - 1 - nodes.length) * min_xp)
            max_xp = Math.min(max_xp, CR_TO_XP[config.filters.crMax])
            if (max_xp < min_xp) min_xp = 0
            if (verbose) console.log("Max xp to add at next step:", max_xp)

            const already_chosen_ids = nodes.map(node => node.id)
            if (verbose) console.log("Already chosen so far: ", already_chosen_ids)
            // For each node, we search for neighbors
            for (let j = 0; j < nodes.length; j++) {
                const discount = gamma ** j // nodes added later considered less
                const current_node = nodes[j]
                // Node-weight pairs
                const neighbors = [...graph.links, ...inferred_links]
                    .filter(link => link.target.id === current_node.id || link.source.id === current_node.id)
                    .filter(link => link.target.is_npc === 0 && link.source.is_npc === 0)
                    .reduce((prev, link) => {
                        let weight = adjusted_link_weight(link)
                        if (link.target.id === current_node.id
                            && already_chosen_ids.indexOf(link.source.id) === -1)
                            return [...prev, [link.source, weight] as [Node, number]]
                        if (link.source.id === current_node.id
                            && already_chosen_ids.indexOf(link.target.id) === -1)
                            return [...prev, [link.target, weight] as [Node, number]]
                        return prev
                    }, [] as [Node, number][])
                // Ignore any neighbors that would push us over the xp limit
                let valid_neighbors = neighbors.filter(pair => pair[0].xp >= min_xp && pair[0].xp <= max_xp).filter(pair => {
                    const neighbor = pair[0]
                    const new_xp = calculate_encounter_xp(
                        [...nodes.map(node => [node.xp, 1] as [number, number]), [neighbor.xp, 1]]
                    )
                    return new_xp < xp_lim
                }).filter(([node]) => filter_node<Monster_Type_Key>(node, config.filters.types, 'type_'))
                    .filter(([node]) => filter_node<Monster_Tag_Key>(node, config.filters.tags, 'tag_'))
                    .filter(([node]) => filter_node<Monster_Environment_Key>(node, config.filters.envs, 'environment_'))

                if (verbose) {
                    console.log("Applied filters:", config.filters)
                    console.log("Nodes remaining after filters:", valid_neighbors)
                }

                // We add the relative weights
                const total_weight = valid_neighbors.reduce((prev, [_, weight]) => prev + weight, 0)
                valid_neighbors.forEach(([neighbor, weight]) => {
                    if (neighbor.id in weights) weights[neighbor.id] += discount * weight / total_weight
                    else weights[neighbor.id] = discount * weight / total_weight
                })
            }
            // Now we have our option weights
            if (verbose) console.log("Weights: ", weights)
            if (Object.keys(weights).length === 0) {
                console.log("No matches at all - including inferred links. We pick an unrelated node at random")
                const max_xp = (xp_lim / xp_multiplier(num)) - nodes.reduce((p, n) => n.xp + p, 0) - ((num - 1 - nodes.length) * min_xp)

                const valid_nodes = graph.nodes.filter(node => node.xp <= max_xp && node.is_npc === 0 && node.xp >= min_xp)
                const random_choice = random_from_list(valid_nodes)
                console.log("Randomly selected", random_choice)
                if (random_choice) nodes.push(random_choice)
                else console.log("Random choice failed.")
            }
            else {
                const choice_id = weightedRandomChoice(weights) as string
                const chosen_node = all_nodes[choice_id]
                if (verbose) console.log(`Pushing ${choice_id}:`, chosen_node)
                nodes.push(chosen_node)
                inferred_links.push(...find_inferred_links(chosen_node))
            }
        }

        // If we didn't set the XP, then we return the initially chosen monsters.
        const encounter = nodes.reduce((p, n) => {
            return {
                ...p, [n.id]: 1
            }
        }, {} as StringTypeDict<number>)
        if (config.generate_mode === 'xp_unset') return encounter


        // - ========: PREDICTING COMBAT COUNTS :======== -
        // We have the individual nodes; these will not be changing
        // We now want to populate the encounter up to the xp limit / down below the xp lim

        if (verbose) console.log("Chosen nodes:", nodes)

        const combat_xps = nodes.map(node => node.xp)
        const combat_total_xp = combat_xps.reduce((p, n) => p + n, 0)
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

        // The predicted count over the combat size. Used as weights for adding/removing.
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

        if (verbose) console.groupEnd()

        return encounter
}

const adjusted_link_weight = (link:{target:Node, source:Node, weight:number}) => {
    let {target, source, weight} = link
    const tags_shared = share_tag(target, source, "count") as number
    const langs_shared = share_language(target, source, "count") as number
    const types_shared = share_type(target, source, "count") as number
    const envs_shared = share_environment(target, source, "count") as number

    if (tags_shared > 0) weight *= 2 * (tags_shared + 1)
    if (langs_shared > 0) weight *= 2 + (0.6*langs_shared)
    if (types_shared > 0) weight *= 2.4
    if (envs_shared > 0) weight *= 1 + (0.2*envs_shared)

    return weight
}