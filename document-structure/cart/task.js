const cart = document.querySelector(".cart__products");
const buttons = document.querySelectorAll(".product__add");
const container = document.querySelector(".products");
const cartItems = {};

function updateCartItem(productId, quantity) {
  cartItems[productId] = quantity;
  const cartProduct = cart.querySelector(`[data-id="${productId}"]`);
  if (cartProduct) {
    cartProduct.querySelector(".cart__product-count").textContent = quantity;
  } else {
    const productImage = container.querySelector(`[data-id="${productId}"] .product__image`).src;
    const productCard = `
      <div class="cart__product" data-id="${productId}">
        <img class="cart__product-image" src="${productImage}">
        <div class="cart__product-count">${quantity}</div>
      </div>
    `;
    cart.insertAdjacentHTML("beforeend", productCard);
  }
}

function addToCart(productId, quantity) {
  if (productId) {
    const currentQuantity = cartItems[productId] || 0;
    const totalQuantity = currentQuantity + quantity;
    cartItems[productId] = totalQuantity;
    updateCartItem(productId, totalQuantity);
  }
}

container.addEventListener("click", (event) => {
  const decButton = event.target.classList.contains("product__quantity-control_dec");
  const incButton = event.target.classList.contains("product__quantity-control_inc");

  if (decButton || incButton) {
    const product = event.target.closest(".product");
    const value = product.querySelector(".product__quantity-value");
    const productId = product.getAttribute("data-id");
    const quantity = parseInt(value.textContent);

    if (decButton && quantity > 1) {
      value.textContent--;
    } else if (incButton) {
      value.textContent++;
    }
  }
});

buttons.forEach((item) => {
  item.addEventListener("click", () => {
    const productId = item.closest(".product").getAttribute("data-id");
    const quantity = parseInt(item.closest(".product").querySelector(".product__quantity-value").textContent);
    addToCart(productId, quantity);
  });
});

