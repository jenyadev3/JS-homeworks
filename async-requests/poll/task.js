const answersContainer = document.querySelector(".poll__answers");
const title = document.querySelector(".poll__title");

function loadpoll() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll", true);
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        const responseData = JSON.parse(xhr.responseText);
        const answers = responseData.data.answers;
        const question = responseData.data.title;
        title.textContent = question;
        answersContainer.innerHTML = "";

        answers.forEach((answer, index) => {
          const button = document.createElement("button");
          button.classList.add("poll__answer");
          button.textContent = answer;
          button.addEventListener("click", () => {
            results(responseData.id, index);
          })
          answersContainer.appendChild(button);
        });
     }
  }  

  xhr.onerror = function () {
    console.error("Ошибка запроса: " + xhr.status + xhr.statusText);
  }
  xhr.send(); 
}

function results(id, index) {
  const xhrPost = new XMLHttpRequest();
  xhrPost.open("POST", "https://students.netoservices.ru/nestjs-backend/poll");
  xhrPost.setRequestHeader( "Content-type", "application/x-www-form-urlencoded");

  xhrPost.onload = function() {
    if(xhrPost.status >= 200 && xhrPost.status < 300) {
      JSON.parse(xhrPost.responseText);
      alert("Спасибо, ваш голос засчитан!");
      loadpoll();
    } else {
      console.error("Ошибка запроса: " + xhrPost.status + xhrPost.statusText);
    }
  }

    xhrPost.onerror = function () {
      console.error("Ошибка запроса: " + xhr.status + xhr.statusText);
    }

    const params = `vote=${id}&answer=${index}`;
    xhrPost.send(params);
  }

loadpoll();

