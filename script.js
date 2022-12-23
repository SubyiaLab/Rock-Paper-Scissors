
function playRound(playerSelection, computerSelection){
    let result = '';
  if ( playerSelection === 'rock' && computerSelection === 'rock'){
    result = "its tie!";
  }else if (playerSelection === 'rock' && computerSelection === 'paper') {
    result="computer wins!";
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    result="you win!";
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    result="computer wins!";
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    result='you win!';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    result="computer wins!";
  } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
    result="you win!";
  } else if (playerSelection === 'paper' && computerSelection === 'paper'){ 
    result="its tie!";
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
    result="its tie!"
  } else {
    result="invalid input";
  }
  return result;
} 

function game (){
    let computerScore = 0;
    let playerScore = 0;
    let tieScore = 0;
    let options = ["rock","paper","scissors"];
    
    for (let i=1; i<= 5; i++){
        const computerSelection = options[Math.floor(Math.random() * options.length)];
        console.log(computerSelection);
        let playerSelection = prompt("let play!");
        playerSelection = playerSelection.toLowerCase();
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        if (playRound(playerSelection, computerSelection) === 'you win!') {
            playerScore++;
        } else if (playRound(playerSelection, computerSelection) === "computer wins!"){
            computerScore++;
        } else {
            tieScore++;
        }
        
    }  
    console.log("computer score is:" + computerScore);
    console.log("player score is:" + playerScore);
    console.log("ties :" + tieScore);
}   
game();
