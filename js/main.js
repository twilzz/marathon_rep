import { Pokemon } from './pokemon.js';
import { randomizeDmg } from './randomize.js';
import { pokemons } from './pokemons.js';

const btnFight= document.querySelector('#btn-kick'), 
      btnParent = document.querySelector('.control'),
      fightLog = document.querySelector('#logs'),
      paragrathLog = document.createElement('p'),
      spellChar = document.querySelector('.spell_char'),
      spellEnemy = document.querySelector('.spell_enemy');


const player1 = new Pokemon ({
    ...pokemons[randomizeDmg(pokemons.length)],
    selector: `player1`
});

const player2 = new Pokemon ({
    ...pokemons[randomizeDmg(pokemons.length)],
    selector: `player2`
});

console.log(player1.name);
console.log(player2.name);

player1.attacks.forEach(item => {
    let dmgButton = document.createElement('button');
    dmgButton.classList.add('button');
    dmgButton.innerText = item.name;
    dmgButton.addEventListener('click', ()=> {
        console.log(item.name);
    });
    btnParent.appendChild(dmgButton);

});

player2.attacks.forEach(item => {
    let dmgButton = document.createElement('button');
    dmgButton.classList.add('button');
    dmgButton.innerText = item.name;
    dmgButton.addEventListener('click', ()=> {
        console.log(item.name);
    });
    btnParent.appendChild(dmgButton);

});








let countChar = clickCounter(6);
let countEnem = clickCounter(6);



function clickCounter (b) {
    let local = b;
    return ()=>  {
        if (local === 0) {
        return local;
    } else {
        return --local;}
}}


function generateLog(firstPerson, secondPerson, dmg) {
    const logs = [
        `${secondPerson.name} вспомнил что-то важное, но неожиданно ${firstPerson.name}, ударил в предплечье врага.на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`,
        `${secondPerson.name} поперхнулся, и за это ${firstPerson.name} приложил прямой удар коленом в пах на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`,
        `${secondPerson.name} забылся, но в это время ${firstPerson.name},неслышно подойдя сзади, ударил на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`,
        `${secondPerson.name} пришел в себя, но неожиданно ${firstPerson.name} нанес мощнейший удар на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`,
        `${secondPerson.name} поперхнулся, но в это время ${firstPerson.name} раздробил кулаком \<вырезанно цензурой\> противника на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`,
        `${secondPerson.name} удивился, а ${firstPerson.name} пошатнувшись влепил подлый удар на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`,
        `${secondPerson.name} высморкался, но неожиданно ${firstPerson.name} провел дробящий удар на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`,
        `${secondPerson.name} пошатнулся, и  ${firstPerson.name} беспричинно ударил в ногу противника на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`,
        `${secondPerson.name} расстроился, как вдруг, неожиданно ${firstPerson.name} влепил  в живот соперника на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`,
        `${secondPerson.name} пытался что-то сказать, но ${firstPerson.name} разбил бровь сопернику на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`
    ];
    return logs[randomizeDmg(logs.length)-1];
}












// spellChar.addEventListener('click', () => {
//     let a = countChar();
//     if (a === 0) {
//         spellChar.innerText = 0;
//         spellChar.disabled = true;
//         paragrathLog.innerText = `${player1.name} исчерпал свои удары`;
//         fightLog.append(paragrathLog);
//         } else {
//         player2.kickAss(randomizeDmg(20), (dmg) =>{
//             paragrathLog.innerText = generateLog(player1,player2,dmg);
//             fightLog.append(paragrathLog);
//         });
//         spellChar.innerText = a;
//            }
// });

// spellEnemy.addEventListener('click', () => {
//     let b = countEnem();
//     if (b === 0) {
//         spellEnemy.innerText = 0;
//         spellEnemy.disabled = true;
//         paragrathLog.innerText = `${player2.name} исчерпал свои удары`;
//         fightLog.append(paragrathLog);
//         } else {
//         player1.kickAss(randomizeDmg(20), (dmg) =>{
//             paragrathLog.innerText = generateLog(player2,player1,dmg);
//             fightLog.append(paragrathLog);
//         });
//         spellEnemy.innerText = b;
//            }
// });