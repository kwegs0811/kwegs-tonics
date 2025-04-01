let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-list");
    let cartTotal = document.getElementById("cart-total");

    cartList.innerHTML = "";  
    let totalPrice = 0;

    cart.forEach((item, index) => {
        totalPrice += item.price;
        let listItem = document.createElement("li");
        listItem.innerHTML = `${item.name} - $${item.price} 
            <button onclick="removeFromCart(${index})">Remove</button>`;
        cartList.appendChild(listItem);
    });

    cartTotal.innerHTML = `Total Price: $${totalPrice}`;
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let orderMessage = cart.map(item => `✅ ${item.name} - $${item.price}`).join("%0A");
    let totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    let waLink = `https://wa.me/message/6FQ2YM66AGYYN1?text=🛒 Order Summary:%0A${orderMessage}%0A%0A💰 Total Price: $${totalPrice}%0A%0A📦 Ready to order!`;
    
    window.location.href = waLink;
}