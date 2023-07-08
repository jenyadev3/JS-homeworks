const button = document.querySelector(".dropdown__value");
const list = document.querySelector(".dropdown__list");
const listItem = document.querySelectorAll(".dropdown__link");

function showMenu(event) {
  list.classList.toggle("dropdown__list_active");
    
  listItem.forEach(item => {
      item.onclick = (event) => {
      button.textContent = item.textContent;
      list.classList.toggle("dropdown__list_active");
      event.preventDefault();
    }
  })
}


button.addEventListener("click", showMenu)
