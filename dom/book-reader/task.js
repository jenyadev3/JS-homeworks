const sizeButtons = document.querySelectorAll(".font-size");
const fontColorButtons = document.querySelectorAll(".book__control_color a");
const bgColorButtons = document.querySelectorAll(".book__control_background a")
const text = document.querySelector(".book__content");

const setSize = (event) => {
  event.preventDefault(); 
  const activeFontSizeButton = event.target; 

  sizeButtons.forEach(item => {
    const size = activeFontSizeButton.getAttribute("data-size"); 
    item.classList.toggle("font-size_active", item === activeFontSizeButton);
    text.classList.toggle("book_fs-small", size === "small");
    text.classList.toggle("book_fs-big", size === "big");
  })
}

const setFontColor = (event) => {
  event.preventDefault();
  const activeFontColorButton = event.target;

  fontColorButtons.forEach(item => {
    const fontColor = activeFontColorButton.getAttribute("data-text-color");
    item.classList.toggle("color_active", item === activeFontColorButton);
    text.classList.toggle("book_color-gray", fontColor === "gray");
    text.classList.toggle("book_color-whitesmoke", fontColor === "whitesmoke");
  })
}

const setBgColor = (event) => {
  event.preventDefault();
  const activeBgColorButton = event.target;

  bgColorButtons.forEach(item => {
    const backgroundColor = activeBgColorButton.getAttribute("data-bg-color");
    item.classList.toggle("color_active", item === activeBgColorButton);
    text.classList.toggle("book_bg-gray", backgroundColor === "gray");
    text.classList.toggle("book_bg-black", backgroundColor === "black");
  })
}

sizeButtons.forEach(item => item.addEventListener("click", setSize));
fontColorButtons.forEach(item => item.addEventListener("click", setFontColor));
bgColorButtons.forEach(item => item.addEventListener("click", setBgColor)); 
