
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
    

  }else if (playerSelection === 'rock' && computerSelection === 'paper') {
    result="computer wins!";
    computerScore++;
    scoreResult.innerHTML =  "this round winner is :" + result;
    playerScoreTotal.innerHTML = "your score is : " + playerScore;
    computerScoreTotal.innerHTML = "Computer score is :" + computerScore;
    tieScoreTotal.innerHTML = "tie score is :" + tieScore;

  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    result="you win!";
    playerScore++;
    scoreResult.innerHTML =  "this round winner is :" + result;
    playerScoreTotal.innerHTML = "your score is : " + playerScore;
    computerScoreTotal.innerHTML = "Computer score is :" + computerScore;
    tieScoreTotal.innerHTML = "tie score is :" + tieScore;

  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    result="computer wins!";
    computerScore++;
    scoreResult.innerHTML =  "this round winner is :" + result;
    playerScoreTotal.innerHTML = "your score is : " + playerScore;
    computerScoreTotal.innerHTML = "Computer score is :" + computerScore;
    tieScoreTotal.innerHTML = "tie score is :" + tieScore;

  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    result='you win!';
    playerScore++;
    scoreResult.innerHTML =  "this round winner is :" + result;
    playerScoreTotal.innerHTML = "your score is : " + playerScore;
    computerScoreTotal.innerHTML = "Computer score is :" + computerScore;
    tieScoreTotal.innerHTML = "tie score is :" + tieScore;

  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    result="computer wins!";
    computerScore++;
    scoreResult.innerHTML =  "this round winner is :" + result;
    playerScoreTotal.innerHTML = "your score is : " + playerScore;
    computerScoreTotal.innerHTML = "Computer score is :" + computerScore;
    tieScoreTotal.innerHTML = "tie score is :" + tieScore;

  } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
    result="you win!";
    playerScore++;
    scoreResult.innerHTML =  "this round winner is :" + result;
    playerScoreTotal.innerHTML = "your score is : " + playerScore;
    computerScoreTotal.innerHTML = "Computer score is :" + computerScore;
    tieScoreTotal.innerHTML = "tie score is :" + tieScore;

  } else if (playerSelection === 'paper' && computerSelection === 'paper'){ 
    result="its tie!";
    tieScore++;
    scoreResult.innerHTML =  "this round winner is :" + result;
    playerScoreTotal.innerHTML = "your score is : " + playerScore;
    computerScoreTotal.innerHTML = "Computer score is :" + computerScore;
    tieScoreTotal.innerHTML = "tie score is :" + tieScore;

  } else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
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



        

