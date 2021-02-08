let winsTeam = {

    winningTeamA() {
        messageTeamA = document.getElementById('messageA');
        winnerTeamA = document.getElementById('winnerTeamA')
        messageTeamA.innerHTML = `The teamA wins!!`
        
        winnerTeamA.innerHTML = `
        <div><img class="teamStyle" src="img/${p1.nick}.gif"></div>
        <div><img class="teamStyle" src="img/${p2.nick}.gif"></div>
        <div><img class="teamStyle" src="img/${p3.nick}.gif"></div>
        `;
        console.log(winnerTeamA.innerHTML)
        resolveIn(2000).then(delay => {
            
            screenChange('screen2', 'screen3');  
        });
        
        },

    winningTeamB() {
        messageTeamB = document.getElementById('messageB');
        messageTeamB.innerHTML = `The teamB wins!!`
        winnerTeamB = document.getElementById('winnerTeamB')

        winnerTeamB.innerHTML = `
        <div><img class="teamStyle" src="img/${p4.nick}.gif"></div> 
        <div><img class="teamStyle" src="img/${p5.nick}.gif"></div> 
        <div><img class="teamStyle" src="img/${p6.nick}.gif"></div>
        `;
        console.log(winnerTeamB.innerHTML)
        resolveIn(2000).then(delay => {
                
            screenChange('screen2', 'screen3');  
        });
    
    }
        
}