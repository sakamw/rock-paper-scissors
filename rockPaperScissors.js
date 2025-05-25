// Declaring variables
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const computerChoiceEmoji = document.getElementById("computer-choice-emoji");
const playerChoiceEmoji = document.getElementById("player-choice-emoji");
const winnerAnnouncement = document.getElementById("winner-announce");
const scoreboard = document.getElementById("scoreboard");

let computerScore = 0;
let playerScore = 0;

// Updating the scoreboard
function updateScore(winner) {
  if (winner === "player") {
    playerScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
  scoreboard.textContent = `computer ${computerScore} ${playerScore} player`;
}

// Generating computers choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = choices[Math.floor(Math.random() * choices.length)];

  if (random === "rock") {
    computerChoiceEmoji.textContent = "✊";
  } else if (random === "paper") {
    computerChoiceEmoji.textContent = "✋";
  } else {
    computerChoiceEmoji.textContent = "✌️";
  }
  return random;
}

// Playing the game
function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  playerChoiceEmoji.textContent =
    playerChoice === "rock" ? "✊" : playerChoice === "paper" ? "✋" : "✌️";

  if (playerChoice === computerChoice) {
    winnerAnnouncement.textContent = "draw";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    winnerAnnouncement.textContent = "player wins";
    updateScore("player");
  } else {
    winnerAnnouncement.textContent = "computer wins";
    updateScore("computer");
  }
}

// Event Listener
rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));

// Personal research Disabling right-clicking
// document.addEventListener("contextmenu", function (e) {
//   e.preventDefault();
// });
