const mainModal = document.getElementById("modal_main");
const successModal = document.getElementById("modal_success");
const dangerButton = document.querySelector(".btn_danger");
const closeButtons = document.querySelectorAll(".modal__close_times");

mainModal.className = "modal modal_active";

dangerButton.onclick = function () {
  mainModal.className = "modal";
  successModal.className = "modal modal_active";
}

closeButtons.forEach(close => {
  close.onclick = function () {
    successModal.className = "modal";
  }
})