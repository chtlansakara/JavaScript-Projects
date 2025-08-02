// to keep last toggled on gender
let userGender = '';




//toggle on only one from the set at once
function toggleButton(gender){

  //get element of the button clicked
  const toggleButtonElement = document.getElementById(gender);

  //check if toggled on already
    if(toggleButtonElement.classList.contains('toggle-gender-button-on')){
      //toggle off the button
      toggleButtonElement.classList.remove('toggle-gender-button-on');
    }else{
      //check if there is another toggled on button
       if(userGender && userGender !== gender){
          //toggle off previous one
          toggleOffLast(userGender);
        }
      
        //toggle on the selected
        toggleButtonElement.classList.add('toggle-gender-button-on');
        //save it to the last toggled on
        userGender = gender;
        // console.log(userGender + ' selected!');
    }

  }


//function - to toggle off last element
function toggleOffLast(lastOn){
  const toggledButtonElement = document.getElementById(lastOn);
  toggledButtonElement.classList.remove('toggle-gender-button-on');
}


//function - to toggle on multiple at once
function toggleMultipleButtons(selected){

  //get element of the button clicked
  const toggleButtonElement = document.getElementById(selected);

  //check if toggled on already
    if(toggleButtonElement.classList.contains('toggle-sibling-button-on')){
      //toggle off the button
      toggleButtonElement.classList.remove('toggle-sibling-button-on');
    }else{
      
        //toggle on the selected
        toggleButtonElement.classList.add('toggle-sibling-button-on');
        
        
    }
}

//function - to check for errors in date
function checkForDateErrors(selected){
  const checkingElement = document.getElementById(selected);
  const textTyped = Number(checkingElement.value);

  //if not a number show error message
  if(isNaN(textTyped)){
    showDateErrorMessage();
  }else{
    showDateErrorMessage('off');
  }
}



//function - show error message
function showDateErrorMessage(command){
  const errorDisplayElement = document.querySelector('.error-message');
  if(command === 'off'){
  errorDisplayElement.innerHTML = '';
  }else{
  errorDisplayElement.innerHTML = 'Please enter a valid date!';
  }
}

