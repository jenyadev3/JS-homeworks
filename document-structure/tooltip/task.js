let activeTooltip = null;

const elements = document.querySelectorAll(".has-tooltip");

elements.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();

    if (activeTooltip) {
      if (activeTooltip.innerText === item.title) {
        activeTooltip.classList.toggle("tooltip_active");
        return;
      } else {
        activeTooltip.classList.remove("tooltip_active");
      }
    }

    const text = item.title;
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.innerText = text;
    document.body.appendChild(tooltip); 

    const position = item.getBoundingClientRect();
    tooltip.style.left = `${position.left}px`;
    tooltip.style.top = `${position.bottom}px`;

    activeTooltip = tooltip;
    activeTooltip.classList.add("tooltip_active");
  });
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!target.classList.contains("has-tooltip")) {
    if (activeTooltip) {
      activeTooltip.classList.remove("tooltip_active");
      document.body.removeChild(activeTooltip);
      activeTooltip = null;
    }
  }
});