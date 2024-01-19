import {random_from_list} from "../helpers/misc_helpers";
import {Node} from "../types";

type all_nodes_type = {
    [monster_name:string]:Node
}

export const generate_objective = (encounter:{[key:string]:number}, all_nodes:all_nodes_type) => {
    return random_from_list(generic_alternative_objectives)
}

export const generic_alternative_objectives = [
    {
        "title": "survive",
        "description": "The players don't have to defeat the monsters - they only need to make it out (or make it past them) alive."
    },
    {
        "title": "retrieval",
        "description": "The monsters have stumbled into possessing a powerful magic item, or important artifact. It must be retrieved before they figure out what it is.",
    },
    {
        "title": "rescue",
        "description": "The monsters have kidnapped some villagers, or a local child, or a noble. The priority is keeping them alive - and the monsters know this."
    },
    {
        "title": "ritual",
        "description": "The monsters are in the process of conducting some profane ritual, with severe consequences if completed. If not distracted, they will use their turns to progress the ritual."
    },
    {
        "title": "stealth",
        "description": "The party have the element of surprise, and can try to sneak past - or ready an ambush."
    },
    {
        "title": "collateral damage",
        "description": "Either through chance, or being used as human shields, there are many innocents present in the battlefield. The party must navigate the battle causing as little damage as possible."
    },
    {
        "title": "thieves!",
        "description": "The monsters are trying to steal some valuable magical artifact. The players can kill them, or try to get to the artifact first."
    },
    {
        "title": "buy time",
        "description": "The party have to keep the monsters engaged, to buy time for allies to disrupt a ritual, or for hostages to escape."
    },
    {
        "title": "assassination",
        "description": "The party's main goal is to kill one (or a few) of the monsters. Whether they can do that without attracting further attention is another question."
    },
    {
        "title": "purge",
        "description": "ALL the monsters must be dealt with. If any get away, it poses a serious problem - they might know sensitive information, or warn their leader."
    },
    {
        "title": "destruction",
        "description": "The monsters are laying waste to the area around them, be it flora, ruins, buildings, or valuables. These must be protected."
    },
    {
        "title": "sabotage",
        "description": "The party must sabotage or destroy a crucial building, structure, weapon, or magic item - such as a bridge. The enemies won't let this happen without a fight."
    },
    {
        "title": "saboteurs!",
        "description": "The monsters are attempting to sabotage a structure, weapon, defence, or resource - their success could have severe consequences."
    }

]

