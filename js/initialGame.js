
let teamA = [];
let teamB = [];

let openingGame = {
    
    players(){
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
    },
    
    // startGame(){
        
    //     let initialHealthP1 = 200;
    //     let initialHealthP2 = 150;
    //     let initialHealthP3 = 150;
    //     let initialHealthP4 = 140;
    //     let initialHealthP5 = 150;
    //     let initialHealthP6 = 150;
        
    //     let initialHealthP1 = player1.health
        
    //     let p1 = '';
    //     let p2 = '';
    //     let p3 = '';
    //     let p4 = '';
    //     let p5 = '';
    //     let p6 = '';
        
    // },
    
    selectFighter(fighter){
        if(teamA.length < 3){
            teamA.push(fighter);
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
            teamB.push(fighter);
            let elementB = document.getElementById(fighter)
            elementB.classList.add('playerB');
            document.getElementById(fighter).onclick = ''; 
        }

        console.log('Esto es teamA', teamA);
        console.log('Esto es teamB', teamB);
    
    
    }

}


