const elements = document.querySelectorAll(".has-tooltip");

elements.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const text = item.getAttribute("title");
    const tooltip = `<div class="tooltip">${text}</div>`;   
    item.insertAdjacentHTML("afterend", tooltip);
    const tooltipElement = item.nextSibling;
    tooltipElement.classList.toggle("tooltip_active");
    const position = item.getBoundingClientRect();
    tooltipElement.style.left = `${position.left}px`;
    tooltipElement.style.top = `${position.bottom}px`;
  })
})