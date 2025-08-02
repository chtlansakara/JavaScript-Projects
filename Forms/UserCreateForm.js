
//creating a user or get from storage if there
let user = JSON.parse(localStorage.getItem('user')) ||  {
  firstName: '',
  lastName: '',
  gender: '',
  birthdate: {
    year: 0,
    month: 0,
    date: 0
  },
  siblings: {
    elderSisters: false,
    youngerSisters: false,
    elderBrothers: false,
    youngerBrothers: false
  }
}

//show the loaded user object
console.log(user);

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
      //remove from the saved siblings
      saveToSiblings(selected, false);
    }else{
      
        //toggle on the selected
        toggleButtonElement.classList.add('toggle-sibling-button-on');
        //save to user object
        saveToSiblings(selected,true);
        
        
    }
}

//function to save siblings marked to object 'user'
function saveToSiblings(selected,flag){
  console.log(selected + ' ' + flag);
  if(selected === 'Esister'){
    user.siblings.elderSisters = flag;
  }else if(selected === 'Ysister'){
    user.siblings.youngerSisters = flag;
  }else if(selected === 'Ebrother'){
    user.siblings.elderBrothers = flag;
  }else if(selected === 'Ybrother'){
    user.siblings.youngerBrothers = flag;
  }else{
    console.log('Sibling not saved!');
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
  }else if(command){
    errorDisplayElement.innerHTML = `Please enter valid ${command}`;
  }else{
  errorDisplayElement.innerHTML = 'Please enter a valid date!';
  }
}

//function- to save the user to local storage
function createAUser(){
  validateForm();
}


//function - to validate the form
function validateForm(){
  saveUser();
  //save user to local storage
  localStorage.setItem('user', JSON.stringify(user));
}

function saveUser(){
  //turn off any previous error messages
  showFormError('off');


  //first name
  const firstNameElement = document.getElementById('firstName');
  //show error message if empty
  if(!firstNameElement.value){
    showFormError('Enter first name!');
    return;
  }else{
      //save to user object
      user.firstName = firstNameElement.value;
      // console.log(user.firstName);
  }

  //last name
  const lastNameElement = document.getElementById('lastName');
  //show error message if empty
  if(!lastNameElement.value){
    showFormError('Enter last name!');
    return;
  }else{
      //save to user object
      user.lastName = lastNameElement.value;
      // console.log(user.lastName);
  }

  //gender
  if(!userGender){
    showFormError('Select a gender!');
    return;
  }else{
    //save
    user.gender = userGender;
    console.log(user.gender);
  }

  //birthdate
  const birthYearElement = document.getElementById('year');
  const birthYear = Number(birthYearElement.value);
  const birthMonthElement = document.getElementById('month');
  const birthMonth = Number(birthMonthElement.value);
  const birthDateElement = document.getElementById('date');
  const birthDate = Number(birthDateElement.value);

  //check & show error for empty date
  if(!birthYear || !birthMonth || !birthDate){
    showFormError('Enter birth date!');
  }else{

    //check if a correct date
    const validDate = validateDate(birthYear, birthMonth, birthDate);

    if(validDate){
    //save to object 'user'
    user.birthdate.year = birthYear;
    user.birthdate.month = birthMonth;
    user.birthdate.date = birthDate;

    //show saved date
    console.log(user.birthdate);
    }
  }

  //show saved object in the console
  console.log(user);

}

//to show an error message at the bottom of the form
function showFormError(message){
  const formErrorElement = document.querySelector('.form-error-message');
  if(message === 'off'){
    formErrorElement.innerHTML= '';
  }else{
    formErrorElement.innerHTML = message;
  }
}


//check if the date is correct- returns true if correct
function validateDate(year, month, date){

  const yearDigits = String(year).length;
  const monthDigits = String(month).length;
  const dateDigits = String(date).length;

  if(yearDigits>4){
    showDateErrorMessage('year');
    return false;
  }

  if(monthDigits>2 || month > 12){
    showDateErrorMessage('month');
    return false;
  }

  if(dateDigits>2 || invalidDate(date,month)){
    showDateErrorMessage('date');
    return false;
  }

  return true;
}


//to check for correct date of each month as if 31,30 or 28
function invalidDate(date,month){
  if(month === 1 || month === 3 || month ===5 || month === 7 || month === 8 || month === 10 || month === 12){
    if(date<= 31){
      return false;
    }else{
      return true;
    }
  }else if( month === 4 || month === 6 || month === 9 || month === 11){
    if(date<=30){
      return false;
    }else{
      return true;
    }
  }else if( month === 2){
    if(date <= 28 ){
      return false;
    }else{
      return true;
    }
  }
}