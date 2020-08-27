const btnFight= document.querySelector('#btn-kick'), 
      btnParent = document.querySelector('.control'),
      fightLog = document.querySelector('#logs'),
      paragrathLog = document.createElement('p');


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
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, ударил в предплечье врага.на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`,
        `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} приложил прямой удар коленом в пах на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`,
        `${firstPerson.name} забылся, но в это время ${secondPerson.name},неслышно подойдя сзади, ударил на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`,
        `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} нанес мощнейший удар на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`,
        `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} раздробил кулаком \<вырезанно цензурой\> противника на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`,
        `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`,
        `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`,
        `${firstPerson.name} пошатнулся, и  ${secondPerson.name} беспричинно ударил в ногу противника на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`,
        `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} влепил  в живот соперника на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`,
        `${firstPerson.name} пытался что-то сказать, но ${secondPerson.name} разбил бровь сопернику на ${dmg} урона, оставив [${secondPerson.hp.current}|${secondPerson.hp.total}]`
    ];
    return logs[randomizeDmg(logs.length)-1];
}
btnFight.addEventListener('click', ()=>{
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
