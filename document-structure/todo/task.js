const list = document.querySelector(".tasks__list");
const input = document.querySelector(".tasks__input");
const addButton = document.querySelector(".tasks__add");

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  
  if (text !== "") { 
    const newTask = `<div class="task">
      <div class="task__title">
        ${text}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>`;
    list.insertAdjacentHTML("beforeend", newTask);
    input.value = "";
  }
});

list.addEventListener("click", (event) => {
  if (event.target.classList.contains("task__remove")) {
    event.target.closest(".task").remove(); 
  }  
});

