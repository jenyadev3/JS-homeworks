const prevButton = document.querySelector(".slider__arrow_prev");
const nextButton = document.querySelector(".slider__arrow_next");
const pics = document.querySelectorAll(".slider__item");
const dots = document.querySelectorAll(".slider__dot");

function slider(position) {
  let newPosition = position;
  
  // Проверяем, чтобы позиция не выходила за пределы слайдера
  newPosition = newPosition < 0 ? pics.length - 1 : newPosition >= pics.length ? 0 : newPosition;

  const activePic = pics[newPosition];
  const activeDot = dots[newPosition];

  activePic.classList.add("slider__item_active");
  activeDot.classList.add("slider__dot_active");
  
  // Удаляем классы active у остальных слайдов и точек
  pics.forEach((pic, index) => {
    if (index !== newPosition) {
      pic.classList.remove("slider__item_active");
      dots[index].classList.remove("slider__dot_active");
    }
  });
}

// Находим активный слайд
const index = Array.from(pics).findIndex(pic =>
  pic.classList.contains("slider__item_active"));

slider(index);

prevButton.addEventListener("click", () => {
  const activeIndex = Array.from(pics).findIndex(pic =>
    pic.classList.contains("slider__item_active"));
  slider(activeIndex - 1);
});

nextButton.addEventListener("click", () => {
  const activeIndex = Array.from(pics).findIndex(pic =>
    pic.classList.contains("slider__item_active"));
  slider(activeIndex + 1);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slider(index);
  });
});


