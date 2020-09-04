export function randomizeNum (num) {
    return Math.floor(Math.random()*num);
}

export function randomizeDmg (min, max) {
    const num = max - min;
    return Math.floor(Math.random()*num)+min;
}

export function generateLog(spell, firstPerson, secondPerson, dmg) {
    const logs = [
        `Удар *${spell}* ${firstPerson.name}-а бьет в предплечье ${secondPerson.name}-а на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`,
        `Атака *${spell}* ${firstPerson.name}-а приложил прямой удар коленом в пах ${secondPerson.name}-а на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`,
        `Удар *${spell}* ${firstPerson.name}-а, бьёт на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`,
        `Атака *${spell}* ${firstPerson.name}-а нанес мощнейший удар ${secondPerson.name}-а на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`,
        `Удар *${spell}* ${firstPerson.name}-а раздробил кулаком \<вырезанно цензурой\> противника на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`,
        `Атака *${spell}* ${firstPerson.name}-а наносит удар на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`,
        `Удар *${spell}* ${firstPerson.name}-а наносит дробящий урон на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`,
        `Атака *${spell}* ${firstPerson.name}-а бьёт в ногу противника на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`,
        `Удар *${spell}* ${firstPerson.name}-а бьёт в живот соперника на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`,
        `Атака *${spell}* ${firstPerson.name}-а разбивает бровь сопернику на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`
    ];
    return logs[randomizeNum(logs.length)-1];
}