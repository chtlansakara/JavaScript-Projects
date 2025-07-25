let cartQuantity = 0;

function addToCart(quantity){

  // setting the maximum with if
  if((cartQuantity+quantity) <= 10){
  cartQuantity+=quantity;
  console.log(`Cart quantity: ${cartQuantity}`);
  showCartQuantity();
  } else{
    //a pop up for cart full
    alert('Can\'t update! The cart is full!');
  }
}
function removeFromCart(quantity){
  //setting the minimum with if
  if((cartQuantity-quantity)>=0){
  cartQuantity-=quantity;
  console.log(`Cart quantity: ${cartQuantity}`);
  showCartQuantity();
  }else{
    //a pop up for error for minus quantity
    alert('Can\'t update! Not enough items in the cart!');
  }
}

function showCartQuantity(){
  const displayElement = document.querySelector('.display-box');
  displayElement.innerHTML = `Cart quantity: ${cartQuantity}`;
}

function resetCart(){
  cartQuantity = 0;

  console.log('Cart was reset!');
  console.log(`Cart quantity: ${cartQuantity}`);
  showCartQuantity();
}