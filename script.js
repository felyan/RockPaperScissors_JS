// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **

function getComputerChoice() {
  let rpsChoices = ["Rock", "Paper", "Scissors"];
  let computerChoice = rpsChoices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **

function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost

  let score;

  // All situations where user draws, set `score` to 0
  if (playerChoice === computerChoice) {
    score = 0;
    // All situations where user wins, set 'score' to 1
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    score = 1;
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1;
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1;

    // Otherwise user loses (aka set score to -1)
  } else {
    score = -1;
  }

  // return score
  return score;
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log({ playerChoice });
  const computerChoice = getComputerChoice();
  console.log({ computerChoice });
  const score = getResult(playerChoice, computerChoice);
  console.log({ score });
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  let rpsButtons = document.querySelectorAll(".rpsButton");

  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton);
  });
}

playGame();
