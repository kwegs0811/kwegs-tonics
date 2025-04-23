let itemCount = 0;

function goToOrderPage() {
  window.location.href = 'order.html';
}

function addToCart() {
  itemCount++;
  document.querySelector('.item-count').textContent = itemCount;
}

// Future enhancement: store selected items in localStorage
// Example structure:
// localStorage.setItem('cartItems', JSON.stringify([{ name: 'Rice', price: 2.00 }]))
