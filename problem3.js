function  bestTeam( player1, player2 ) {

    if(typeof player1 != "object" || typeof player2 != "object" ){
        return 'Invalid';
    }

    const player1Total = player1.foul + player1.cardY + player1.cardR;    
    const player2Total = player2.foul + player2.cardY + player2.cardR;    

    
    if(player1Total < player2Total){
        return player1.name;
    } else if(player1Total > player2Total){
        return player2.name;
    } else {
        return 'Tie';
    }
    
}


console.log(
    bestTeam(
        { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
        { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
    )
)
