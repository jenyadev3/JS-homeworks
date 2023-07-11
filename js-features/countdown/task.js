const timer = function() {
    const timerId = document.getElementById("timer");
    let time = timerId.textContent;
    time--;
        
    timerId.textContent = time;
    
    if (time <= 0) {
      clearInterval(intervalId);
      alert("Вы победили в конкурсе!");
  
      const fileUrl = "https://www.google.com/";
      window.location.href = fileUrl;
   }
  }    
  const intervalId = setInterval(timer, 1000);