let teamA = [];

let teamB = [];


let selectFighter = (fighter) => {

    if(teamA.length < 3){
        teamA.push(fighter);
        let elemntA = document.getElementById(fighter);
        elemntA.classList.add('playerA');
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
