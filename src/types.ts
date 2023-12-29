
export type PlayerData = {
    level: valid_level,
    num: number | undefined
}

export type valid_level = 1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|undefined

export type Difficulty = "easy" | "medium" | "hard" | "deadly"