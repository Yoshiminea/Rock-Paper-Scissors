humanScore = 0;
computerScore = 0;
numberOfRounds = 0;
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Test getComputerChoice
// console.log(getComputerChoice());
function getHumanChoice() {
  let choice = prompt("Please enter rock, paper, or scissors:").toLowerCase();
  while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    choice = prompt(
      "Invalid choice. Please enter rock, paper, or scissors:"
    ).toLowerCase();
  }
  return choice;
}

// Test getHumanChoice
// console.log(getHumanChoice());
// let humanScore = 0;
// let computerScore = 0;
function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  if (numberOfRounds > 4) {
    console.log("humanScore" + humanScore);
    console.log("computerScore" + computerScore);
    if (humanScore > computerScore) {
      console.log("You won the game!");
      displayWinner();
    } else if (computerScore > humanScore) {
      console.log("Computer won the game!");
      displayWinner();
    } else {
      console.log("The game is a tie!");
      displayWinner();
    }

    numberOfRounds = 0;
    computerScore = 0;
    humanScore = 0;
  } else {
    numberOfRounds++;
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
      updateScoreDisplay();
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
      updateScoreDisplay();
    }
  }
}

//configure buttons
let btnR = document.querySelector("#btnR");
let btnP = document.querySelector("#btnP");
let btnS = document.querySelector("#btnS");

btnR.addEventListener("click", () => {
  const humanSelection = "rock";
  playRound(humanSelection);
});
btnP.addEventListener("click", () => {
  const humanSelection = "paper";
  playRound(humanSelection);
});
btnS.addEventListener("click", () => {
  const humanSelection = "scissors";
  playRound(humanSelection);
});

//configure scoreboards
let humanScoreDisplay = document.querySelector("#humanScoreDisplay");
let computerScoreDisplay = document.querySelector("#computerScoreDisplay");
let displayContainer = document.querySelector("#displayContainer");
function updateScoreDisplay() {
  humanScoreDisplay.textContent = computerScore.toString();
  computerScoreDisplay.textContent = humanScore.toString();
}
function displayWinner() {
  let displayWinner = document.createElement("div");
  if (computerScore > humanScore) {
    displayWinner.textContent = "YOU LOST";
  } else if (computerScore < humanScore) {
    displayWinner.textContent = "YOU WON";
  }
  displayContainer.appendChild(displayWinner);
}
// // Start the game
// playGame();

// User choose hand
// compare with the computer hand
// store the score

// store the round
// if round > 5 exit
// set score and round to 0
