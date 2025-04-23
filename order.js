document.addEventListener('DOMContentLoaded', () => { const cartList = document.getElementById('cartList'); const totalPriceEl = document.getElementById('totalPrice');

// Sample items (should come from localStorage or backend) const cartItems = [ { name: 'Fried Rice', price: 2.00, quantity: 1 }, { name: 'Ugali + Sukuma', price: 1.50, quantity: 1 }, ];

function renderCart() { cartList.innerHTML = ''; let total = 0;

cartItems.forEach((item, index) => {
  total += item.price * item.quantity;
  const div = document.createElement('div');
  div.className = 'cart-item';
  div.innerHTML = `
    <div><strong>${item.name}</strong><br>$${item.price.toFixed(2)}</div>
    <div>
      <input type="number" value="${item.quantity}" min="1" data-index="${index}" class="qty-input">
      <button data-index="${index}" class="remove-btn">Remove</button>
    </div>
  `;
  cartList.appendChild(div);
});

totalPriceEl.textContent = total.toFixed(2);

}

cartList.addEventListener('input', (e) => { if (e.target.classList.contains('qty-input')) { const index = e.target.dataset.index; const value = parseInt(e.target.value); cartItems[index].quantity = value > 0 ? value : 1; renderCart(); } });

cartList.addEventListener('click', (e) => { if (e.target.classList.contains('remove-btn')) { const index = e.target.dataset.index; cartItems.splice(index, 1); renderCart(); } });

renderCart(); });

