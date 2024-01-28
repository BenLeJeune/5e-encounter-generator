import {Monster_Environment_Key, Monster_Tag_Key, Monster_Type_Key, Node, StringTypeDict} from "../types";
import {share_environment, share_language, share_tag, share_type} from "../helpers/monster_helpers";
import {CombatEntry} from "../context/CombatContext";
import {filter_node} from "../helpers/filter_utils";

export const adjusted_link_weight = (link:{target:Node, source:Node, weight:number}) => {
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

export const formatEncounter = (encounter: StringTypeDict<number>, locked_monsters:string[]=[]) => Object.keys(encounter).reduce(
    (prev, key) => ({
        ...prev,
        [key]: {
            count: encounter[key],
            locked: locked_monsters.indexOf(key) !== -1
        }
    }), {} as StringTypeDict<CombatEntry>
)

export type NodeFilters = {
    tags:string[],
    types:string[],
    envs:string[],
    sources:string[],
    crMin:number,
    crMax:number
}

export const apply_filters = (nodes:Node[], filters:NodeFilters) => nodes.filter(node => filter_node<Monster_Type_Key>(node, filters.types, 'type_'))
        .filter(node => filter_node<Monster_Tag_Key>(node, filters.tags, 'tag_'))
        .filter(node => filter_node<Monster_Environment_Key>(node, filters.envs, 'environment_'))
        .filter(node => node.cr >= filters.crMin && node.cr <= filters.crMax)
        .filter(node => filters.sources.length === 0 || filters.sources.indexOf(node.source.toLowerCase()) !== -1)

export type EncounterResponse = {
    encounter: StringTypeDict<CombatEntry>,
    error:null|undefined|string
}