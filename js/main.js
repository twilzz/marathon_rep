import { Pokemon } from './pokemon.js';
import { randomizeNum, randomizeDmg, generateLog } from './utils.js';
// import { pokemons } from './pokemons.js';

const btnParent = document.querySelector('.control'),
      fightLog = document.querySelector('#logs'),
      paragrathLog = document.createElement('p'),
      spellChar = document.querySelector('.spell_player1'),
      spellEnemy = document.querySelector('.spell_player2'),
      chooseFighter = document.querySelector('#choose-poke'),
      chooseFighterPar = document.querySelector('#choose-poke-dis');
let player1, player2;
const btn = document.querySelector('.button');

class Game {
    getPokemons = async function ()  {
        const response = await fetch('https://reactmarathon-api.netlify.app/api/pokemons');
        const answer = await response.json();
        return answer;
    }
    getPlayer2 = async function () {
        const response = await fetch('https://reactmarathon-api.netlify.app/api/pokemons?random=true');
        const answer = await response.json();
        return answer;
    }
    getDamage = async function (id1,spell1,id2) {
        let netDmg = await fetch(`https://reactmarathon-api.netlify.app/api/fight?player1id=${id1}&attackId=${spell1}&player2id=${id2}`);
        let dmgResult = await netDmg.json();
        return dmgResult.kick;
    }

    generateButtons =  function () {
        player1.attacks.forEach((item,index) => {
            const count = clickCounter(item.maxCount, item.name);
            let dmgButton = document.createElement('button');
            dmgButton.classList.add('button');
            dmgButton.innerText = `${item.name} - ${item.maxCount}`;
            dmgButton.addEventListener('click', async ()=> {
            const  dmgResult = await this.getDamage(player1.id,index,player2.id);
            console.log(dmgResult);
            const dmg = dmgResult.player1;
            const dmg2 = dmgResult.player2;
            player1.kickAss(dmg2, (dmg2) =>{
                paragrathLog.innerText = generateLog(item.name,player1,player2,dmg2);
                fightLog.append(paragrathLog);
            });
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
                        restartTrigger(1);}
                 }
                
            });
            btnParent.appendChild(dmgButton);
        
        });
        
    }
    start = async function ()  {
        const pokemons = await this.getPokemons();
        const enemy = await this.getPlayer2();
        pokemons.map((item, id) => {
            let pokePic = document.createElement('div');
            pokePic.classList.add('cfighter');
            pokePic.innerHTML = `<img src=${item.img}>`;
            pokePic.addEventListener('click', ()=> {
                player1 = new Pokemon ({
                    ...pokemons[id],
                    selector: 'player1'
                });
            chooseFighter.style = 'display: none;';
            chooseFighterPar.style = 'display: none;';
            player2 = new Pokemon ({
                ...enemy,
                selector: 'player2'});
            this.generateButtons();
            });
            chooseFighter.appendChild(pokePic);
        });
     
    }
    restart = async function (a) {
        const enemy = await this.getPlayer2();
        player2 = new Pokemon ({
            ...enemy,
            selector: 'player2'});
        console.log(player2);
        this.generateButtons();
        }
   
}

function clickCounter (count, name, min, max) {
    return ()=>  {
        if (count > 0) { 
        count--;
        return `${name} - ${count}`;}
        else {
            return `STOP`;
        }
    };
}

function restartTrigger(a) {
            let restartButton = document.createElement('button');
            restartButton.classList.add('button');
            restartButton.innerText = `Выбрать нового противника`;
            restartButton.addEventListener('click', () => {
                if (a = 1) {
                game.restart(a);
                const btn = document.querySelector('.button');
                btn.remove();
                } else {
                game.start();
                const btn = document.querySelector('.button');
                btn.remove();
                }
                
                
            });
            btnParent.appendChild(restartButton);
}

const game = new Game();
game.start();



