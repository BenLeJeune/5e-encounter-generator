import {Link, Node, StringTypeDict} from "../types";
import {share_type} from "../helpers/monster_helpers";
import {adjusted_link_weight} from "./GenerationUtils";
import {weightedRandomChoice} from "../helpers/misc_helpers";

export const RefreshMonster = (
    graph:{nodes:Node[], links:Link[]}, monster:string,
    all_nodes: StringTypeDict<Node>, verbose=false
) => {

    const base_monster = all_nodes[monster]

    const response = {
        monster: '',
        error: undefined
    } as {monster:string, error?:null|string}

    // We will filter for all monsters of the same CR that share the same type (excluding the base monster)
    const valid_monsters = Object.values(all_nodes).filter(
        node => node.cr === base_monster.cr && node.id !== base_monster.id
            && share_type(node, base_monster, "boolean", true)
    )

    if (valid_monsters.length === 0) {
        if (verbose) console.log("No valid monsters found.")
        response.monster = monster
        response.error = `Couldn't find any suitable monsters to replace ${monster} at the same CR.`
        return response
    }

    const weights = valid_monsters.reduce((prev, node) => {
        const weight = adjusted_link_weight({target: node, source: base_monster, weight: 1})
        return {...prev, [node.id]: weight}
    }, {} as StringTypeDict<number>)

    const random_selection = weightedRandomChoice(weights)

    if (!random_selection) {
        if (verbose) console.log("Weighted random selection failed. How strange.")
        response.monster = monster
        response.error = `Weighted random choice failed to find replacement.`
        return response
    }

    response.monster = random_selection
    response.error = null
    return response

}