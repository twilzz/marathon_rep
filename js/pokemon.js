class Selectors {
    constructor(name){
        this.pokeName = document.querySelector(`#name-${name}`);
        this.elementHP = document.querySelector(`#health-${name}`);
        this.healthBlock = document.querySelector(`#progressbar-${name}`);
        this.pokeImg = document.querySelector(`#img-${name}`);
        this.btns = document.querySelectorAll(`.spell_${name} button`);
    }
}

export class Pokemon extends Selectors {
    constructor({img, name, hp, type, selector, attacks, id}) {
        super(selector);
        this.img = img;
        this.name = name;
        this.hp = {
            current: hp,
            total: hp
        };
        this.type = type;
        this.id = id;
        this.isDead = false;
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
        let classAdd = ((this.hp.current/this.hp.total)*100);
        if (classAdd === 100) {
            this.healthBlock.classList.remove('critical','low');
        } else if (classAdd < 60 && classAdd > 20) {
            this.healthBlock.classList.add('low');
        } else if (classAdd < 20){
            this.healthBlock.classList.add('critical');
        }
        this.elementHP.innerText = `${this.hp.current} / ${this.hp.total}`;
        this.healthBlock.style.width = classAdd +'%';
        
    }

    kickAss = (dmg, playerLog, isDead) => {
        this.hp.current -= dmg;
        if (this.hp.current <=0) {
            this.hp.current = 0;
            this.isDead = true;
            alert(`${this.name} Проиграл`);
            const btns = document.querySelectorAll('.button');
            btns.forEach(item => {
                item.remove();
            });
            }
        this.renderHP();
        playerLog(dmg);
        if (this.isDead === true){
            return this.isDead;
        }
        
    }

    changeName = () => {
        this.pokeName.innerText = this.name;
    }

    changeImg = () => {
        this.pokeImg.src = this.img;
    }

}