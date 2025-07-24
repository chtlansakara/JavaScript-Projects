const flipButtonElement = document.querySelector('.js-flip-button');

//keeping the last result
let lastResult = '';

flipButtonElement.addEventListener('click', () => {

  flipCoin();

});


function flipCoin() {
  //create a random number
  const random = Math.random();

  //decide which side
  let result = random < 0.5 ? 'Heads' : 'Tails';

  //deciding the result
  if(lastResult){
    if(result === lastResult){
      result = result === 'Heads' ? 'Heads again!' : 'Tails again!';
    }
  }

  //saving the latest
  lastResult = result;

  //result
  console.log(result);
  displayResults(result);
  //check & display guess results
  checkUserGuess(result);

}




function displayResults(result){

  const displayElement = document.querySelector('.js-display-box');
  displayElement.innerHTML = `It's the ${result}!`;

}

function displayGuessResults(guess, result){
  let output = '';
  const resultboxElement = document.querySelector('.js-result-box');

  if(guess === result){
    output = 'You guessed right. You WIN!';
    resultboxElement.innerHTML = output;
    resultboxElement.classList.add('result-box-win');
  }else{
    output = 'You guessed wrong. You lose!';
    resultboxElement.innerHTML = output;
    resultboxElement.classList.add('result-box-lose');
  }
}

function checkUserGuess(result){
  const selectElement = document.getElementById('userGuess');
  const selectedGuess = selectElement.value;
  

  if(selectedGuess){
    console.log(selectedGuess);
    displayGuessResults(selectedGuess,result);
   
  }
}

