import {
    Monster,
    Monster_Environment,
    MONSTER_ENVIRONMENTS,
    Monster_Tag,
    MONSTER_TAGS,
    Monster_Type,
    MONSTER_TYPES
} from "../types";

export const getMonsterType = (monster:Monster) => {
    const matches = [] as Monster_Type[]
    MONSTER_TYPES.forEach(t => {
        if (monster[`type_${t}`] === "1") matches.push(t)

    })
    if (matches.length > 0) {
        return matches[0]
    } else return ""
}

export const getMonsterTag = (monster:Monster) => {
    const matches = [] as Monster_Tag[]
    MONSTER_TAGS.forEach(t => {
        if (monster[`tag_${t}`] === "1") matches.push(t)
    })
    if (matches.length > 0) {
        return matches[0]
    } else return ""
}

export const getMonsterEnvironments = (monster:Monster) => {
    const matches = [] as Monster_Environment[]
    MONSTER_ENVIRONMENTS.forEach(e => {
        if (monster[`environment_${e}`] === "1") matches.push(e)
    })
    return matches
}

export const getMonsterAlignment = (monster:Monster) => {
    const alignment = []
    if (monster["alignment_L"] === "1") alignment.push("Lawful")
    else if (monster["alignment_C"] === "1") alignment.push("Chaotic")
    if (monster["alignment_N"] === "1") alignment.push("Neutral")
    if (monster["alignment_G"] === "1") alignment.push("Good")
    else if (monster["alignment_E"] === "1") alignment.push("Evil")
    return alignment.join(" ")
}