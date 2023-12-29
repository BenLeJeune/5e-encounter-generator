import {Difficulty, PlayerData} from "../types";

export function calculatePartyXP(party:PlayerData[]) {
    const budget = {
        "easy": 0,
        "medium": 0,
        "hard": 0,
        "deadly": 0
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

const XP_THRESHOLDS = {
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
    ]
} as { [key in Difficulty]: number[] }

export const DIFFICULTIES = ["easy", "medium", "hard", "deadly"] as Difficulty[]