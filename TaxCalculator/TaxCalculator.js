

function calculateTax(){
  //getting the input amount
  const amountInputElement = document.getElementById('amount-input');
  const amount = Number(amountInputElement.value);

  //getting the input tax percentage
  const percenInputElement = document.getElementById('taxPer-input');
  const percen = Number(percenInputElement.value);

  //calculating tax
  const tax = amount * percen / 100;
  console.log(tax);

  //calculating total
  const total = amount + tax;
  console.log(total);

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
  taxDisplayElement.innerHTML = `Tax is ${currencyTax}`;
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