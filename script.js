function addToCart(itemName) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(itemName);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(itemName + ' added to cart!');
}

window.onload = function () {
  if (document.getElementById('cartItems')) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let list = document.getElementById('cartItems');
    if (cart.length === 0) {
      list.innerHTML = '<li>Your cart is empty.</li>';
    } else {
      cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
      });
    }
  }
};
