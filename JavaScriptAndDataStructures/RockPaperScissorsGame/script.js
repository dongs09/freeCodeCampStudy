function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const option = options[Math.floor(Math.random() * options.length)];
    return option;
}
let playerScore = 0;
let computerScore = 0;


function hasPlayerWonTheRound(player, computer) {
    let result;
    if(player === "Rock"){
        if(computer === "Scissors"){
            result = true;
        }else{
            result = false;
        }
    }else if(player === "Scissors"){
        if(computer === "Paper"){
            result = true;
        }else{
            result = false;
        }
    }else{
        if(computer === "Rock"){
            result = true;
        }else{
            result = false;
        }
    }
    return result;
    /**
     * original answer
     * 
     * return (
            (player === "Rock" && computer === "Scissors") ||
            (player === "Scissors" && computer === "Paper") ||
            (player === "Paper" && computer === "Rock")
        );
    * 
    */
}
  
  console.log(hasPlayerWonTheRound("Rock", "Scissors")); 
  console.log(hasPlayerWonTheRound("Scissors", "Rock")); 