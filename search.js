function searchProducts() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        let productName = product.getAttribute("data-name").toLowerCase();
        if (productName.includes(input)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}