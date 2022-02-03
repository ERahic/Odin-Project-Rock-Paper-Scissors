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

const playerScoreAdd = document.querySelector('.player-points');
const computerScoreAdd = document.querySelector('.computer-points');

/* RESULTS FOR THE ROUND */
let result = ''
const endResult = document.querySelector('.result');



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
        endResult.innerHTML = "It's a tie!";
    } else if ((playerSelection === "ROCK" && computerSelection === "PAPER")
        || (playerSelection === "PAPER" && computerSelection === "SCISSORS")
        || (playerSelection === "SCISSORS" && computerSelection === "ROCK")) {
            endResult.innerHTML = "You Lose! " + computerSelection + " beats " + playerSelection
            computerScoreAdd.innerHTML++
        } else {
            endResult.innerHTML = "You Win! " + playerSelection + " beats " + computerSelection
            playerScoreAdd.innerHTML++
        }
}

/* Make your function's playerSelection parameter case-insensitive (so users can input rock, ROCK, or RocK or any other variation) */
/* You want to return the result of this funciton call, not console.log() them.  */
/* Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. */