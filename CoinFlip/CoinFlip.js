const flipButtonElement = document.querySelector('.js-flip-button');

// Score object to keep guessed right score
 //loads the score if there is one saved in storage otherwise zero.
const score = JSON.parse(localStorage.getItem('guess-score')) || {
  wins: 0,
  losses: 0
};

//displaying score on page when loaded
displayScore();

flipButtonElement.addEventListener('click', () => {

 playGame();

});

function playGame(){

   //flip the coin
  const side =  flipCoin();

  //display flipped side
  displayResults(side);

  //check & display guess results
  checkUserGuess(side);

  //save score to storage
  localStorage.setItem('guess-score', JSON.stringify(score));

}

function flipCoin() {
  //create a random number
  const random = Math.random();

  //decide which side
  let side = random < 0.5 ? 'Heads' : 'Tails';

  //displaying which side
  console.log(`The side is: ${side}`);

  //return the flipped side
  return side;

}


function displayResults(result){

  const displayElement = document.querySelector('.js-display-box');
  displayElement.innerHTML = `It's the ${result}!`;

}


function checkUserGuess(side){
  const selectElement = document.getElementById('userGuess');
  const selectedGuess = selectElement.value;
  
  //if a guess is selected
  if(selectedGuess === 'Heads' || selectedGuess === 'Tails'){
    console.log(`Guessed side is: ${selectedGuess}`);
    displayGuessResults(selectedGuess,side);
    return selectedGuess;
  }else{
    displayGuessResults(selectedGuess, side);
    return false;
  }

}


function displayGuessResults(guess, result){
  let output = '';
  const resultboxElement = document.querySelector('.js-result-box');
  resultboxElement.classList.remove('result-box-win');
  resultboxElement.classList.remove('result-box-lose');

  if(guess === 'No guess'){
    output = 'You can guess a result!';
  }else if(guess === result){
    output = 'You guessed right. You WIN!';
    resultboxElement.classList.add('result-box-win');
    // add to score
    score.wins++;
  }else{
    output = 'You guessed wrong. You lose!';
    resultboxElement.classList.add('result-box-lose');
    // add to score
    score.losses++;
  }

  resultboxElement.innerHTML = output;

  // display score
 displayScore();
}

function displayScore(){
 const scoreboxElement = document.querySelector('.js-score-box');
  scoreboxElement.innerHTML = `<code>SCORE: Wins:${score.wins} & Losses:${score.losses}</code>`;
}

function clearScore(){
  // set score to zero
  score.wins = 0;
  score.losses = 0;
  //remove score from memory
  localStorage.removeItem('guess-score');
  //show removed message in console
  console.log('Score removed from memory!');
  //display zero score (updated) on the page
  displayScore();
}