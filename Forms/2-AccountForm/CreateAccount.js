// get form element
const form = document.getElementById('form');
// get form elements
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

//add event listener to submit button 'click' event
form.addEventListener('submit', (event) => {
  //to avoid default behavior of the browser
  event.preventDefault();

  //call custom function
  if(checkInputs()){
    createAccount();
  };
});


// function - to check inputs
function checkInputs(){
  //keep validated
  const isValidForm = {
    validUsername: false,
    validEmail: false,
    validPassword: false,
    validConfirmPassword: false
  }

  //get values - trim() used to remove whitespace
   const usernameValue = username.value.trim();
   const emailValue = email.value.trim();
   const passwordValue = password.value.trim();
   const confirmPasswordValue = confirmPassword.value.trim();

  //validations
  //username
  if(usernameValue === ''){
    //show error
    //add error class
    setErrorFor(username, 'Enter user name!');
  }else{
    //add success class
    setSuccessFor(username);
    //set as valid
    isValidForm.validUsername = true;
  }

  //email
  if(emailValue === ''){
    //show error
    //add error class
    setErrorFor(email, 'Enter email!');
  }else if(!isEmail(emailValue)){
    setErrorFor(email, 'Email is not valid!');
  }else{
    //add success class
    setSuccessFor(email);
    //set as valid
    isValidForm.validEmail = true;
  }

  //password
  if(passwordValue === ''){
    //show error
    //add error class
    setErrorFor(password, 'Enter password!');
  }else if(!isPassword(passwordValue)){
    setErrorFor(password, 'Password must contain at least 8 characters!');
  }else{
    //add success class
    setSuccessFor(password);
    //set as valid
    isValidForm.validPassword = true;
  }

  //confirmPassword
  if(confirmPasswordValue === ''){
    //show error
    //add error class
    setErrorFor(confirmPassword, 'Enter password again to confirm!');
  }else if(passwordValue !== confirmPasswordValue){
    setErrorFor(confirmPassword, 'Passwords don\'t match!');
  }else{
    //add success class
    setSuccessFor(confirmPassword);
    //set as valid
    isValidForm.validConfirmPassword = true;
  }

  //check if all form inputs are valid - return true if so
  if(isValidForm.validUsername && isValidForm.validEmail && isValidForm.validPassword && isValidForm.validConfirmPassword){
    // console.log('all inputs are valid');
    return true;
  }else{
    // console.log('returning false for some reason');
    return false;
  }

}


//function to show error message
function setErrorFor(inputElement, message){
  //get  the relevant form control - (the parent element)
  const formControl = inputElement.parentElement;
  //get error element
  const errorElement = formControl.querySelector('small');

  //show error message
  errorElement.innerText = message;

  //add 'error' class to formControl
  formControl.className = 'form-control error';    
}

//function to show success
function setSuccessFor(inputElement){
  //get  the relevant form control - (the parent element)
  const formControl = inputElement.parentElement;
  //add 'success' class to formControl
  formControl.className = 'form-control success'; 
}


//function to check for valid email
function isEmail(emailInput){
  //using regex to check
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(emailInput);
}


//function to check for valid password - length only
function isPassword(passwordInput){
  //get length of password
  const length = passwordInput.length;

  if(length >= 8){
    return true;
  }else{
    return false;
  }
}

//function to create account
function createAccount(){
  console.log('Form submit!');
  alert('User account created!');
}