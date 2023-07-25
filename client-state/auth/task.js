const button = document.getElementById("signin__btn");
const form = document.getElementById("signin__form");
const welcome = document.getElementById("welcome");
const user = document.getElementById("user_id");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const loginData = {login: form.login.value, password: form.password.value};
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  
  xhr.onload = function() {
    if(xhr.status >= 200 && xhr.status < 300) {
      const response = JSON.parse(xhr.responseText);
      if(response.success) {
        const userId = response.user_id;
        localStorage.setItem("id", userId)
        user.textContent = userId;
        welcome.classList.add("welcome_active");
        form.style.display = "none";
      } else {
        alert("Неверный логин/пароль");
      }
    } else {
       alert("Ошибка авторизации");
  }
};

xhr.send(JSON.stringify(loginData));
});
