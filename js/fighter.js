class Fighter{
    constructor(nick,health,strength,defense,agility,luck){
        this.health = health;
        this.nick = nick;
        this.strength = strength;
        this.defense = defense;
        this.agility = agility;
        this.luck = luck;
    }

    attack(rival){
        rival.health -= (this.strength - this.defense) * this.fluke() * this.dexterity();
        console.log(rival.health)
    }

    specialAttack(rival){
        rival.health -= (this.strength * 0.2) - this.defense; 

    }

    fluke(player){
        this.random(2,player.luck)
    }

    dexterity(player){
        this.random(5, player.agility)
    }

    

    random(){
        return Math.floor(Math.random() * (max - min) + 1);
    }

}

export default Fighter


// nick,health,strength,defense,agility,luck

let player1 = new Fighter('pikachu',200,120,100,150,8)
let player2 = new Fighter('mario',150,100,120,150,9)
let player3 = new Fighter('sonic',150,150,90,200,7)
let player4 = new Fighter('wario',140,170,170,120,7)
let player5 = new Fighter('browser',150,180,180,100,4)
let player6 = new Fighter('link',150,180,150,180,8)

let p1 = '';
let p2 = '';
let p3 = '';
let p4 = '';
let p5 = '';
let p6 = '';