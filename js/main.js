import { Pokemon } from './pokemon.js';
import { randomizeNum, randomizeDmg } from './randomize.js';
import { pokemons } from './pokemons.js';

const btnFight= document.querySelector('#btn-kick'), 
      btnParent = document.querySelector('.control'),
      fightLog = document.querySelector('#logs'),
      paragrathLog = document.createElement('p'),
      spellChar = document.querySelector('.spell_player1'),
      spellEnemy = document.querySelector('.spell_player2');
      

let player1 = new Pokemon ({
    ...pokemons[randomizeNum(pokemons.length)],
    selector: `player1`
});

let player2 = new Pokemon ({
    ...pokemons[randomizeNum(pokemons.length)],
    selector: `player2`
});

player1.attacks.forEach((item,index) => {
    const count = clickCounter(item.maxCount, item.name, item.minDamage, item.maxDamage);
    let dmgButton = document.createElement('button');
    dmgButton.classList.add('button');
    dmgButton.innerText = `${item.name} (${item.minDamage}-${item.maxDamage}) - ${item.maxCount}`;
    dmgButton.addEventListener('click', ()=> {
        let a = count();
        if (a === 'STOP') {
            dmgButton.disabled = true;
            paragrathLog.innerText = `${player1.name} больше не может использовать ${item.name}`;
            fightLog.append(paragrathLog);
            } else {
                dmgButton.innerText = a;
                player2.kickAss(randomizeDmg(item.minDamage, item.maxDamage), (dmg) =>{
                paragrathLog.innerText = generateLog(item.name,player1,player2,dmg);
                fightLog.append(paragrathLog);
            });
         }
        
    });
    spellChar.appendChild(dmgButton);

});

player2.attacks.forEach((item,index) => {
    const count = clickCounter(item.maxCount, item.name, item.minDamage, item.maxDamage);
    let dmgButton = document.createElement('button');
    dmgButton.classList.add('button');
    dmgButton.innerText = `${item.name} (${item.minDamage}-${item.maxDamage}) - ${item.maxCount}`;
    dmgButton.addEventListener('click', ()=> {
        let a = count();
        if (a === 'STOP') {
            dmgButton.disabled = true;
            paragrathLog.innerText = `${player2.name} больше не может использовать ${item.name}`;
            fightLog.append(paragrathLog);
            } else {
                dmgButton.innerText = a;
                player1.kickAss(randomizeDmg(item.minDamage, item.maxDamage), (dmg) =>{
                paragrathLog.innerText = generateLog(item.name,player2,player1,dmg);
                fightLog.append(paragrathLog);
            });
         }
        
    });
    spellEnemy.appendChild(dmgButton);

});

function clickCounter (count, name, min, max) {
    return ()=>  {
        if (count > 0) { 
        count--;
        return `${name} (${min}-${max}) - ${count}`;}
        else {
            return `STOP`;
        }
    };
}

function generateLog(spell, firstPerson, secondPerson, dmg) {
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
    return logs[randomizeDmg(logs.length)-1];
}