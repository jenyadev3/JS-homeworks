let activeTooltip = null;

const elements = document.querySelectorAll(".has-tooltip");

elements.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();

    if (activeTooltip) {
      activeTooltip.classList.remove("tooltip_active");
      activeTooltip = null;
      return;
    }

    const text = item.getAttribute("title");
    const tooltip = `<div class="tooltip">${text}</div>`;
    item.insertAdjacentHTML("afterend", tooltip);
    const tooltipElement = item.nextSibling;
    tooltipElement.classList.add("tooltip_active");
    const position = item.getBoundingClientRect();
    tooltipElement.style.left = `${position.left}px`;
    tooltipElement.style.top = `${position.bottom}px`;

    activeTooltip = tooltipElement;
  });
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!target.classList.contains("has-tooltip")) {
    if (activeTooltip) {
      activeTooltip.classList.remove("tooltip_active");
      activeTooltip = null;
    }
  }
});