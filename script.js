// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **

function getComputerChoice() {
  let rpsChoices = ["Rock", "Paper", "Scissors"];
  let computerChoice = rpsChoices[Math.floor(Math.random() * 3)];
  return computerChoice;
}
