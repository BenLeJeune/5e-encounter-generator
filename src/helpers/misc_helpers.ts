export const toTitleCase = (phrase:string) => {
    return phrase
        .toLowerCase()
        .split(' ')
        .map(word => ['of'].indexOf(word) === -1 ? word.charAt(0).toUpperCase() + word.slice(1) : word)
        .join(' ');
};

export const varUrl = (path:string) => {
    // Wrap the url in a fetch statement with this, so it functions in both
    // development (localhost) and production (benlejeune.com)
    const root = window.location.host
    if (root === 'benlejeune.com') return path
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
    console.log("RANDOM CHOICE ERROR")
    return null
}

export const random_from_list = <T>(list:T[]) => {
    return list[Math.floor(Math.random() * list.length)]
}

export const format_list = (list_of_names:string[]) => {
    switch (list_of_names.length) {
        case 0:
            return ""
        case 1:
            return list_of_names[0]
        case 2:
            return list_of_names[0] + " and " + list_of_names[1]
        default:
            return [list_of_names.slice(0, -1).join(', '), list_of_names.slice(-1)].join(', and ')
    }
}

export const plural = (name:string) => {
    if (name[-1] === 's') return name + "es"
    else return name + "s"
}

export const shuffle = <T>(array:T[]) => {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export const capitalise = (str:string) => str[0].toUpperCase() + str.slice(1)