const btn_1 = document.querySelector('#btn-kick'), 
      btn_parent = document.querySelector('.control'),
      spell_char = document.querySelector('.spell_char'),
      spell_enemy = document.querySelector('.spell_enemy')
let fightLog = document.createElement('div');

spell_char.addEventListener('click', () => {
    console.log('Lighting Bolt');
    kickAss(randomizeDmg(20), enemy, character);
});
spell_enemy.addEventListener('click', ()=> {
    console.log('Fire Ball');
    kickAss(randomizeDmg(20), character, enemy);
});
const character = {
    name: 'Pikachu',
    defaultHP: 100,
    demageHP: 100,
    elementHP: document.querySelector('#health-character'),
    healthBlock: document.querySelector('#progressbar-character')
};
const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    demageHP: 100,
    elementHP: document.querySelector('#health-enemy'),
    healthBlock: document.querySelector('#progressbar-enemy')
}
btn_1.addEventListener('click', ()=>{
    console.log('KickAss');
    kickAss(randomizeDmg(20), character);
    kickAss(randomizeDmg(20), enemy);
});
function renderHP (data) {
    showHPLife (data);
    showProgressbarHP (data);
};
function showHPLife (data) {
    data.elementHP.innerText = `${data.demageHP} / ${data.defaultHP}`;
};
function showProgressbarHP (data) {
    data.healthBlock.style.width = data.demageHP+'%';
};
function kickAss (dmg, target, dealer){
    if (target.demageHP < dmg) {
         target.demageHP = 0;
         alert(`${target.name} Проиграл`)
         btn_1.disabled = true;
    } else {
        target.demageHP -= dmg;
    };
    fightLog.innerHTML = `<p> ${dealer.name} hits ${dmg}</p>`
    btn_parent.append(fightLog);
    renderHP(target);
    };
function randomizeDmg (num) {
    return Math.floor(Math.random()*num);
}
