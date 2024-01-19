import {
    Monster_Environment, Monster_Environment_Key, MONSTER_ENVIRONMENTS,
    MONSTER_LANGS,
    Monster_Language,
    Monster_Language_Key, Monster_Tag, Monster_Tag_Key, MONSTER_TAGS,
    Monster_Type,
    Monster_Type_Key,
    MONSTER_TYPES,
    Node
} from "../types";

// export const share_language = (mon_1:Node, mon_2:Node, mode:"count"|"boolean", include_common=false) => {
//     if (mode === "boolean") {
//         MONSTER_LANGS.filter(m => m !== 'common' || include_common).forEach(lang => {
//             const lang_key = 'speaks_' + lang as Monster_Language_Key
//             if (mon_1[lang_key] === "1" && mon_2[lang_key] === "1") return true
//         })
//         return false
//     }
//     else {
//         let num_shared = 0
//         MONSTER_LANGS.forEach(lang => {
//             const lang_key = 'speaks_' + lang as Monster_Language_Key
//             if (mon_1[lang_key] === "1" && mon_2[lang_key] === "1") num_shared++
//         })
//         return num_shared
//     }
// }

export const generic_share_property =
    <Property, Key extends keyof Node>(mon_1:Node, mon_2:Node, mode:"count"|"boolean", list:Property[], prefix:string, exclude:Property[]=[]) =>
    {
        if (mode === "boolean") {
            let match = false
            list.filter(m => exclude.indexOf(m) === -1).forEach(value => {
                const key = prefix + '_' + value as Key
                if (mon_1[key] === 1 && mon_2[key] === 1) match = true
            })
            return match
        }
        else {
            let num_shared = 0
            list.filter(m => exclude.indexOf(m) === -1).forEach(value => {
                const key = prefix + '_' + value as Key
                if (mon_1[key] === 1 && mon_2[key] === 1) num_shared++
            })
            return num_shared
        }

    }

export const share_language = (mon_1:Node, mon_2:Node, mode:"count"|"boolean", include_common=false) =>
    generic_share_property<Monster_Language, Monster_Language_Key>
    (mon_1, mon_2, mode, MONSTER_LANGS, 'speaks', include_common ? [] : ['common'])


export const share_type = (mon_1:Node, mon_2:Node, mode:"count"|"boolean", include_humanoid=false) =>
    generic_share_property<Monster_Type, Monster_Type_Key>
    (mon_1, mon_2, mode, MONSTER_TYPES, 'type', include_humanoid ? [] : ['humanoid'])

export const share_tag = (mon_1:Node, mon_2:Node, mode:"count"|"boolean", include_human=false) =>
    generic_share_property<Monster_Tag, Monster_Tag_Key>
    (mon_1, mon_2, mode, MONSTER_TAGS, 'tag', include_human ? [] : ['human'])


export const share_environment = (mon_1:Node, mon_2:Node, mode:"count"|"boolean") =>
    generic_share_property<Monster_Environment, Monster_Environment_Key>
    (mon_1, mon_2, mode, MONSTER_ENVIRONMENTS, 'environment')

