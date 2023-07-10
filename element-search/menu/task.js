const links = document.querySelectorAll(".menu__link");

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
