import {Difficulty, PlayerData} from "../types";

export function calculatePartyXP(party:PlayerData[]) {
    const budget = {
        "easy": 0,
        "medium": 0,
        "hard": 0,
        "deadly": 0,
        "absurd": 0
    } as {[key in Difficulty]: number}


    party.forEach(player => {
        const { level, num } = player
        DIFFICULTIES.forEach(diff => {
            if (level !== undefined && num !== undefined) {
                budget[diff] += XP_THRESHOLDS[diff][level - 1] * num
            }
        })
    })
    return budget
}

export function calculateDailyXP(party:PlayerData[]) {
    let daily = 0
    party.forEach(player => {
        const {level, num} = player
        if (level !== undefined && num !== undefined) {
            daily += XP_DAILY[level - 1] * num
        }
    })
    return daily
}

const XP_THRESHOLDS = {
    "trivial": [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    "easy": [
        25, 50, 75, 125, 250, 300, 350, 450, 550, 600,
        800, 1000, 1100, 1250, 1400, 1600, 2000, 2100, 2400, 2800
    ],
    "medium": [
        50, 100, 150, 250, 500, 600, 750, 900, 1100, 1200,
        1600, 2000, 2200, 2500, 2800, 3200, 3900, 4200, 4900, 5700
    ],
    "hard": [
        75, 150, 225, 375, 750, 900, 1100, 1400, 1600, 1900,
        2400, 3000, 3400, 3800, 4300, 4800, 5900, 6300, 7300, 8500
    ],
    "deadly": [
        100, 200, 400, 500, 1100, 1400, 1700, 2100, 2400, 2800,
        3600, 4500, 5100, 5700, 6400, 7200, 8800, 9500, 10900, 12700
    ],
    "absurd": [
        125, 250, 575, 625, 1450, 1900, 2300, 2800, 3200, 3700, 4800,
        6000, 6800, 7600, 8500, 9600, 11700, 12700, 14500, 16900
    ]
} as { [key in Difficulty]: number[] }

export const difficulty_increase = (difficulty:Difficulty) => {
    switch (difficulty) {
        case "trivial":
            return "easy"
        case "easy":
            return "medium"
        case "medium":
            return "hard"
        case "hard":
            return "deadly"
        case "deadly":
        default:
            return "absurd"
    }
}
export const difficulty_decrease = (difficulty:Difficulty) => {
    switch (difficulty) {
        case "trivial":
        case "easy":
            return "trivial"
        case "medium":
            return "easy"
        case "hard":
            return "medium"
        case "deadly":
            return "hard"
        case "absurd":
        default:
            return "deadly"
    }
}

const XP_DAILY = [
    300, 600, 1200, 1700, 3500, 4000, 5000, 6000, 7500,
    9000, 10500, 11500, 13500, 15000, 18000, 20000, 25000, 27000, 30000, 40000
]

export const DIFFICULTIES = ["easy", "medium", "hard", "deadly", "absurd"] as Difficulty[]

export const parseCr = (cr: string) => {
    if (cr === "0.125") return "1/8"
    else if (cr === "0.25") return "1/4"
    else if (cr === "0.5") return "1/2"
    else return cr
}

export const CR_TO_XP = {
    0: 0,
    0.125: 25,
    0.25: 50,
    0.5: 100,
    1: 200,
    2: 450,
    3: 700,
    4: 1100,
    5: 1800,
    6: 2300,
    7: 2900,
    8: 3900,
    9: 5000,
    10: 5900,
    11: 7200,
    12: 8400,
    13: 10000,
    14: 11500,
    15: 13000,
    16: 15000,
    17: 18000,
    18: 20000,
    19: 22000,
    20: 25000,
    21: 33000,
    22: 41000,
    23: 50000,
    24: 62000,
    25: 75000,
    26: 90000,
    27: 105000,
    28: 120000,
    29: 135000,
    30: 155000
} as {[key:number]:number}

export const XP_TO_CR = Object.keys(CR_TO_XP).reduce((prev, key) => ({
    ...prev,
    [CR_TO_XP[key as unknown as keyof typeof CR_TO_XP]]: Number(key)
}), {} as {[key:number]:number})

export const xp_multiplier = (num_monsters:number) => {
    switch(num_monsters) {
        case 1:
            return 1
        case 2:
            return 1.5;
        case 3:
        case 4:
        case 5:
        case 6:
            return 2;
        case 7:
        case 8:
        case 9:
        case 10:
            return 2.5;
        case 11:
        case 12:
        case 13:
        case 14:
            return 3;
        default:
            return 4;
    }
}

export const calculateEncounterXP = (encounter_counts:{[m:string]:number}, encounter_xps:{[m:string]:number}) => {
    // Should be of the form (count, xp)
    const num_monsters = Object.values(encounter_counts).reduce((p, n) => p + n, 0)
    const total_xp = Object.keys(encounter_xps).reduce((p, mon) => p + (encounter_counts[mon] * encounter_xps[mon]), 0)
    let multiplier = xp_multiplier(num_monsters)
    return total_xp * multiplier

}

export const calculate_encounter_xp = (xp_num_pairs:[number, number][]) => {
    // of the form [xp, count]
    const XP = 0, NUM = 1
    const num_monsters = xp_num_pairs.reduce((p, n) => n[NUM] + p, 0)
    const total_xp = xp_num_pairs.reduce((p, n) => (n[XP] * n[NUM]) + p, 0)

    let multiplier = xp_multiplier(num_monsters)

    return total_xp * multiplier
}

export const CRs = Object.keys(CR_TO_XP).map(cr => Number(cr)).sort((a, b) => a - b)

export const XPs = Object.values(CR_TO_XP).map(xp => Number(xp)).sort((a, b) => a - b)

export const clamp_cr = (cr:number) => {

    if (cr > 30) return 30
    if (cr < 0) return 0

    let i = 0
    while (cr > CRs[i] && i < CRs.length) {
        i += 1
    }
    // If we exceeded the XP limit, we clamp to 30
    if (cr > CRs[i]) return 30

    // If we can, compare the diff and return the nearest
    if (i > 0 && i < CRs.length) {
        let below = CRs[i - 1]
        let above = CRs[i]


        let below_diff = Math.abs(below - cr)
        let above_diff = Math.abs(above - cr)

        if (above_diff <= below_diff) return above
        else return below
    }

    return 0
}

export const clamp_xp = (xp:number) => {

    if (xp > 30) return 30
    if (xp < 0) return 0

    let i = 0
    while (xp > XPs[i] && i < XPs.length) {
        i += 1
    }
    // If we exceeded the XP limit, we clamp to 30
    if (xp > XPs[i]) return 30

    // If we can, compare the diff and return the nearest
    if (i > 0 && i < XPs.length) {
        let below = XPs[i - 1]
        let above = XPs[i]


        let below_diff = Math.abs(below - xp)
        let above_diff = Math.abs(above - xp)

        if (above_diff <= below_diff) return above
        else return below
    }

    return 0
}