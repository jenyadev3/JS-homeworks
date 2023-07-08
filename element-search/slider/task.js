const prevButton = document.querySelector(".slider__arrow_prev");
const nextButton = document.querySelector(".slider__arrow_next");
const pics = document.querySelectorAll(".slider__item");
const dots = document.querySelectorAll(".slider__dot");
let currentIndex = 0;

pics[currentIndex].classList.add("slider__item_active");

prevButton.onclick = () => {
  pics[currentIndex].classList.remove("slider__item_active");
  currentIndex = (currentIndex - 1 + pics.length) % pics.length;
  pics[currentIndex].classList.add("slider__item_active");
}

nextButton.onclick = () => {
  pics[currentIndex].classList.remove("slider__item_active");
  currentIndex = (currentIndex + 1) % pics.length;
  pics[currentIndex].classList.add("slider__item_active");
}

dots.forEach((dot, index) => {
  dot.onclick = () => {
    pics[currentIndex].classList.remove("slider__item_active");
    currentIndex = index;
    pics[currentIndex].classList.add("slider__item_active");
  }
})