const cart = document.querySelector(".cart__products"); 
const buttons = document.querySelectorAll(".product__add"); 
const container = document.querySelector(".products"); 
const cartItems = {};

container.addEventListener("click", (event) => {
  const decButton = event.target.classList.contains("product__quantity-control_dec");
  const incButton = event.target.classList.contains("product__quantity-control_inc");

  if (decButton || incButton) {
    const product = event.target.closest(".product");
    const value = product.querySelector(".product__quantity-value");
    const productId = product.getAttribute("data-id");
    const quantity = parseInt(value.textContent);

    if (decButton && quantity > 0) {
      value.textContent--;
      cartItems[productId] = quantity - 1;
      updateCartItem(productId, cartItems[productId]);
    } else if (incButton && cartItems.hasOwnProperty(productId)) {
      value.textContent++;
      cartItems[productId] = quantity + 1;
      updateCartItem(productId, cartItems[productId]);
    }
  }
});

function updateCartItem(productId, quantity) {
  if (quantity === 0) {
    delete cartItems[productId];
    const cartProduct = cart.querySelector(`[data-id="${productId}"]`);
    if (cartProduct) {
      cartProduct.remove();
    }
  } else {
    cartItems[productId] = quantity;
    const cartProduct = cart.querySelector(`[data-id="${productId}"]`);
    if (cartProduct) {
      cartProduct.querySelector(".cart__product-count").textContent = quantity;
    } else {
      const productImage = event.target.closest(".product").querySelector(".product__image").src;
      const productCard = `
        <div class="cart__product" data-id="${productId}">
          <img class="cart__product-image" src="${productImage}">
          <div class="cart__product-count">${quantity}</div>
        </div>
      `;
      cart.insertAdjacentHTML("beforeend", productCard);
    }
  }
}

function addToCart(productId) {
  if (productId) {
    const quantity = cartItems[productId] || 0;
    cartItems[productId] = quantity + 1;
    updateCartItem(productId, cartItems[productId]);
  }
}

buttons.forEach(item => {
  item.addEventListener("click", () => {
    const productId = item.closest(".product").getAttribute("data-id");
    addToCart(productId);
  });
});

