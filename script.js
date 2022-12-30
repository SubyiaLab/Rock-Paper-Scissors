
let computerScore = 0;
let playerScore = 0;
let tieScore = 0;
let options = ["rock","paper","scissors"];
let result = '';

const rockBtn = document.querySelector(".rock");
const paperkBtn = document.querySelector(".paper");
const scissBtn = document.querySelector(".scissors");






function playRound(playerSelection){

  const computerSelection = options[Math.floor(Math.random() * options.length)];
  console.log(computerSelection);

  if ( playerSelection === 'rock' && computerSelection === 'rock'){
    result = "its tie!";
    tieScore++;
    scoreResult.innerHTML =  "this round winner is :" + result;
    playerScoreTotal.innerHTML = "your score is : " + playerScore;
    computerScoreTotal.innerHTML = "Computer score is :" + computerScore;
    tieScoreTotal.innerHTML = "tie score is :" + tieScore;
    gameOver();
    

  }else if (playerSelection === 'rock' && computerSelection === 'paper') {
    gameOver();
    result="computer wins!";
    computerScore++;
    scoreResult.innerHTML =  "this round winner is :" + result;
    playerScoreTotal.innerHTML = "your score is : " + playerScore;
    computerScoreTotal.innerHTML = "Computer score is :" + computerScore;
    tieScoreTotal.innerHTML = "tie score is :" + tieScore;
    

  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    gameOver();
    result="you win!";
    playerScore++;
    scoreResult.innerHTML =  "this round winner is :" + result;
    playerScoreTotal.innerHTML = "your score is : " + playerScore;
    computerScoreTotal.innerHTML = "Computer score is :" + computerScore;
    tieScoreTotal.innerHTML = "tie score is :" + tieScore;
    

  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    gameOver();
    result="computer wins!";
    computerScore++;
    scoreResult.innerHTML =  "this round winner is :" + result;
    playerScoreTotal.innerHTML = "your score is : " + playerScore;
    computerScoreTotal.innerHTML = "Computer score is :" + computerScore;
    tieScoreTotal.innerHTML = "tie score is :" + tieScore;
    
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    gameOver();
    result='you win!';
    playerScore++;
    scoreResult.innerHTML =  "this round winner is :" + result;
    playerScoreTotal.innerHTML = "your score is : " + playerScore;
    computerScoreTotal.innerHTML = "Computer score is :" + computerScore;
    tieScoreTotal.innerHTML = "tie score is :" + tieScore;
    

  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    gameOver();
    result="computer wins!";
    computerScore++;
    scoreResult.innerHTML =  "this round winner is :" + result;
    playerScoreTotal.innerHTML = "your score is : " + playerScore;
    computerScoreTotal.innerHTML = "Computer score is :" + computerScore;
    tieScoreTotal.innerHTML = "tie score is :" + tieScore;
    

  } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
    gameOver();
    result="you win!";
    playerScore++;
    scoreResult.innerHTML =  "this round winner is :" + result;
    playerScoreTotal.innerHTML = "your score is : " + playerScore;
    computerScoreTotal.innerHTML = "Computer score is :" + computerScore;
    tieScoreTotal.innerHTML = "tie score is :" + tieScore;
    

  } else if (playerSelection === 'paper' && computerSelection === 'paper'){ 
    gameOver();
    result="its tie!";
    tieScore++;
    scoreResult.innerHTML =  "this round winner is :" + result;
    playerScoreTotal.innerHTML = "your score is : " + playerScore;
    computerScoreTotal.innerHTML = "Computer score is :" + computerScore;
    tieScoreTotal.innerHTML = "tie score is :" + tieScore;
    

  } else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
    gameOver();
    result="its tie!"
    tieScore++;
    scoreResult.innerHTML =  "this round winner is :" + result;
    playerScoreTotal.innerHTML = "your score is : " + playerScore;
    computerScoreTotal.innerHTML = "Computer score is :" + computerScore;
    tieScoreTotal.innerHTML = "tie score is :" + tieScore;
    
  } else {
    result="invalid input";
  }
  return result,playerScore,computerScore,tieScore;
} 

function gameOver () {
  if (playerScore === 5){
    scoreResult.innerHTML =  "you Win the game! ggz";
    playerScore=0;
    computerScore=0;
    tieScore=0;
  } else if (computerScore===5){
    scoreResult.innerHTML =  "PC Win the game! ggz";
    playerScore=0;
    computerScore=0;
    tieScore=0;
  } else return;
    

}

let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';

rockBtn.addEventListener('click',() => playRound('rock'));
paperkBtn.addEventListener('click',() => playRound('paper'));
scissBtn.addEventListener('click',() =>playRound('scissors'));

const playerScoreTotal = document.querySelector(".player-score");
const computerScoreTotal = document.querySelector(".computer-score");
const tieScoreTotal = document.querySelector(".tie");
const scoreResult = document.querySelector(".result");



        

