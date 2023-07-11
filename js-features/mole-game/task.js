const holes = document.querySelectorAll(".hole");
const win = document.getElementById("dead");
const loss = document.getElementById("lost");

holes.forEach(hole => {
  hole.onclick = function () {
    hole.className.includes("hole_has-mole") ? win.textContent++ : loss.textContent++;
    if (parseInt(win.textContent) === 10 || parseInt(loss.textContent) === 5) {
      alert(parseInt(win.textContent) === 10 ? "Вы выиграли!" : "Вы проиграли!");
      win.textContent = 0;
      loss.textContent = 0;
     } 
   }
 }); 
