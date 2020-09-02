class Selectors {
    constructor(name){
        this.pokeName = document.querySelector(`#name-${name}`);
        this.elementHP = document.querySelector(`#health-${name}`);
        this.healthBlock = document.querySelector(`#progressbar-${name}`);
        this.pokeImg = document.querySelector(`#img-${name}`);
    }
}

export class Pokemon extends Selectors {
    constructor({img, name, hp, type, selector, attacks}) {
        super(selector);
        this.img = img;
        this.name = name;
        this.hp = {
            current: hp,
            total: hp
        };
        this.type = type;
        this.attacks = attacks;
        this.changeName();
        this.changeImg();
        this.renderHP();
        this.showHP();
    }

     renderHP = () => {
        this.showHP();
    }

     showHP = () => {
        this.elementHP.innerText = `${this.hp.current} / ${this.hp.total}`;
        this.healthBlock.style.width = this.hp.current+'%';
    }

    kickAss = (dmg, playerLog) => {
        this.hp.current -= dmg;
        // let log = this === character ? generateLog(enemy, this, dmg) : generateLog(character, this, dmg);
        if (this.hp.current <=0) {
            this.hp.current = 0;
            alert(`${name} Проиграл`);
            btnFight.disabled = true;
        }
        this.renderHP();
        playerLog(dmg);

    }

    changeName = () => {
        this.pokeName.innerText = this.name;
    }

    changeImg = () => {
        this.pokeImg.src = this.img;
    }

}