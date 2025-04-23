let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
  document.getElementById('cart-count').textContent = cart.length;
}

function addToCart(item) {
  cart.push({ name: item, quantity: 1 });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function renderOrderItems() {
  const orderList = document.getElementById('order-items');
  if (!orderList) return;
  orderList.innerHTML = '';

  const counts = {};
  cart.forEach(({ name }) => {
    counts[name] = (counts[name] || 0) + 1;
  });

  for (const [item, quantity] of Object.entries(counts)) {
    const li = document.createElement('li');
    li.textContent = `${item} x${quantity}`;
    orderList.appendChild(li);
  }
}

function clearCart() {
  cart = [];
  localStorage.removeItem('cart');
  renderOrderItems();
  updateCartCount();
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderOrderItems();

  const form = document.getElementById('order-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('order-name').value;
      const location = document.getElementById('order-location').value;
      const phone = document.getElementById('order-phone').value;

      const items = cart.map(({ name }) => `- ${name}`).join('%0A');
      const message = `Order's name: ${name}%0ALOCATION: ${location}%0APhone number: ${phone}%0AOrdered items:%0A${items}`;
      const whatsappURL = `https://wa.me/255785792468?text=${message}`;

      window.location.href = whatsappURL;
    });
  }
});