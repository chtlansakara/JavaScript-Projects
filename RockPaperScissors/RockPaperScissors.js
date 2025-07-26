
// keeping the score in an objects
const score = {
  wins : 0,
  losses: 0,
  ties: 0
};




    //function 
      // to run - when an  option is selected by the user

      function playGame(userMove) {

        //the computer's move
        const computerMove = selectComputerMove();
        let result = '';

        //result
        //  when 'rock' is chosen by the user
        if (userMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'tied';
           
          } else if (computerMove === 'paper') {
            result = 'lost';
            
          } else if (computerMove === 'scissors') {
            result = 'won';
          }
        }
        //  when 'paper' is chosen by the user
        if (userMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'won';
          } else if (computerMove === 'paper') {
            result = 'tied';
          } else if (computerMove === 'scissors') {
            result = 'lost';
          }
        }
        //  when 'scissors' is chosen by the user
        if (userMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'lost';
          } else if (computerMove === 'paper') {
            result = 'won';
          } else if (computerMove === 'scissors') {
            result = 'tied';
          }
        }

        //update score
        updateScore(result);
        // show score
        showScore();

        // show results
        showResults(userMove, computerMove, result);
      }



    //function
      //-to display result

      function showResults(userMove, computerMove, result){
        
        //adding 'you' for 'won' and 'lose' & for 'tie', capitalize first
        if(result === 'won' || result === 'lost'){
          result = `You ${result}`;
        }if( result === 'tied'){
          result = 'Tied';
        }

        alert(`You picked ${userMove},\nComputer picked ${computerMove},\n${result}! \n\nSCORE- Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);


      }



    //function 
      // -to select computer move

      function selectComputerMove() {

        let computerMove = '';

        //using random number to select an option ( 0 <= random  < 1)
        const rand = Math.random();
        // console.log(rand);

        //choosing one of 3 option
        if (rand >= 0 && rand <= 1 / 3) {
          computerMove = 'rock';
          // console.log('computer chose rock');
        } else if (rand > 1 / 3 && rand <= 2 / 3) {
          computerMove = 'paper';
          // console.log('computer chose paper');

        } else if (rand > 2 / 3 && rand < 1) {
          computerMove = 'scissors';
          // console.log('computer chose scissors');

        } else {
          // console.log('No computer move found!');
        }

        return computerMove;

      }

    //function
     //-to update the score
     function updateScore(result){

      if( result === 'won'){
        score.wins += 1;
        return;
      } 
      if( result === 'lost'){
        score.losses += 1;
        return;
      }
      if( result === 'tied'){
        score.ties += 1;
        return;
      }
     } 
     
     
    //function
     //-to show score

    function showScore(){
      console.log(`Score: wins:${score.wins}, losses:${score.losses}, ties:${score.ties}`);
    }






    //ADDITIONAL: 
      // adding event listners to the button 'click' events
      rockButtonElement = document.querySelector('.js-rock-button');
      paperButtonElement = document.querySelector('.js-paper-button');
      scissorsButtonElement = document.querySelector('.js-scissors-button');

      rockButtonElement.addEventListener('click', () => {
        playGame('rock');
      });
      paperButtonElement.addEventListener('click', () => {
        playGame('paper');
      });
      scissorsButtonElement.addEventListener('click', () => {
        playGame('scissors');
      });