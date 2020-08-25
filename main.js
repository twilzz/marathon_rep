const btnFight= document.querySelector('#btn-kick'), 
      btnParent = document.querySelector('.control'),
      spell_char = document.querySelector('.spell_char'),
      spell_enemy = document.querySelector('.spell_enemy');


// spell_char.addEventListener('click', () => {
//     console.log('Lighting Bolt');
//     kickAss(randomizeDmg(20), enemy, character);
// });
// spell_enemy.addEventListener('click', ()=> {
//     console.log('Fire Ball');
//     kickAss(randomizeDmg(20), character, enemy);
// });
const character = {
    name: 'Pikachu',
    defaultHP: 100,
    demageHP: 100,
    showHP: showHP,
    kickAss: kickAss,
    elementHP: document.querySelector('#health-character'),
    healthBlock: document.querySelector('#progressbar-character')
};
const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    demageHP: 100,
    showHP: showHP,
    kickAss: kickAss,
    elementHP: document.querySelector('#health-enemy'),
    healthBlock: document.querySelector('#progressbar-enemy')
};
btnFight.addEventListener('click', ()=>{
    character.kickAss(enemy, randomizeDmg(20));
    enemy.kickAss(character, randomizeDmg(20));
});

function renderHP () {
    character.showHP();
    enemy.showHP();

}
function showHP(){
    this.elementHP.innerText = `${this.demageHP} / ${this.defaultHP}`;
    console.log(`${this.name}: ${this.elementHP.innerText}`);
    this.healthBlock.style.width = this.demageHP+'%';
}

function kickAss (target, dmg){
    if (target.demageHP < dmg) {
        target.demageHP = 0;
         alert(`${target.name} Проиграл`);
         btnFight.disabled = true;
    } else {
        target.demageHP -= dmg;
    }
    let fightLog = document.createElement('div');
    fightLog.innerText = `${this.name} наносит ${dmg} урона`;    
    btnParent.append(fightLog);
    console.log(`${this.name} наносит ${dmg} урона`);
    renderHP();
    }

function randomizeDmg (num) {
    return Math.floor(Math.random()*num);
}
