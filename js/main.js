import { Pokemon } from './pokemon.js';
import { randomizeNum, randomizeDmg, generateLog } from './utils.js';
import { pokemons } from './pokemons.js';

const btnFight= document.querySelector('#btn-kick'), 
      btnParent = document.querySelector('.control'),
      fightLog = document.querySelector('#logs'),
      paragrathLog = document.createElement('p'),
      spellChar = document.querySelector('.spell_player1'),
      spellEnemy = document.querySelector('.spell_player2');
let player1, player2;
      
function startGame(){
 player1 = new Pokemon ({
    ...pokemons[randomizeNum(pokemons.length)],
    selector: `player1`
});

 player2 = new Pokemon ({
    ...pokemons[randomizeNum(pokemons.length)],
    selector: `player2`
});
};
startGame();
generateButtons();
function generateButtons() {
player1.attacks.forEach((item,index) => {
    const count = clickCounter(item.maxCount, item.name, item.minDamage, item.maxDamage);
    let dmgButton = document.createElement('button');
    dmgButton.classList.add('button');
    dmgButton.innerText = `${item.name} (${item.minDamage}-${item.maxDamage}) - ${item.maxCount}`;
    dmgButton.addEventListener('click', ()=> {
        let dmg = randomizeDmg(item.minDamage, item.maxDamage);
        let a = count();
        if (a === 'STOP') {
            dmgButton.disabled = true;
            paragrathLog.innerText = `${player1.name} больше не может использовать ${item.name}`;
            fightLog.append(paragrathLog);
            } else {
                dmgButton.innerText = a;
                if (player2.kickAss(dmg, (dmg) =>{
                paragrathLog.innerText = generateLog(item.name,player1,player2,dmg);
                fightLog.append(paragrathLog);
            })) {
                console.log(`Меняем ${player2.name}`);
                restartTrigger(player2)}
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
        let dmg = randomizeDmg(item.minDamage, item.maxDamage);
        let a = count();
        if (a === 'STOP') {
            dmgButton.disabled = true;
            paragrathLog.innerText = `${player2.name} больше не может использовать ${item.name}`;
            fightLog.append(paragrathLog);
            } else {
                dmgButton.innerText = a;
                player1.kickAss(dmg, (dmg) =>{
                paragrathLog.innerText = generateLog(item.name,player2,player1,dmg);
                fightLog.append(paragrathLog);
            });
         }
        
    });
    spellEnemy.appendChild(dmgButton);

});
}

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



function restartTrigger(name) {
            let restartButton = document.createElement('button');
            restartButton.classList.add('button');
            restartButton.innerText = `Выбрать нового противника`;
            restartButton.addEventListener('click', () => {
                restartGame(name);
            });
            btnParent.appendChild(restartButton);
}

function restartGame(playerName) {
        player2 = new Pokemon ({
        ...pokemons[randomizeNum(pokemons.length)],
        selector: `player2`
    });
    const btn = document.querySelector('.button');
            btn.remove();
    generateButtons();
}