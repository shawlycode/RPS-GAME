const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const displayResults = document.getElementById("results");
const roundsDisplay = document.getElementById("scores");
const playerSelection = document.querySelectorAll("button");
let selection;
let computerSelection;
let ties = 0;
let playerScore = 0;
let computerScore = 0;
let round = 1;
playerSelection.forEach((playerSelection) =>
  playerSelection.addEventListener("click", (e) => {
    selection = e.target.id;
    playerChoiceDisplay.innerHTML = selection;
    getComputerChoice();
    playRound();
  })
);

//rounds function
let rounds = 0;
const numberOfRounds = document.getElementById("button");
function getRounds() {
  rounds++;
  roundsDisplay.innerHTML = rounds;
  if (rounds == 5) {
    alert("YOU HAVE 1 ROUND LEFT TO PLAY");
  }
}

//getting score points
const computerPoints = document.getElementById("computer-score");
const playerPoints = document.getElementById("player-score");
const drawPoints = document.getElementById("tie-score");

computerPoints.innerHTML = computerScore;
playerPoints.innerHTML = playerScore;
drawPoints.innerHTML = ties;
function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice === 0) {
    computerSelection = "rock";
  }
  if (randomChoice === 1) {
    computerSelection = "paper";
  }
  if (randomChoice === 2) {
    computerSelection = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerSelection;
}

for (let i = 0; i < 5; i++) {
  function playRound() {
    if (selection === computerSelection) {
      results = "its a draw game";
      ties++;
    }
    if (selection == "paper" && computerSelection == "rock") {
      results = "You Won!! : paper beats rock";
      playerScore++;
    }
    if (selection == "scissors" && computerSelection == "rock") {
      computerScore++;
      results = "Computer Won!! : rock beats scissors";
    }
    if (selection == "scissors" && computerSelection == "paper") {
      playerScore++;
      results = "You Won!! : scissors cuts paper";
    }
    if (selection == "rock" && computerSelection == "paper") {
      computerScore++;
      results = "Computer Won!! : paper beats rock";
    }
    if (selection == "scissors" && computerSelection == "rock") {
      computerScore++;
      results = "Computer Won!! : rock beats scissors";
    }
    if (selection == "paper" && computerSelection == "scissors") {
      computerScore++;
      results = "Computer Won!! :scissors cuts paper";
    }
    displayResults.innerHTML = results;
  }
}
//styles for buttons
document
  .getElementById("rock")
  .setAttribute(
    "style",
    "font-size: 30px; color:#ff567; background-color:black;border:none;padding:15px;cursor:pointer;color:#fff;width:180px;border-radius:20px"
  );
document
  .getElementById("paper")
  .setAttribute(
    "style",
    "font-size: 30px; color:#ff567; background-color:tomato;border:none;padding:15px;cursor:pointer;color:#000 ;width:180px;border-radius:20px"
  );
document
  .getElementById("scissors")
  .setAttribute(
    "style",
    "font-size: 30px; color:#ff567; background-color:blue;border:none;padding:15px;cursor:pointer;color:#fff;width:180px;border-radius:20px"
  );
