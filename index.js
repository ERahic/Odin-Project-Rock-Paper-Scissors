/* Array which will let the computer choose which object to randomly pick */
const myArray = [
    "ROCK", 
    "PAPER", 
    "SCISSORS"];
    

/* variables for playerSelection */
const rockBTN = document.querySelector('.rock-button');
const paperBTN = document.querySelector('.paper-button');
const scissorsBTN = document.querySelector('.scissors-button');
let playerSelection = ''

/* Counting score for player and computer */

let playerScore = 0
let computerScore = 0

let playerScoreAdd = document.querySelector('.player-points');
let computerScoreAdd = document.querySelector('.computer-points');

/* RESULTS FOR THE ROUND */
const gameEnd = document.querySelector('.endGame');
const endResult = document.querySelector('.result');
let result = ''


    /* Function that allows the computer to randomly choose either rock, paper or scissors */
function computerPlay() {
    return myArray[Math.floor(Math.random()*myArray.length)]
}


/* Player gets to choose either rock, paper or scissors by pressing the buttons */

rockBTN.addEventListener("click", (e) => {
    playerSelection = "ROCK"
    console.log(playerSelection)
    playRound(playerSelection, computerPlay())
})

paperBTN.addEventListener("click", (e) => {
    playerSelection = "PAPER"
    console.log(playerSelection)
    playRound(playerSelection, computerPlay())
})

scissorsBTN.addEventListener("click", (e) => {
    playerSelection = 'SCISSORS'
    console.log(playerSelection)
    playRound(playerSelection, computerPlay())
})

/* Write a function that plays a single round of Rock Paper Scissors. The funciton should take two parameters - the playerSelection and computerSelection - 
and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock" */
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        endResult.textContent = "It's a tie!";
    } else if ((playerSelection === "ROCK" && computerSelection === "PAPER")
        || (playerSelection === "PAPER" && computerSelection === "SCISSORS")
        || (playerSelection === "SCISSORS" && computerSelection === "ROCK")) {
            endResult.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
            computerScoreAdd.innerHTML++;
            computerScore++;
            console.log("computer score " + computerScore);
        } else {
            endResult.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
            playerScoreAdd.innerHTML++;
            playerScore++;
            console.log("player score " + playerScore);
        } 
        game();
}

/* Make your function's playerSelection parameter case-insensitive (so users can input rock, ROCK, or RocK or any other variation) */
/* You want to return the result of this funciton call, not console.log() them.  */
/* Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. */

function game() {
    if (playerScore === 5) {
        gameEnd.textContent = 'Congrats! You won the game! Please press the button below for a rematch.'
        console.log('Working!')
        gameReset();
    } else if (computerScore === 5) {
        gameEnd.textContent = 'Better luck next time. You lost the game! Please press the button below for a rematch.'
        console.log('Working!')
        gameReset();
    }
}

function gameReset() {
    playerScore = 0;
    computerScore = 0;
    playerScoreAdd = 0;
    computerScoreAdd = 0;
}