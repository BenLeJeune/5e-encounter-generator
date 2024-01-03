import * as d3 from "d3";

export type PlayerData = {
    level: valid_level,
    num: number | undefined
}

export type valid_level = 1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|undefined

export type Difficulty = "easy" | "medium" | "hard" | "deadly"

export type MonsterData = {
    monster_name:string,
    fraction:number,
    count:number,
    cr:number,
    xp:number
}

export type Node = {id:string}
export type Link = {source:Node, target:Node, weight:number}


export type Monster_Type = "aberration" | "beast" | "celestial" | "construct" | "dragon" |
    "elemental" | "fey" | "fiend" | "giant" | "monstrosity" | "plant" | "undead"
type Monster_Type_Key = `type_${Monster_Type}`

export type Monster_Tag = "aarakocra" | "bullywug" | "demon" | "devil" | "dwarf" | "elf" |
    "gith" | "gnoll" | "gnome" | "goblinoid" | "human" | "kenku" | "kobold" | "kuo-toa" |
    "lizardfolk" | "merfolk" | "orc" | "quaggoth" | "sahuagin" | "shapechanger" |
    "thri-kreen" | "titan" | "troglodyte" | "yuan-ti" | "yugoloth"
type Monster_Tag_Key = `tag_${Monster_Tag}`

export type Monster_Environment = "arctic" | "coastal" | "desert" | "forest" | "grassland" |
    "hill" | "mountain" | "swamp" | "underdark" | "underwater" | "urban"
type Monster_Environment_Key = `environment_${Monster_Environment}`

export type Monster_Alignment = "C" | "E" | "G" | "L" | "N"
type Monster_Alignment_Key = `alignment_${Monster_Alignment}`

type MonsterAlign = {
    [key in Monster_Alignment_Key]: "0" | "1"
}
type MonsterEnv = {
    [k in Monster_Environment_Key]: "0" | "1"
}
type MonsterType = {
    [k in Monster_Type_Key]: "0" | "1"
}
type MonsterTag = {
    [k in Monster_Tag_Key]: "0" | "1"
}

export type Monster = MonsterAlign & MonsterType & MonsterTag &
    MonsterEnv & {monster_name: string, cr: string, source: string}

export const MONSTER_TYPES = ["aberration" , "beast" , "celestial" , "construct" , "dragon" ,
    "elemental" , "fey" , "fiend" , "giant" , "monstrosity" , "plant" , "undead"] as Monster_Type[]

export const MONSTER_TAGS = ["aarakocra" , "bullywug" , "demon" , "devil" , "dwarf" , "elf" ,
"gith" , "gnoll" , "gnome" , "goblinoid" , "human" , "kenku" , "kobold" , "kuo-toa" ,
"lizardfolk" , "merfolk" , "orc" , "quaggoth" , "sahuagin" , "shapechanger" ,
"thri-kreen" , "titan" , "troglodyte" , "yuan-ti" , "yugoloth"] as Monster_Tag[]

export const MONSTER_ENVIRONMENTS = ["arctic" , "coastal" , "desert" , "forest" , "grassland" ,
"hill" , "mountain" , "swamp" , "underdark" , "underwater" , "urban"] as Monster_Environment[]