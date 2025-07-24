const calButtonElement = document.querySelector('.js-calculate-button');

//adding click event listener - calculate button
calButtonElement.addEventListener('click', () => {

  const inputAge = document.querySelector('.js-input-age').value;
  
  calculatePrice(inputAge);

  console.log(inputAge);

});


function calculatePrice(age){
  console.log(age);

  //hide discount text first - if it is there
  showHideDiscount(false);

  //getting holiday info
  const isHolidayChecked = document.querySelector('.js-noHoliday-checkbox').checked;
  console.log(`The checkbox is marked: ${isHolidayChecked}`);
  const noHoliday = !isHolidayChecked;
  console.log(`Holiday: ${!noHoliday}`);
  
//default operator - if no discount the right value is assigned
 //guard operator - if it is not a holiday ( noHoliday = true) - guarded value assigned
  //if it is a holiday ( noHoliday = false) -> left side is false -> default value assigned
  const price = (noHoliday && findDiscounted(age) ) || 10;
  

  //show price on page 
  const priceElement = document.querySelector('.js-price');
  priceElement.innerHTML = `Total: $${price}`;

}


function findDiscounted(age){

  const price = 10;
  const percentage = 0.2;
  const isDiscounted = age >= 65 || age <=6 ? true : false;

  
 
  if(isDiscounted){
    //show text
    showHideDiscount(true);

    //if discounted - send discounted price back
    const discount = (price * percentage).toFixed(2);
    const discountedPrice = price - discount;
    console.log(`discount is ${discount}`);
    console.log(`Discounted (${percentage*100}%) price is : ${discountedPrice}`);
    return discountedPrice;
  }


   //if no discount - hide discount text
    showHideDiscount(false);
    //send false
    return isDiscounted;
}


function showHideDiscount(check){
  const discountElement = document.querySelector('.js-discount-text');
  const result = `Discount!`;

  if(check === true){
  //adding the 'Discount' text to page 
    discountElement.classList.add('discount-text-show');
    discountElement.innerHTML = result;
  }
  if(check === false){
  //removing the 'Discount' text from page 
    discountElement.classList.remove('discount-text-show');
  }
}
