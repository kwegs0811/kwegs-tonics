let cart = [];
let totalPrice = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    let cartInfo = document.getElementById("cart-info");
    if (cart.length === 0) {
        cartInfo.innerHTML = "No items selected.";
    } else {
        let itemList = cart.map(item => item.name).join(", ");
        cartInfo.innerHTML = `Items: ${itemList} <br> Total Price: $${totalPrice}`;
    }
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    let orderMessage = cart.map(item => item.name).join(", ");
    let waLink = `https://wa.me/message/6FQ2YM66AGYYN1?text=I%20want%20to%20buy:%20${orderMessage}%20Total:%20$${totalPrice}`;
    window.location.href = waLink;
}