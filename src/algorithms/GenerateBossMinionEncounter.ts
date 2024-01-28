import {Link, Node, StringTypeDict} from "../types";
import {EncounterResponse, formatEncounter, NodeFilters} from "./GenerationUtils";
import {random_from_list} from "../helpers/misc_helpers";
import {clamp_cr, clamp_xp, CR_TO_XP, CRs, xp_multiplier, XP_TO_CR} from "../helpers/xp_calculations";
import {GenerateSoloEncounter} from "./GenerateSoloEncounter";
import {GenerateRandomEncounter} from "./GenerateRandomEncounter";

export const GenerateBossMinionEncounter = (
    graph:{nodes:Node[], links:Link[]}, monsters:string[], xp_lim:number, num_monsters:number,
    locked_monsters:string[], all_nodes: StringTypeDict<Node>,
    verbose=false, part_filters: Partial<NodeFilters>
) => {

    if (verbose) console.group("Generating Boss & Minions Encounter")

    if (xp_lim === 0) xp_lim = random_from_list([
        1100, 1800, 2300, 2900, 3900, 5000, 5900, 7200, 8400, 10000, 11500, 13000,
        15000, 18000, 20000, 22000, 25000, 33000, 41000, 50000, 62000, 75000, 90000,
        105000, 120000, 135000, 155000])

    const default_config = {
        tags: [],
        types: [],
        envs: [],
        sources: [],
        crMin: 0,
        crMax: 30
    } as NodeFilters
    const filters = Object.assign(default_config, part_filters) as NodeFilters


    const response = {
        encounter: {},
        error: undefined
    } as EncounterResponse

    // we identify the boundaries that would be used for the strategy detection.
    const min_num_minions = num_monsters - 1

    // we will want somewhere between 3 and 1 of each minion, with at most 6 minions.

    const max_num_minions = Math.max(Math.min(min_num_minions * 3, 4), min_num_minions)
    const chosen_num_minions = Math.floor(Math.random() * (max_num_minions - min_num_minions) + min_num_minions)
    if (verbose) console.log("Chosen number of minions:", chosen_num_minions)

    const multiplier = xp_multiplier(chosen_num_minions + 1)
    const total_xp_from_boss_cr = (cr:number, min:boolean=false) => {
        const bp_1 = Math.max(cr - 2, cr / 2)
        const bp_2 = clamp_cr(bp_1 / 2)
        const minion_xp = CR_TO_XP[bp_2]
        const boss_xp = CR_TO_XP[cr]
        const total = (minion_xp * (min ? min_num_minions : chosen_num_minions) + boss_xp) * multiplier
        if (verbose) console.log(`Boss of CR ${cr} with ${chosen_num_minions} minions of cr ${bp_2} gives total xp ${total}`)
        return total
    }

    let target_boss_xp = Object.keys(CR_TO_XP).reduce((prev, cr) => {
        const total_xp = total_xp_from_boss_cr(Number(cr))
        if (total_xp < xp_lim) { // @ts-ignore
            return Math.max(Number(prev), CR_TO_XP[cr] as number)
        }
        else return Number(prev)
    }, 0)

    // we can use this to detect if the boss
    const min_boss_xp = Object.keys(CR_TO_XP).reduce((prev, cr) => {
        const total_xp = total_xp_from_boss_cr(Number(cr), true)
        if (total_xp < xp_lim) { // @ts-ignore
            return Math.max(Number(prev), CR_TO_XP[cr] as number)
        }
        else return Number(prev)
    }, 0)

    // the total amount of the xp we want to spend on the minions
    const minion_xp_lim = xp_lim - (target_boss_xp * multiplier)
    // adjusted for the minion combat - how much these would be worth by themselves
    const adj_minion_xp_lim = minion_xp_lim * xp_multiplier(chosen_num_minions) / multiplier

    if (verbose) {
        console.log("Target boss XP:", target_boss_xp)
        console.log("Target minion XP:", adj_minion_xp_lim)
        console.log("(total xp)", xp_lim)
    }

    const boss_cr = XP_TO_CR[target_boss_xp]
    console.log(xp_lim / 30)
    const minion_min_cr = CRs.filter(cr => CR_TO_XP[cr] > xp_lim / 30)[0]
    const minion_max_cr = clamp_cr(Math.max(boss_cr - 2, boss_cr / 2) / 2)

    if (verbose) {
        console.log("Minimum minion CR:", minion_min_cr)
        console.log("Maximum minion CR:", minion_max_cr)
        console.log(XP_TO_CR)
    }

    if (verbose) console.log("Boss CR:", boss_cr)
    let {encounter:boss_encounter, error} = GenerateSoloEncounter(graph, target_boss_xp + 1, all_nodes, true, filters)
    if (verbose) console.log("Selected boss:", boss_encounter)

    let minions_encounter = GenerateRandomEncounter(
        graph, monsters, adj_minion_xp_lim, num_monsters - 1,
        locked_monsters, undefined, true,
        {filters: {
            ...filters,
                crMin: minion_min_cr, crMax: minion_max_cr
            }},
        Object.keys(boss_encounter)
    )

    const encounter = Object.assign(boss_encounter, minions_encounter)

    response.encounter = encounter
    response.error = error

    if (verbose) console.groupEnd()

    return response
}