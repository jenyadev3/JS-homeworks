const elements = document.querySelectorAll(".rotator__case");
let activeIndex = 0;

function setActiveClass(currentItem) {
    
  const color = currentItem.getAttribute("data-color");

  Array.from(elements).forEach((item) => {
    item.classList.remove("rotator__case_active");
  })

  currentItem.classList.add("rotator__case_active");
  currentItem.style.color = color;

  activeIndex = (activeIndex + 1) % elements.length;
}


function setRotator() {
  const currentItem = elements[activeIndex];
  const speed = currentItem.getAttribute("data-speed");
  setTimeout(() => {
    setActiveClass(currentItem);
    setRotator();
  }, speed);
}
  
setRotator(elements[activeIndex])
