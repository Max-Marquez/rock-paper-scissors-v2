const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let computerChoice;
let playerChoice = '';
let computerScore = 0;
let playerScore = 0;
let result;
let playerWins = true;
let computerWins = true;
let gameResults = [];
let rounds = 0;
const pPlayer = document.getElementById('playerScore');
const pComp = document.getElementById('computerScore');
const win = document.getElementById('winner')

// Update the scores in the DOM, each time the btn is clicked
function keepScore(playerScore, computerScore) {
      pPlayer.innerHTML = `Player ${playerScore} `;
      pComp.innerHTML = `${computerScore} Comp`;
      return;
    }



// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’ for the computer each round
function computerPlay() {
  //choose from either rock paper or scissors
  const options = ["rock", "paper", "scissors"];
  computerChoice = options[Math.floor(Math.random() * options.length)];
  return computerChoice;
}

// Add an event listener to all buttons that plays one round, updates the DOM scores, and checks to see if either player has won
const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
  buttons.forEach((button) => {
  // and for each one we add a 'click' listener that initializes playRound
  button.addEventListener('click', () => {
    // Get the computers choice for this round
    computerPlay();
    // assign player choice from what button was clicked
    playerChoice = button.id;
    playRound(computerChoice, playerChoice);
    console.log(computerChoice, playerChoice) ;
    console.log(result);
    console.log(computerScore, playerScore);
    keepScore(playerScore, computerScore);
    whoWon(playerScore, computerScore);
  })
});

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
function playRound(computerChoice, playerChoice) {
  // Take both values and compare, declare the round winner and print a string
  if (computerChoice == "rock" && playerChoice == "rock") {
    result = "It's a draw!";
  } else if (computerChoice == "rock" && playerChoice == "paper") {
    result = "Paper covers Rock, you win!";
    ++playerScore;
  } else if (computerChoice == "rock" && playerChoice == "scissors") {
    result = "Rock beats Scissors, You lose!";
    ++computerScore;
  } else if (computerChoice == "paper" && playerChoice == "rock") {
    result = "Paper covers Rock, You lose!";
    ++computerScore;
  } else if (computerChoice == "paper" && playerChoice == "paper") {
    result = "Both chose Paper! It's a draw!";
  } else if (computerChoice == "paper" && playerChoice == "scissors") {
    result = "Scissors cuts Paper, You win!";
    ++playerScore;
  } else if (computerChoice == "scissors" && playerChoice == "rock") {
    result = "Rock beats Scissors, you win!";
    ++playerScore;
  } else if (computerChoice == "scissors" && playerChoice == "paper") {
    result = "Scissors cuts Paper, You lose!";
    ++computerScore;
  } else if (computerChoice == "scissors" && playerChoice == "scissors") {
    result = "It's a draw!";
  }
    return document.getElementById('winner').innerHTML = result;
}

// Check if either player has won 5 rounds and has won the game, if so update the DOM to notify who won
function whoWon(playerScore, computerScore) {
  if (playerScore == 5) {
    win.innerHTML = `You WON the game!`
    win.classList.add('gameWin');
  } else if (computerScore == 5) {
    win.innerHTML = `You LOST the game!`
    win.classList.add('gameLose');
  }
  return;
}