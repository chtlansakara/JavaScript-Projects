const flipButtonElement = document.querySelector('.js-flip-button');

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
    console.log(selectedGuess);
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
  }else{
    output = 'You guessed wrong. You lose!';
    resultboxElement.classList.add('result-box-lose');
  }

  resultboxElement.innerHTML = output;
}

