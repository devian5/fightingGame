class Fighter{
    constructor(nick,health,strength,defense,agility,luck){
        this.nick = nick;
        this.health = health;
        this.strength = strength;
        this.defense = defense;
        this.agility = agility;
        this.luck = luck ;
    }

    attack(rival){
        const getRandomArbitrary = (min, max) => {
            return Math.floor(Math.random()) * (max - min) + min;
          }
    
        let fluke = getRandomArbitrary(1,rival.luck);
        rival.health -= (this.strength - this.defense/1.5) * fluke;
    }

    specialAttack(rival){
        rival.health -= (this.strength + this.agility) - this.defense; 

    }

}

// nick,health,strength,defense,agility,luck

let player1 = new Fighter('pikachu',200,20,10,50,3)
let player2 = new Fighter('mario',200,15,12,50,3)
let player3 = new Fighter('sonic',200,25,10,60,2)
let player4 = new Fighter('wario',200,35,50,20,2)
let player5 = new Fighter('browser',200,40,60,15,2)
let player6 = new Fighter('link',200,40,50,50,3)


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

        teamA.push(allPlayers[fighter]);

        let elementA = document.getElementById(fighter);
        elementA.classList.add('playerA');

        team1Assignment();

        document.getElementById(fighter).onclick = ''; 

    }else if(teamB.length < 3){
        //lo introducimos en la B
        teamB.push(allPlayers[fighter]);

        let elementB = document.getElementById(fighter);
        elementB.classList.add('playerB');

        document.getElementById(fighter).onclick = '';

        team2Assignment(); 

        if(teamB.length == 3){
            let showTeamA = document.getElementById('squadA');
            let showTeamB = document.getElementById('squadB');
        
            showTeamA.innerHTML = `
                <div><img class="pepeStyle" src="img/${teamA[0].nick}.gif"></div>
                <div><img class="pepeStyle" src="img/${teamA[1].nick}.gif"></div>
                <div><img class="pepeStyle" src="img/${teamA[2].nick}.gif"></div>
            `;
            showTeamB.innerHTML = `
                <div><img class="pepeStyle" src="img/${teamB[0].nick}.gif"></div> 
                <div><img class="pepeStyle" src="img/${teamB[1].nick}.gif"></div> 
                <div><img class="pepeStyle" src="img/${teamB[2].nick}.gif"></div>
                `;
           
            resolveIn(2000).then(delay => {
                
                screenChange('screen1', 'screen2');
                
            });
        };

    };
    // console.log(p1,p2,p3,p4,p5,p6)  
};


let team1Assignment = () =>{
    for(let i = 0; i< teamA.length; i++){
        p1 = teamA[0];
        p2 = teamA[1];
        p3 = teamA[2];
    };
};
let team2Assignment = () =>{
    for(let i = 0; i< teamB.length; i++){
        p4 = teamB[0];
        p5 = teamB[1];
        p6 = teamB[2];
    };
};


const resolveIn = delay =>
new Promise(res => setTimeout(() => res(delay), delay));

let screenChange = (present,future) =>{
    let screenPresent = document.getElementById(present);
    let screenFuture = document.getElementById(future);

    screenPresent.style.display = 'none';
    screenFuture.style.display = 'block'
}


let hit = () => {
    let turn = Math.floor(Math.random() * 3);
    let special = Math.floor(Math.random() * 2);
    let healthPlayer1 = document.getElementById("healthPlayer1");
    let healthPlayer2 = document.getElementById("healthPlayer2");

    if(turn == 0){
        if(special == 3){
            console.log('ATAAAAQUEEEE!')
            p1.specialAttack(p4);
            p2.specialAttack(p5);
            p3.specialAttack(p6);
            healthPlayer1.value = `${p1.health}`  
            healthPlayer2.value = `${p1.health}`  
            healthPlayer3.value = `${p1.health}`  

        }else{
            
            console.log('SPECIAL')
            p1.attack(p4);
            p2.attack(p5);
            p3.attack(p6);
            healthPlayer1.value = `${p1.health}`  
            healthPlayer2.value = `${p1.health}`  
            healthPlayer3.value = `${p1.health}`  
        }
    }else{
        if(special == 3){
            p4.specialAttack(p1);
            p5.specialAttack(p2);
            p6.specialAttack(p3);
            healthPlayer4.value = `${p1.health}`  
            healthPlayer5.value = `${p1.health}`  
            healthPlayer6.value = `${p1.health}`  
            
        }else{
            p4.attack(p1);
            p5.attack(p2);
            p6.attack(p3);
            healthPlayer4.value = `${p1.health}`  
            healthPlayer5.value = `${p1.health}`  
            healthPlayer6.value = `${p1.health}`  
        }

    }
    console.log('VIDA Player1', healthPlayer1)  
    console.log('VIDA Player2', healthPlayer2)  
    console.log('VIDA Player3', healthPlayer3)  
    console.log('VIDA Player4', healthPlayer4)  
    console.log('VIDA Player5', healthPlayer5)  
    console.log('VIDA Player6', healthPlayer6)  

    console.log('PRIMERA',p1.nick, ':', Math.floor(p1.health));
    console.log('<------------------------------------->')
    console.log('SEGUNDA',p2.nick, ':', Math.floor(p2.health));
    // console.log('<------------------------------------->')
    // console.log('TERCERA',p3.nick, ':', Math.floor(p3.health));
    // console.log('<------------------------------------->')
    // console.log('CUERTA',p4.nick, ':', Math.floor(p4.health));
    // console.log('<------------------------------------->')
    // console.log('QUINTA',p5.nick, ':', Math.floor(p5.health));
    // console.log('<------------------------------------->')
    // console.log('SEXTA',p6.nick, ':', Math.floor(p6.health));
    // console.log('SIGUIENTE RONDA')

}

