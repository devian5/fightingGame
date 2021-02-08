let select = {
    playerCollection(fighter) {
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
                    <div><img class="teamStyle" src="img/${p1.nick}.gif"></div>
                    <div><img class="teamStyle" src="img/${p2.nick}.gif"></div>
                    <div><img class="teamStyle" src="img/${p3.nick}.gif"></div>
                `;
                showTeamB.innerHTML = `
                    <div><img class="teamStyle" src="img/${p4.nick}.gif"></div> 
                    <div><img class="teamStyle" src="img/${p5.nick}.gif"></div> 
                    <div><img class="teamStyle" src="img/${p6.nick}.gif"></div>
                    `;
               
                resolveIn(2000).then(delay => {
                    
                    screenChange('screen1', 'screen2');
                    
                });
            };  
        };
    
    }
}