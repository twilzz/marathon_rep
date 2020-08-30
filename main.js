const btnFight= document.querySelector('#btn-kick'), 
      btnParent = document.querySelector('.control'),
      fightLog = document.querySelector('#logs'),
      paragrathLog = document.createElement('p'),
      spellChar = document.querySelector('.spell_char'),
      spellEnemy = document.querySelector('.spell_enemy');

let countChar = clickCounter(6);
let countEnem = clickCounter(6);

spellChar.addEventListener('click', () => {
    let a = countChar();
    if (a === 0) {
        spellChar.innerText = 0;
        spellChar.disabled = true;
        paragrathLog.innerText = `${character.name} исчерпал свои удары`;
        fightLog.append(paragrathLog);
        } else {
        enemy.kickAss(randomizeDmg(20));
        spellChar.innerText = a;
           }
});

spellEnemy.addEventListener('click', () => {
    let b = countEnem();
    if (b === 0) {
        spellEnemy.innerText = 0;
        spellEnemy.disabled = true;
        paragrathLog.innerText = `${enemy.name} исчерпал свои удары`;
        fightLog.append(paragrathLog);
        } else {
        character.kickAss(randomizeDmg(20));
        spellEnemy.innerText = b;
           }
});
function clickCounter (b) {
    let local = b;
    return ()=>  {
        if (local === 0) {
        return local;
    } else {
        return --local;}
}}

const character = {
    name: 'Pikachu',
    type: 'electric',
    weakness: ['fighting', 'water', 'some'],
    resistance: ['steel'],
    hp: {
        current: 100,
        total: 100
        },
    elementHP: document.querySelector('#health-character'),
    healthBlock: document.querySelector('#progressbar-character'),
    showHP: showHP,
    renderHP: renderHP,
    kickAss: kickAss
};

const enemy = {
    name: 'Charmander',
    type: 'fire',
    weakness: ['fighting', 'water', 'some'],
    resistance: ['steel'],
    hp: {
        current: 100,
        total: 100
        },
    elementHP: document.querySelector('#health-enemy'),
    healthBlock: document.querySelector('#progressbar-enemy'),
    showHP: showHP,
    renderHP: renderHP,
    kickAss: kickAss
};

function generateLog(firstPerson, secondPerson, dmg) {
    console.log(firstPerson, secondPerson, dmg);
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
btnFight.addEventListener('click', ()=>{
    btnFight.innerText = result();
    character.kickAss(randomizeDmg(20));
    enemy.kickAss(randomizeDmg(20));
});
function renderHP () {
    this.showHP();
}
function showHP(){
    const {elementHP, healthBlock, hp: {current, total}} = this;
    elementHP.innerText = `${current} / ${total}`;
    healthBlock.style.width = current+'%';
}
function kickAss (dmg){
    let { name, hp:{current} } = this;
    this.hp.current -= dmg;
    let log = this === character ? generateLog(enemy, this, dmg) : generateLog(character, this, dmg);
    if (current <=0) {
        current = 0;
        alert(`${name} Проиграл`);
        btnFight.disabled = true;
    }
    console.log(log);
    paragrathLog.innerText = log;
    fightLog.append(paragrathLog);
    this.renderHP();
}
function randomizeDmg (num) {
    return Math.floor(Math.random()*num);
}

