
function getComputerChoice (){
    let options = ["rock","paper","scissors"];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}

console.log(getComputerChoice());


const computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection){
    let result = '';
  if ( playerSelection === computerSelection){
    result = "its tie!"
  }else if (playerSelection === 'rock' && computerSelection === 'paper') {
    result="computer wins";
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    result="you win!";
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    result="computer wins";
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    result='you win!';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    result='computer wins!';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
    result="you win!";
  } else { 
    result="invalid input";
  }
  return result;
} 

function game (){
    for (let i=1; i<= 5; i++){
        let playerSelection = prompt("let play!");
        playerSelection = playerSelection.toLowerCase();
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }  
}   
game();
