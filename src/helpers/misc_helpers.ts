export const toTitleCase = (phrase:string) => {
    return phrase
        .toLowerCase()
        .split(' ')
        .map(word => ['of'].indexOf(word) === -1 ? word.charAt(0).toUpperCase() + word.slice(1) : word)
        .join(' ');
};

export const varUrl = (path:string) => {
    const root = window.location.href
    if (root == "https://benlejeune.com/5e-encounter-generator/") return path
    else return "5e-encounter-generator/" + path
}