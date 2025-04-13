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
    */
}
  
function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
    const result = hasPlayerWonTheRound(userOption, computerResult);
    if(result){
        playerScore += 1;
        return "Player wins! " + userOption + " beats " + computerResult;
    }else{
        computerScore += 1;
        return "Computer wins! " + computerResult + " beats " + userOption;
    }
    /**
     * original answer
     * 
     * if (hasPlayerWonTheRound(userOption, computerResult)) {
            playerScore++;
            return `Player wins! ${userOption} beats ${computerResult}`;
        } else if (computerResult === userOption) {
            return `It's a tie! Both chose ${userOption}`;
        } else {
            computerScore++;
            return `Computer wins! ${computerResult} beats ${userOption}`;
        }
     */
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");


function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;

    /**
     * original answer
     */
    if (playerScore === 3 || computerScore === 3) {
        winnerMsgElement.innerText = `${
        playerScore === 3 ? "Player" : "Computer"
        } has won the game!`;

        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";
    }
     
};

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
    winnerMsgElement.innerText = "";
    roundResultsMsg.innerText = "";
};

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});