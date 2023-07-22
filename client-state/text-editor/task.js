const textarea = document.querySelector("textarea");
const button = document.querySelector("button");

textarea.value = localStorage.getItem("savedText") || "";

textarea.addEventListener("input", () => {
  localStorage.setItem("savedText", textarea.value);
})

button.addEventListener("click", () => {
  localStorage.removeItem("savedText");
  textarea.value = "";
})
