export const toTitleCase = (phrase:string) => {
    return phrase
        .toLowerCase()
        .split(' ')
        .map(word => ['of'].indexOf(word) === -1 ? word.charAt(0).toUpperCase() + word.slice(1) : word)
        .join(' ');
};

export const varUrl = (path:string) => {
    // Wrap the url in a fetch statement with this so it functions in both
    // development (localhost) and production (benlejeune.com)
    const root = window.location.href
    if (root == "https://benlejeune.com/5e-encounter-generator/") return path
    else return "5e-encounter-generator/" + path
}

export const weightedRandomChoice = (weights:{[choice:string]:number}) => {
    const total = Object.values(weights).reduce((prev, next) => prev + next)
    const choices = Object.keys(weights)
    const random = Math.random()
    // We increment through to find the item
    let running_total = 0
    for (let i = 0; i < choices.length; i++) {
        const choice = choices[i]
        const upper_bound = running_total + (weights[choice] / total)
        if (random > running_total && random <= upper_bound) return choice
        running_total = upper_bound
    }
    console.log("ERROR")
    return null
}

