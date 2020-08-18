const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;
let result;
let playerWins = true;
let computerWins = true;
let gameResults = [];

// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function computerPlay() {
  //choose from either rock paper or scissors
  const options = ["rock", "paper", "scissors"];
  computerChoice = options[Math.floor(Math.random() * options.length)];
  //return the computers choice
  return computerChoice;
}

function playerSelection() {
  playerChoice = prompt("Choose Rock, Paper, or Scissors. 5 rounds.");
  playerChoice = playerChoice.toLowerCase();
  //check that a valid choice was made and if it's good return the choice, else alert to make a valid choice
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return playerChoice;
  } else {
    alert("No cheating! You need to select Rock, Paper, or Scissors!");
  }
}

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
function playRound(computerChoice, playerChoice) {
  // Take both values and compare, declare the winner and print a string
  if (computerChoice == "rock" && playerChoice == "rock") {
    result = "It's a draw!";
    computerWins = false;
    playerWins = false;
  } else if (computerChoice == "rock" && playerChoice == "paper") {
    result = "Paper covers rock, you win!";
    playerWins = true;
    computerWins = false;
  } else if (computerChoice == "rock" && playerChoice == "scissors") {
    result = "Rock beats scissors, You lose!";
    computerWins = true;
    playerWins = false;
  } else if (computerChoice == "paper" && playerChoice == "rock") {
    result = "Paper covers Rock, You lose!";
    computerWins = true;
    playerWins = false;
  } else if (computerChoice == "paper" && playerChoice == "paper") {
    result = "Both chose paper! It's a draw!";
    computerWins = false;
    playerWins = false;
  } else if (computerChoice == "paper" && playerChoice == "scissors") {
    result = "Scissors cuts paper, You win!";
    playerWins = true;
    computerWins = false;
  } else if (computerChoice == "scissors" && playerChoice == "rock") {
    result = "rock beats scissors, you win!";
    playerWins = true;
    computerWins = false;
  } else if (computerChoice == "scissors" && playerChoice == "paper") {
    result = "Scissors cuts paper, You lose!";
    computerWins = true;
    playerWins = false;
  } else if (computerChoice == "scissors" && playerChoice == "scissors") {
    result = "It's a draw!";
    computerWins = false;
    playerWins = false;
  }
  return result;
}

// Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
function game() {
  //loop 5 rounds
  for (let i = 0; i < 5; i++) {
    playerSelection();
    computerPlay();
    playRound(computerChoice, playerChoice);
    gameResults.push(result);
    if (playerWins) {
      playerScore++;
    } else if (computerWins) {
      computerScore++;
    }
  }
  console.log(gameResults);
  console.log(playerScore);
  console.log(computerScore);
}

function whoWon(playerScore, computerScore) {
  if (playerScore > computerScore) {
    console.log(
      "You WON! you scored " +
        playerScore +
        " points! The computer scored " +
        computerScore +
        " points."
    );
  } else if (playerScore < computerScore) {
    console.log(
      "You LOST! you scored " +
        playerScore +
        " points! The computer scored " +
        computerScore +
        " points."
    );
  } else {
    console.log("It's a draw! You each scored " + playerScore + " points!");
  }
}
game();
whoWon(playerScore, computerScore);
