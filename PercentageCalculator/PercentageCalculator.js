

function calculateTax(){
  //getting the input amount
  const amountInputElement = document.getElementById('amount-input');
  const amount = Number(amountInputElement.value);

  //getting the input tax percentage
  const percenInputElement = document.getElementById('taxPer-input');
  const percen = Number(percenInputElement.value);

  //calculating tax
  const tax = amount * percen / 100;
  // console.log(tax);

  //calculating total
  const total = amount + tax;
  // console.log(total);

  //display results - if values are inserted
  if(tax && total){
  displayTax(tax);
  displayTotal(total);
  }
 
}


function displayTax(tax){
  //getting HTML element
  const taxDisplayElement = document.querySelector('.js-display-tax');
  //getting currency value
  const currencyTax = convertToCurrency(tax);
  //display on page
  taxDisplayElement.innerHTML = `Tax: ${currencyTax}`;
}

function displayTotal(total){
  //getting HTML element
  const totalDisplayElement = document.querySelector('.js-display-total');
  //getting currency calue
  const currencyTotal = convertToCurrency(total);
  //display on page
  totalDisplayElement.innerHTML = `Total:${currencyTotal}`;
}


//function to convert to a curreny string
function convertToCurrency(amount){

  //add 2 decimal points
  const number = amount.toFixed(2);

  //add currency symbol & thousand separators
  const value = '$' + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
  return value;
  
}


//function - to show amount when being typed 
function showTypedAmount(){
  //getting the input amount
  const amountInputElement = document.getElementById('amount-input');
  const amount = Number(amountInputElement.value);

  
   //clear previous display values
  clearDisplay();

   //getting HTML element to display
  const totalDisplayElement = document.querySelector('.js-display-total');

  //handle not number input - display a message
  if(isNaN(amount)){
    // console.log(amount);
    totalDisplayElement.innerHTML = 'Please enter a number value!';
  }else{
     //getting currency format value
      const currencyTotal = convertToCurrency(amount);
      //display on page
      totalDisplayElement.innerHTML = `Amount:${currencyTotal}`;
  }
}

function showErrorPercentage(){
  //getting the input tax percentage
  const percenInputElement = document.getElementById('taxPer-input');
  const percen = Number(percenInputElement.value);

  if(isNaN(percen)){
  //getting HTML element to display
  const totalDisplayElement = document.querySelector('.js-display-tax');
  totalDisplayElement.innerHTML = 'Please enter a valid percentage!';
  }

}


//function - to clear displayed values
function clearDisplay(){
   //getting HTML element
  const taxDisplayElement = document.querySelector('.js-display-tax');
  const totalDisplayElement = document.querySelector('.js-display-total');
  
  //clean the total display on page
  taxDisplayElement.innerHTML = '';
  totalDisplayElement.innerHTML = '';
}