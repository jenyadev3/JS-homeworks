const loader = document.querySelector(".loader");
const itemsContainer = document.getElementById("items");
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses", true);

xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    const responseData = JSON.parse(xhr.responseText);
    const valuteData = responseData.response.Valute;
    
    Object.values(valuteData).forEach(valute => {
      const charCode = valute.CharCode;
      const value = valute.Value;

      const item = document.createElement("div");
      item.classList.add("item");
      item.innerHTML = `
        <div class="item__code">${charCode}</div>
        <div class="item__value">${value}</div>
        <div class="item__currency">руб.</div>
      `;
      itemsContainer.appendChild(item);
    });

    loader.classList.remove("loader_active");
  } else {
    console.log("Ошибка запроса: " + xhr.status + xhr.statusText);
  }
};

xhr.onerror = function() {
  loader.classList.remove("loader_active");
};

loader.classList.add("loader_active");

xhr.send();

/* Используя fetch:

const loader = document.querySelector(".loader");
const itemsContainer = document.getElementById("items");

fetch("https://students.netoservices.ru/nestjs-backend/slow-get-courses")
  .then(response => response.json())
  .then(data => {
    const valuteData = data.response.Valute;

    itemsContainer.innerHTML = Object.keys(valuteData).map(key => {
      const valute = valuteData[key];
      return `
        <div class="item">
          <div class="item__code">${valute.CharCode}</div>
          <div class="item__value">${valute.Value}</div>
          <div class="item__currency">руб.</div>
        </div>
      `;
    }).join("");

    loader.classList.remove("loader_active");
  })
  .catch(error => {
    console.log("Ошибка при загрузке данных: " + error.message);
    loader.classList.remove("loader_active");
  });

loader.classList.add("loader_active"); */