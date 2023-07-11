const elements = document.querySelectorAll(".reveal");

function showBlock() {
  elements.forEach(element => {
    const block = element.getBoundingClientRect();
    const innerHeight = window.innerHeight;
    const innerWidth = window.innerWidth;   

    if (block.top >= 0 && block.left >= 0 && block.bottom <= innerHeight && block.right <= innerWidth) {
        element.classList.add("reveal_active");
      }
  })
}

window.addEventListener("scroll", showBlock);