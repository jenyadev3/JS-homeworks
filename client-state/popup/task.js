const modal = document.getElementById("subscribe-modal");
const closeBtn = document.querySelector(".modal__close");

if(!document.cookie.includes("modalClosed=true")) {
  modal.classList.add("modal_active");
}

closeBtn.addEventListener("click", () => {
  modal.classList.remove("modal_active");
  document.cookie = "modalClosed=true";
})