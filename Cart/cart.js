let cartQuantity = 0;

function addToCart(quantity){
  cartQuantity+=quantity;
  console.log(`Cart quantity: ${cartQuantity}`);
  showCartQuantity();
}
function removeFromCart(quantity){
  cartQuantity-=quantity;
  console.log(`Cart quantity: ${cartQuantity}`);
  showCartQuantity();
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