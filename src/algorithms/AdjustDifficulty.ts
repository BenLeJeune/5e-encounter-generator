import {Link, Node, StringTypeDict} from "../types";
import {share_type} from "../helpers/monster_helpers";
import {adjusted_link_weight} from "./GenerateRandomEncounter";
import {weightedRandomChoice} from "../helpers/misc_helpers";

export const AdjustDifficulty = (
    graph:{nodes:Node[], links:Link[]}, monster:string,
    mode: "easier" | "harder",
    all_nodes: StringTypeDict<Node>, verbose=false
) => {
    // This algorithm will replace a monster with one either slightly easier,
    // or slightly harder

    const base_monster = all_nodes[monster]

    const response = {
        monster: '',
        error: undefined
    } as {monster:string, error?:null|string}

    // our strategy - get a monster of the same type one CR jump above / below
    // if this is possible, sort based on factors (shared nodes, closeness, languages, etc)
    // if not, repeat on a further away monster

    const valid_monsters = Object.values(all_nodes).filter(
        node => (
            (mode === "harder" && node.cr > base_monster.cr) || (mode === "easier" && node.cr < base_monster.cr)
        ) && share_type(node, base_monster, "boolean", true)
    )

    if (valid_monsters.length === 0) {
        // there are no valid monsters to change into
        if (verbose) console.log("No valid monsters to transform into")
        response.monster = monster
        response.error = `No valid monsters found to replace ${monster}.`
        return response
    }

    const target_cr = valid_monsters.reduce((prev, node) => {
        if (mode === "harder") return Math.min(prev, node.cr)
        else if (mode === "easier") return Math.max(prev, node.cr)
        // unreachable
        return prev
    }, mode === "harder" ? 30 : 0)

    if (verbose) console.log("Target CR: ", target_cr)

    const matches = valid_monsters.filter(node => node.cr === target_cr)

    if (matches.length === 0) {
        if (verbose) console.log("Somehow the matches are 0. This shouldn't happen.")
        response.monster = monster
        response.error = `0 matches - shouldn't happen.`
        return response
    }

    const weights = matches.reduce((prev, node) => {
        const weight = adjusted_link_weight({target: node, source: base_monster, weight: 1})
        return {...prev, [node.id]: weight}
    }, {} as StringTypeDict<number>)

    const random_selection = weightedRandomChoice(weights)

    if (!random_selection) {
        if (verbose) console.log("Weighted random selection failed, hmmm.")
        response.monster = monster
        response.error = `Weighted random choice failed to find a replacement monster.`
        return response
    }

    response.monster = random_selection
    response.error = null
    return response
}