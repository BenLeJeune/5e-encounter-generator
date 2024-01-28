import {Link, Monster_Environment_Key, Monster_Tag_Key, Monster_Type_Key, Node, StringTypeDict} from "../types";
import {clamp_cr, CR_TO_XP, CRs} from "../helpers/xp_calculations";
import {random_from_list} from "../helpers/misc_helpers";
import {Filters} from "../context/FiltersContext";
import {GenerateEncounterConfig} from "./GenerateRandomEncounter";
import {filter_node} from "../helpers/filter_utils";
import {apply_filters, EncounterResponse, NodeFilters} from "./GenerationUtils";
import {CombatEntry} from "../context/CombatContext";

export const GenerateSoloEncounter = (
    graph:{nodes:Node[], links:Link[]}, xp_lim:number,
    all_nodes: StringTypeDict<Node>, verbose=false,
    part_filters: Partial<NodeFilters>
) => {

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

    // we want to generate a solo encounter
    // we randomly select a single creature of the appropriate xp
    let target_xp = Object.values(CR_TO_XP)
        .reduce((prev, xp) => xp < xp_lim ? Math.max(prev, xp) : prev)


    // Account for filters
    if (CR_TO_XP[filters.crMax] < target_xp) target_xp = CR_TO_XP[filters.crMax]

    const valid_nodes = Object.values(all_nodes).filter(node => node.xp === target_xp)
        .filter(node => node.is_npc === 0)

    const filtered_nodes = apply_filters(valid_nodes, filters)

    if (filtered_nodes.length === 0) {
        if (verbose) console.log("Filters too restrictive.")
        response.error = "Filters too restrictive - selected a random monster."
        const random_monster = random_from_list(valid_nodes)
        response.encounter = {[random_monster.id]: {locked:false, count:1}}
        return response
    }

    const random_selection = random_from_list(filtered_nodes)
    response.encounter = {[random_selection.id]: {locked:false, count:1}}
    response.error = null

    return response

}