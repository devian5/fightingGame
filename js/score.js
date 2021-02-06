points = {

    score(){

        let scoreTeamA = 0;
        let scoreTeamB = 0;
    
        if(p1.health < 1){
            scoreTeamB += 1;
            console.log(scoreTeamB, 'gana 1 B');
        }else if(p4.health < 1){
            scoreTeamA += 1;
            console.log(scoreTeamA, 'gana 1 A');
        };
    
        if(p2.health < 1){
            scoreTeamB += 1;
            console.log(scoreTeamB, 'gana 1 B');
        }else if(p5.health < 1){
            scoreTeamA += 1;
            console.log(scoreTeamA, 'gana 1 A');
        };
    
        if(p3.health < 1){
            scoreTeamB += 1;
            console.log(scoreTeamB, 'gana 1 B');
        }else if(p6.health < 1){
            scoreTeamA += 1;
            console.log(scoreTeamA, 'gana 1 A');
        };
    
        if(scoreTeamA == 2){
            winsTeam.winningTeamA()
            
        }else if(scoreTeamB == 2){
            winsTeam.winningTeamB()
        }  
    }


}
