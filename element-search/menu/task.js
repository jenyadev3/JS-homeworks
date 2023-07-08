const links = document.querySelectorAll(".menu__link");
const menu = document.querySelectorAll(".menu_sub");
const menuItem = document.querySelectorAll(".menu__item")

links.forEach(link => {
   link.onclick = function () { 
    const parentItem = link.closest(".menu__item"); 
    const hasMenu = parentItem.querySelector(".menu_sub");

    if (hasMenu) { 
      menu.forEach(item => item.classList.remove("menu_active")); 
      hasMenu.classList.add("menu_active");
      return false;
    }
   }
})