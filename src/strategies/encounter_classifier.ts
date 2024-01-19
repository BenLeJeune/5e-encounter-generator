import {Node, StringTypeDict} from "../types";
import {capitalise, format_list, plural, random_from_list, shuffle} from "../helpers/misc_helpers";

export const encounter_classifier = (encounter:StringTypeDict<number>, all_nodes:StringTypeDict<Node>) => {
    /// This will generate encounter strategies by classifying monsters into up to 3
    // 'bands', the size of which will then be used to specify the strategy
    const encounter_nodes = Object.keys(encounter).reduce((p, n) => {
        return {...p, [n]: all_nodes[n]}
    }, {} as StringTypeDict<Node>)

    // We extract the encounter CRs, and generate the breakpoints
    const combat_crs = Object.values(encounter_nodes).map(node => node.cr)
    const max_cr = combat_crs.reduce((p, n) => Math.max(p, n), 0)

    // After the first breakpoint, we divide the remaining monsters in 2.
    const bp_1 = Math.max(max_cr - 2, max_cr / 2)
    const bp_2 = bp_1 / 2

    const top_level_monsters = Object.values(encounter_nodes).filter(node => node.cr > bp_1)
    const mid_level_monsters = Object.values(encounter_nodes).filter(node => bp_1 >= node.cr && node.cr > bp_2)
    const low_level_monsters = Object.values(encounter_nodes).filter(node => bp_2 >= node.cr)

    const top_level_count = top_level_monsters.map(node => encounter[node.id]).reduce((p, n) => p + n, 0)
    const mid_level_count = mid_level_monsters.map(node => encounter[node.id]).reduce((p, n) => p + n, 0)
    const low_level_count = low_level_monsters.map(node => encounter[node.id]).reduce((p, n) => p + n, 0)

    const top_name = format_list(top_level_monsters.map(node => encounter[node.id] === 1 ? node.id : plural(node.id)))
    const mid_name = format_list(mid_level_monsters.map(node => encounter[node.id] === 1 ? node.id : plural(node.id)))
    const low_name = format_list(low_level_monsters.map(node => encounter[node.id] === 1 ? node.id : plural(node.id)))


    console.log("Top level:", top_level_monsters)
    console.log("Mid level:", mid_level_monsters)
    console.log("Low level:", low_level_monsters)

    let strategy = {
        title: "Strategy",
        text: top_name
    }

    const size_lookup = (k:number) => {
        return {
            "top": top_level_count === k,
            "mid": mid_level_count === k,
            "low": low_level_count === k
        }
    }
    const [is_no, is_solo, is_pair, is_trio, is_horde] = [
        size_lookup(0), size_lookup(1), size_lookup(2), size_lookup(3),
        {
            "top": top_level_count >= 4,
            "mid": mid_level_count >= 4,
            "low": low_level_count >= 4,
        }
    ]

    const monster_names = (monsters:Node[], num:number) => {
        /// We only care about twos and threes
        if (num === 2) {
            const monster_1 = monsters[0]
            const monster_2 = monsters[monsters.length === 1 ? 0 : 1]
            let [mon_1_name, mon_2_name] = ["", ""]
            if (monster_1.id === monster_2.id) [mon_1_name, mon_2_name] = ["one " + monster_1.id, "the other"]
            else [mon_1_name, mon_2_name] = shuffle(["the " + monster_1.id, "the " + monster_2.id])
            return [mon_1_name, mon_2_name]
        }
        if (num === 3) {
            if (monsters.length === 1) {
                // three of the same monster
                const mon = monsters[0]
                return [
                    "one " + mon.id, "another " + mon.id, "the third " + mon.id, 'two of the ' + plural(mon.id)
                ]
            }
            else if (monsters.length === 2) {
                // One pair, and one single.
                const mon_1 = monsters[0]
                const mon_2 = monsters[1]
                if (encounter[mon_1.id] === 1) {
                    return [
                        "the " + mon_1.id,
                        "one " + mon_2.id,
                        "the other " + mon_2.id,
                        "the " + plural(mon_2.id)
                    ]
                }
                else {
                    return [
                        "the " + mon_2.id,
                        "one " + mon_1.id,
                        "the other " + mon_1.id,
                        "the " + plural(mon_1.id)
                    ]
                }
            }
            else if (monsters.length === 3) {
                // Three distinct monsters
                const [mon_1, mon_2, mon_3] = shuffle(monsters)
                return [
                    "the " + mon_1.id, "the " + mon_2.id, "the " + mon_3.id, "the " + mon_2.id +  " and " + mon_3.id
                ]
            }
        }
    }

    ///
    ///  - ========: COMBAT PRESETS :======== -
    ///

    //  -- ==: ONLY TOP BAND :== --

    if (is_no['low'] && is_no['mid']) {
        if (is_solo['top']) {
            // We have a single boss monster, with no minions!
            strategy.title = "Solo boss"
            strategy.text = `The ${top_name} fights alone, ` + random_from_list([
                "and tries to get the jump on the players with a surprise attack.",
                "and gets up close and personal with the party.",
                "and try and keep its distance, using (possibly improvised) ranged attacks before closing in for the kill."
            ])
            strategy.text += " " + random_from_list([
                "It doesn't care for its own safety, and fights to the death.",
                "Upon reaching 30% health, it will attempt to flee."
            ])
        }
        if (is_pair['top']) {
            // We have just a pair of monsters, each roughly equally difficult.
            strategy.title = "Pair of monsters"

            // This determines the monster names

            const [mon_1_name, mon_2_name] = monster_names(top_level_monsters, 2) as [string, string]
            strategy.text = `The ${top_name} fight in a pair. ` + random_from_list([
                "They are close friends, and would die for one another.",
                `They aren't loyal to one another, and ${mon_1_name} will easily betray ${mon_2_name}.`,
                `${capitalise(mon_1_name)} is clearly in charge, and bosses around ${mon_2_name}.`,
                ""
            ]) + " " + random_from_list([
                `${capitalise(mon_1_name)} rushes the party, while ${mon_2_name} attempts to wrap around.`,
                "Both immediately rush for the weakest party member in a coordinated attack.",
                "Both rush for the nearest player to them in an uncoordinated attack."
            ])
        }
        if (is_trio['top']) {
            // A trio of roughly equally difficult monsters
            strategy.title = "Trio of monsters"
            // If there is a single and a pair, the single is on 1, and the pair is on 2/3
            // If there is a pair, pair_name is their plural.
            const [name_1, name_2, name_3, pair_name] = monster_names(top_level_monsters, 3) as [string, string, string, string]
            strategy.text = `The ${top_name} fight as a trio. ` + random_from_list([
                `The ${pair_name} attack the party, while ${name_1} tries to escape.`,
                `The ${pair_name} protect ${name_1}, and try to keep the party away from them.`,
                `${capitalise(name_1)} begins commanding the ${pair_name}, who have strategic target selection while ${name_1} issues orders.`,
                `The three fight independently, with ${name_1} retreating once defeat is apparent.`
            ])
        }
        if (is_horde['top']) {
            // We have a single horde of monsters
            strategy.title = "Horde!"
            strategy.text = `The ${top_name} try to swarm and overwhelm the party using strength of numbers. ` +
                random_from_list([
                    "Their attacks are highly coordinated on squishy damage-dealers.",
                    "They are uncoordinated and easily lured or distracted.",
                    "They often fight amongst themselves, and will scatter once clearly defeated."
                ])
        }
    }

    //  -- ==: TOP BAND & MID BAND :== --
    if (is_no['low']) {
        //  -- ==: SOLO TOP BAND  :== --
        if (is_solo['top']) {
            if (is_solo['mid']) {
                // Solo top & mid - boss & lieutenant
                strategy.title = "Boss & Lieutenant"
                strategy.text = `The ${top_name} is accompanied by their ${mid_name}. ` + random_from_list([
                    `The ${top_name} is a cruel master, and so the ${mid_name} despises them.`,
                    `The ${mid_name} is fiercely loyal to the ${top_name}.`,
                    `The ${mid_name} secretly plans to betray the ${top_name}.`
                ]) + " " + random_from_list([
                    `The ${mid_name} greets the party, while the ${top_name} stays back and observes from afar.`,
                    `The ${top_name} and ${mid_name} confront the party together, and are coordinated.`,
                    `The ${top_name} and ${mid_name} fight separately, and uncoordinated.`
                ]) + " " + random_from_list([
                    "They will flee upon reaching 30% health.",
                    "They will attempt to surrender upon reaching 30% health.",
                    "They won't give up, and fight to the death.",
                    `The ${top_name} will run away at 40% health, leaving the ${mid_name}`
                ])
            }
            if (is_pair['mid'] || is_trio['mid']) {
                strategy.title = `Boss & their Guard`
                strategy.text = `The ${top_name} is accompanied by their guard of the ${mid_name}. ` + random_from_list([
                    `The ${mid_name} are fiercely loyal, and will die to protect the ${top_name}.`,
                    `The ${mid_name} are not loyal, and are easily bought or swayed.`,
                    `The ${top_name} is cruel, and their subjects openly detest them.`
                ]) + " " + random_from_list([
                    `The ${mid_name} rush the party, to keep the ${top_name} safe.`,
                    `The ${top_name} fights alongside the ${mid_name}, getting up close and personal with the party.`,
                    `The ${top_name} distracts the party, while the ${mid_name} set up an ambush.`
                ])
            }
            if (is_horde['mid']) {
                strategy.title = `Leader and Company`
                strategy.text = `The ${top_name} is accompanied by their ${mid_name}. ` + random_from_list([
                    `The ${mid_name} are loyal fighters, and protect the ${top_name}.`,
                    `The ${top_name} fights dangerously, with the ${mid_name} having to follow their lead.`,
                    `The ${top_name} stays back, and commands.`
                ])
            }
        }
        //  -- ==: DUO TOP BAND  :== --
        if (is_pair['top']) {
            if (is_solo['mid']) {
                strategy.title = "Leaders & Runt"
                const [lead_1_name, lead_2_name] = monster_names(top_level_monsters, 2) as [string, string]
                strategy.text = `The ${top_name} are accompanied by the ${mid_name}. ` + random_from_list([
                    `They force the ${mid_name} to fight aggressively, while they initially stay back.`,
                    `They rush the party, to distract them from the weaker ${mid_name}, which tries to escape.`,
                    `They rush towards the party alongside the ${mid_name}.`
                ]) + " " + random_from_list([
                    `The ${top_name} will flee once on has fallen below 30% health, alongside the ${mid_name}.`,
                    `${capitalise(lead_1_name)} will stay back to hold off the party, allowing the others to escape, if things turn south.`
                ])
            }
            if (is_pair['mid']) {
                strategy.title = "Pair of pairs"
                const [boss_1_name, boss_2_name] = monster_names(top_level_monsters, 2) as [string, string]
                const [runt_1_name, runt_2_name] = monster_names(mid_level_monsters, 2) as [string, string]
                strategy.text = `The ${top_name} are accompanied by the ${mid_name}. ` + random_from_list([
                    `The ${top_name} hang back, sending the ${mid_name} to confront the party.`,
                    `${capitalise(boss_1_name)} and ${runt_1_name} fight as a pair, as do the other two, engaging the party and flanking where possible.`,
                    `The ${mid_name} are disloyal, and easily swayed. They confront the party, but will flee when one falls below 30% health.`
                ])
            }
            if (is_trio['mid'] || is_horde['mid']) {
                strategy.title = "Leaders & Guard"
                const [boss_1_name, boss_2_name] = monster_names(top_level_monsters, 2) as [string, string]
                strategy.text = `The ${top_name} are accompanied by the ${mid_name}. ` + random_from_list([
                    `The ${mid_name} are sent forward to protect the ${top_name}.`,
                    `${capitalise(boss_1_name)} keeps their distance, while ${boss_2_name} and ${mid_name} confront the party.`,
                    `${top_name} rush to meet the party, alongside the ${mid_name}.`
                ]) + " " + random_from_list([
                    `As long as ${boss_1_name} (the tactician) remains alive, they are coordinated, and utilise flanking where possible.`,
                    `The ${top_name} strategically throw away the lives of their underlings to protect themselves.`
                ])
            }
        }
        //  -- ==: TRIO & HORDE TOP BAND  :== --
        if (is_trio['top']) {
            if (is_solo['mid'] || is_pair['mid']) {
                strategy.title = "Top-heavy Battle"
                const [boss_1, boss_2, boss_3, pair_name] = monster_names(top_level_monsters, 3) as [string, string, string, string]
                strategy.text = `The ${top_name} fight alongside the ${mid_name}. ` + random_from_list([
                    `${capitalise(pair_name)} hang back, sending ${boss_1}, and the ${mid_name}, to confront the party directly.`,
                    `The ${top_name} rush to meet the party, alongside the ${mid_name}.`
                ]) + " " + random_from_list([
                    `There is tension between the ${top_name}, and should they begin losing, they will try to betray one another.`,
                    `${capitalise(boss_2)} seems to be the leader, whom the others seek to protect.`,
                    `${capitalise(pair_name)} issue orders, and the group fights tactically while they do so, flanking and holding choke points.`,
                    `${capitalise(boss_1)} seems to have subjugated ${pair_name} and the rest, and directs them to throw their lives away.`
                ])
            }
        }
        if (is_trio['top'] || is_horde['top']) {
            if (is_trio['mid' || is_horde['mid']]) {
                strategy.title = "Horde"
                strategy.text = `A horde of monsters assails the party. ` + random_from_list([
                    "The swarm fights chaotically, and seeks to overwhelm the party via strength of numbers"
                ])
            }
        }
        if (is_horde['top']) {
            if (is_solo['mid'] || is_pair['mid']) {
                strategy.title = "Top-heavy Battle"
                strategy.text = `The ${top_name} fight alongside the ${mid_name}. ` + random_from_list([
                    `The ${top_name} target the weakest party members, and try to take them out quickly.`,
                    `The ${top_name} protect the ${mid_name}, and put themselves in danger to do so.`,
                    `The ${top_name} become enraged if the ${mid_name} is harmed.`,
                    `The ${top_name} distract the party, while the ${mid_name} attempt${is_solo['mid'] ? 's' : ''} to sneak around.`,
                    `The ${mid_name} attempts to escape, while the ${top_name} distracts the party.`
                ])
            }
        }

    }

    //  -- ==: TOP BAND & LOW BAND :== --
    if (is_no['mid'] && !is_no['low']) {
        /// This applies to all TOP & LOW band encounters.
        const plur_s = is_solo['low'] ? 's' : ''

        strategy.text = `The ${top_name} fights alongside the ${low_name}. ` + random_from_list([
            `The ${top_name} cares for the ${low_name}, and does its best to protect ${is_pair['low'] ? 'them' : 'it'}.`,
            `The ${low_name} stay${plur_s} back at first, while the ${top_name} faces the party directly.`,
            `The ${top_name} distracts the party, while the ${low_name} sneak${plur_s} around.`
        ]) + " " + random_from_list([
            `The ${low_name} stay${plur_s} close to the ${top_name} during combat, often hiding behind them.`,
            `The ${low_name} assist${plur_s} the ${top_name} with flanking.`
        ])

        if (is_solo['top']) strategy.title = "Boss & "
        if (is_pair['top']) strategy.title = "Pair & "
        if (is_trio['top']) strategy.title = "Trio & "

        if (is_solo['low']) strategy.title += "Minion"
        if (is_pair['low'] || is_trio['low'] || is_horde['low']) strategy.title += "Minions"

        if (is_horde['top']) {
            strategy.title = "Mixed-size Horde"
        }


    }

    //  -- ==: ALL BANDS POPULATED :== --
    if (!is_no['low'] && !is_no['mid']) {
        if (is_solo['top']) strategy.title = "Boss, "
        if (is_pair['top']) strategy.title = "Pair, "
        if (is_trio['top']) strategy.title = "Trio, "

        if (is_solo['mid']) strategy.title += "Lieutenant & "
        if (is_pair['mid']) strategy.title += "Lieutenants & "
        if (is_trio['mid']) strategy.title += "Guards & "
        if (is_horde['mid']) strategy.title += "Company & "

        if (is_solo['low']) strategy.title += "Minion"
        if (is_pair['low'] || is_trio['low'] || is_horde['low']) strategy.title += "Minions"

        if (is_horde['top']) strategy.title = "Top-heavy Horde"


        const t_plur_s = is_solo['top'] ? 's' : ''
        const m_plur_s = is_solo['mid'] ? 's' : ''
        const l_plur_s = is_solo['low'] ? 's' : ''

        strategy.text = `The ${top_name} are joined by the ${mid_name}, and their ${low_name}. ` + random_from_list([
            `The ${mid_name} ${is_solo['mid'] ? 'is' : 'are'} fiercely loyal, and subjugate${m_plur_s} the ${low_name}.`,
            is_solo['mid'] ? `The ${mid_name} eagerly lays down their life, hoping for favour with their boss${is_solo['top'] ? '' : 'es'}.` : `The ${mid_name} vie for favour amongst themselves.`,
            `The ${mid_name} despise${m_plur_s} their leader${is_solo['top'] ? '' : 's'}, and will betray them easily.`
        ]) + " " + random_from_list([
            `The ${mid_name} command${m_plur_s} the ${low_name} to rush the party.`,
            `The ${top_name} throw${t_plur_s} away the lives of their minions tactically but uncaringly.`,
            `The ${top_name} will flee once their minions begin losing the battle.`,
            `The ${top_name} distract${t_plur_s} the party, alongside the ${low_name}, while the ${mid_name} attempt${m_plur_s} to ambush the party.`,
            `The ${mid_name} lure${m_plur_s} to the ${top_name}, who lie${t_plur_s} hidden.`
        ])

    }


    //  -- ==: GENERIC-ISH SUFFIXES :== --
    const generic_strategies_list = [] as string[]

    if (is_horde['mid']) generic_strategies_list.push(...[
        `The ${mid_name} prioritise breaking concentration on spells.`,
        `The ${mid_name} swarm the party, and surround the front-line.`
    ])
    if (is_horde['low']) generic_strategies_list.push(...[
        `The ${low_name} swarm the spellcasters, to break concentration.`,
        `The ${low_name} move within 5 feet of ranged characters, to disrupt ranged attacks.`
    ])
    if (is_horde['top']) generic_strategies_list.push(...[
        `The ${top_name} swarm the spellcasters, to break concentration.`,
        `The ${top_name} move within 5 feet of ranged characters, to disrupt ranged attacks.`
    ])
    if (is_solo['top']) generic_strategies_list.push(...[
        `The ${top_name} avoids being surrounded at all costs.`,
        `The ${top_name} heavily utilises cover & held actions.`
    ])
    if (is_pair['top']) generic_strategies_list.push(...[
        `The ${top_name} cover each other's blind spots.`
    ])

    if (generic_strategies_list.length > 0) strategy.text += " " + random_from_list(generic_strategies_list)


    console.log(top_level_count)

    return strategy

}