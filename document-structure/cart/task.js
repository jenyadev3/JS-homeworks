const cart = document.querySelector(".cart__title");
const buttons = document.querySelectorAll(".product__add");
const container = document.querySelector(".products");
let product;
let value;
let productImage;

container.addEventListener("click", (event) => {
  const decButton = event.target.classList.contains("product__quantity-control_dec");
  const incButton = event.target.classList.contains("product__quantity-control_inc");
  productImage = event.target.closest(".product").querySelector(".product__image").src;

  if (incButton) {
    product = event.target.closest(".product");
    value = product.querySelector(".product__quantity-value");
    value.textContent++;
  } else if (decButton) {
    product= event.target.closest(".product");
    value = product.querySelector(".product__quantity-value");
    if (value.textContent > 0) {
      value.textContent--;
    }
  }
})

buttons.forEach(item => {
  item.addEventListener("click", () => {
    if (product && value && product) {
      const productId = product.getAttribute("id");
      const productCard = `<div class="cart__product" data-id=${productId}>
      <img class="cart__product-image" src=${productImage}>
      <div class="cart__product-count">${value.textContent}</div>
      </div>`;
      cart.insertAdjacentHTML("beforeend", productCard);
     }
   })
})