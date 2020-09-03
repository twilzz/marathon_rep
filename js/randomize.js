export function randomizeNum (num) {
    return Math.floor(Math.random()*num);
}

export function randomizeDmg (min, max) {
    const num = max - min;
    return Math.floor(Math.random()*num)+min;
}
