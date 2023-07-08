const mainModal = document.getElementById("modal_main");
const successModal = document.getElementById("modal_success");
const dangerButton = document.querySelector(".btn_danger");
const closeButtons = document.querySelectorAll(".modal__close_times");

mainModal.classList.add("modal_active");

dangerButton.onclick = function () {
  mainModal.classList.remove("modal_active");
  successModal.classList.add("modal_active");
}

closeButtons.forEach(close => {
  close.onclick = function () {
    successModal.classList.remove("modal_active");
  }
})