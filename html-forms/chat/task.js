const chatBtn = document.querySelector(".chat-widget");
const input = document.querySelector("input");
const chat = document.querySelector(".chat-widget__messages"); 

chatBtn.addEventListener("click", () => {
  chatBtn.classList.add("chat-widget_active");
})

document.addEventListener("keydown", evt => {
   if(evt.keyCode === 13 && input.value.trim() !== "") {
    const text = input.value;
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const userChatMessage = `
    <div class="message message_client">
    <div class="message__time">${hours}:${minutes}</div>
    <div class="message__text">${text}</div>
    </div>`;
    
    chat.insertAdjacentHTML('beforeend', userChatMessage);
    input.value = "";

    const botMessages = ["Добрый день, мы ещё не проснулись. Позвоните через 10 лет", 
    "Кто тут?", "Где ваша совесть?", "Мы ничего не будем вам продавать!", "К сожалению, все операторы сейчас заняты. Не пишите нам больше"];
   
    const index = Math.floor(Math.random() * botMessages.length);
    const botMessage = botMessages[index];

    const botChatMessage = `
    <div class="message">
    <div class="message__time">${hours}:${minutes}</div>
    <div class="message__text">${botMessage}</div>
    </div>`;

    chat.insertAdjacentHTML('beforeend', botChatMessage);
   }
});
