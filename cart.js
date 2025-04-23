let cart = JSON.parse(localStorage.getItem('kwegsCart')) || [];

function saveCart() {
  localStorage.setItem('kwegsCart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cart-count').textContent = count;
}

function addToCart(itemName) {
  const existingItem = cart.find(item => item.name === itemName);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name: itemName, quantity: 1 });
  }
  saveCart();
}

function clearCart() {
  cart = [];
  saveCart();
  if (document.getElementById('order-items')) {
    displayCartItems();
  }
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  displayCartItems();
}

function increaseQty(index) {
  cart[index].quantity += 1;
  saveCart();
  displayCartItems();
}

function decreaseQty(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
    saveCart();
    displayCartItems();
  }
}

function displayCartItems() {
  const container = document.getElementById('order-items');
  if (!container) return;

  container.innerHTML = '';
  cart.forEach((item, index) => {
    container.innerHTML += `
      <div>
        ${item.name} - Quantity: ${item.quantity}
        <button onclick="increaseQty(${index})">+</button>
        <button onclick="decreaseQty(${index})">-</button>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();

  if (document.getElementById('order-items')) {
    displayCartItems();
  }

  const form = document.getElementById('order-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const location = document.getElementById('location').value;
      const phone = document.getElementById('phone').value;

      const itemsList = cart.map(item => `- ${item.name} (x${item.quantity})`).join('%0A');
      const message = `Order's name: ${name}%0ALocation: ${location}%0APhone number: ${phone}%0AOrdered items:%0A${itemsList}`;
      const whatsappURL = `https://wa.me/255785792468?text=${message}`;

      window.open(whatsappURL, '_blank');
      document.getElementById('confirmation').style.display = 'block';
    });
  }
});