const cookie = document.querySelector(".clicker__cookie");
const amount = document.getElementById("clicker__counter");


cookie.onclick = function () {
  amount.textContent++;
  cookie.width = amount.textContent % 2 !== 0 ? 220 : 200;
}