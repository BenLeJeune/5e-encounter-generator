export const toTitleCase = (phrase:string) => {
    return phrase
        .toLowerCase()
        .split(' ')
        .map(word => ['of'].indexOf(word) === -1 ? word.charAt(0).toUpperCase() + word.slice(1) : word)
        .join(' ');
};