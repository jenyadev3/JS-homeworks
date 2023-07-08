const links = document.querySelectorAll(".menu__link");
const menu = document.querySelectorAll(".menu_sub");
const menuItem = document.querySelectorAll(".menu__item")

links.forEach(link => {
   link.onclick = function () { 
    const parentItem = link.closest(".menu__item"); 
    const hasMenu = parentItem.querySelector(".menu_sub");

    if (hasMenu) { 
      hasMenu.classList.toggle("menu_active");
      return false;
    }
  }
})