import {Node} from "../types";
import {CR_TO_XP} from "../helpers/xp_calculations";
import {random_from_list} from "../helpers/misc_helpers";

type all_nodes_type = {
    [monster_name:string]:Node
}

const CRs = Object.keys(CR_TO_XP).map(cr => Number(cr)).sort((a, b) => a - b)

export const generate_combat_strategies = (encounter:{[key:string]:number}, all_nodes:all_nodes_type) => {
    // The criteria for a boss combat is this:
    // A single monster at the max CR, followed by several tiers of unused CR.
    const encounter_nodes = Object.keys(encounter).map(m => all_nodes[m])
    if (encounter_nodes.length === 0) return {title: "Strategy", description: [""] as string[]}

    const combat_crs = encounter_nodes.map(n => n.cr)
    const max_cr = combat_crs.reduce((p, n) => Math.max(p, n), 0)
    // We check for four levels of unused CR below the boss
    const end = CRs.indexOf(max_cr)
    const start = Math.max(0, end - 4)
    const leuitenant_cr = CRs.slice(start, end)
    const leuitenant_monsters = encounter_nodes.filter(n => leuitenant_cr.indexOf(n.cr) !== -1)
    const minion_monsters = encounter_nodes.filter(n => n.cr < start)
    const boss_monsters = encounter_nodes.filter(n => CRs.indexOf(n.cr) >= end - 1)

    if (minion_monsters.length > 0 && boss_monsters.length === 1) {
        // We identify this combat as a boss combat.

        const boss = encounter_nodes.filter(n => n.cr === max_cr)[0]
        const minions = encounter_nodes.filter(n => CRs.indexOf(n.cr) < end)
        const minions_list = minions.map(m => m.id)

        let minions_text = ""
        if (minions_list.length > 0) {
            if (minions_list.length === 1) minions_text = minions_list[0]
            else if (minions_list.length === 2) minions_text = minions_list.join(' and ')
            else minions_text = [minions_list.slice(0, -1).join(', '), minions_list.slice(-1)].join(', and ')
        }

        return {
            title: "boss & minions",
            description: [
                `The ${boss.id} fights alongside its ${minions_text} minions. ` + boss_minion_strategies(boss.id)
            ]
        }
    }
    else if (boss_monsters.length === 2) {
        // A pair of monsters
        const [boss_1, boss_2] = boss_monsters
        return {
            title: "Pair of Monsters",
            description: [
                `The ${boss_1.id} and ${boss_2.id} fight alongside one another. ` + boss_pair_strategies(boss_1.id, boss_2.id),
                boss_minion_strategies(random_from_list([boss_1.id, boss_2.id]))
            ]

        }
    }

    return {
        title: "none identified",
        description: ["Who tf knows"]
    }


}
const boss_minion_strategies = (boss_name: string) => {
    return random_from_list([
        `The ${boss_name} cares for their underlings, and becomes enraged if they are harmed.`,
        `The ${boss_name} doesn't respect their minions, and throws their lives away without thought.`,
        `These minions hate the ${boss_name}, and will flee or betray them once the tide turns.`,
        `The minions are disorganised, and fight amongst themselves.`
    ])
}

const boss_pair_strategies = (boss_1:string, boss_2:string) => {
    return random_from_list([
        `They have been close friends for most of their lives, and would die for each other.`,
        `They have an uneasy partnership, but ${boss_1} seeks to betray ${boss_2}.`,
        `Both seek to undermine the other.`,
        `The ${boss_1} is the leader, and the ${boss_2} performs its bidding.`,
        `They travel together for safety in numbers.`,
        ``,
        ``
    ])
}