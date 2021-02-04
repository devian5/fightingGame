class Fighter{
    constructor(nick,health,strength,defense,agility,luck){
        this.nick = nick;
        this.health = health;
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


let player1 = new Fighter('pikachu',200,120,100,150,8)
let player2 = new Fighter('mario',200,100,120,150,9)
let player3 = new Fighter('sonic',200,150,90,200,7)
let player4 = new Fighter('wario',200,170,170,120,7)
let player5 = new Fighter('browser',200,180,180,100,4)
let player6 = new Fighter('link',200,180,150,180,8)


let p1 = '';
let p2 = '';
let p3 = '';
let p4 = '';
let p5 = '';
let p6 = '';

let allPlayers = {
    'pikachu': player1,
    'mario': player2,
    'sonic': player3,
    'wario': player4,
    'browser': player5,
    'link': player6
};


let teamA = [];
let teamB = [];

        
let selectFighter = (fighter) => {

    if(teamA.length < 3){
        teamA.push(allPlayers[fighter])
        let elementA = document.getElementById(fighter);
        elementA.classList.add('playerA');
        if(teamA.length == 3){
            for(let i = 0; i < teamA.length; i++){
                document.getElementById(teamA[i])
            };
        };
        document.getElementById(fighter).onclick = ''; 
    }else if(teamB.length < 3){
        //lo introducimos en la B
        teamB.push(allPlayers[fighter])

        let elementB = document.getElementById(fighter)
        elementB.classList.add('playerB');
        document.getElementById(fighter).onclick = ''; 

        if(teamB.length == 3){
            let showTeamA = document.getElementById('squadA');
            let showTeamB = document.getElementById('squadB');
        
            showTeamA.innerHTML = `
                <div><img class="pepeStile" src="img/${teamA[0].nick}.gif"></div>
                <div><img class="pepeStile" src="img/${teamA[1].nick}.gif"></div>
                <div><img class="pepeStile" src="img/${teamA[2].nick}.gif"></div>
            `;
            showTeamB.innerHTML = `
                <div><img class="pepeStile" src="img/${teamB[0].nick}.gif"></div> 
                <div><img class="pepeStile" src="img/${teamB[1].nick}.gif"></div> 
                <div><img class="pepeStile" src="img/${teamB[2].nick}.gif"></div>
                `;
           
            resolveIn(2000).then(delay => {
                
                screenChange('screen1', 'screen2');
                
            });
            console.log(showTeamA.innerHTML)
        }

        
    }
}

const resolveIn = delay =>
new Promise(res => setTimeout(() => res(delay), delay));

let screenChange = (present,future) =>{
    let screenPresent = document.getElementById(present);
    let screenFuture = document.getElementById(future);

    screenPresent.style.display = 'none';
    screenFuture.style.display = 'block'
}



let hit = () => {
    let turn = Math.floor(Math.random() * 2);
    let special = Math.floor(Math.random() * 5);

    console.log(teamA[0])
    console.log('IEEEEEEEEEEEEE')
    
    if(turn == 0){
        if(special == 3){
            console.log('AL ATAAAAQUEEEE!')
            teamA[0].nick.specialAttack(teamB[0].nick);
        }else{
            console.log('ATAQUE xD')
            teamA[0].nick.attack(teamB[0].nick);
        }
    }else{
        if(special == 3){
            teamB[0].nick.specialAttack(teamA[0].nick);
        }else{
            teamB[0].nick.attack(teamA[0].nick);
        }

    }

    console.log(teamA[0].nick, teamA[0].health);
    console.log(teamB[0].nick, teamB[0].health);

}