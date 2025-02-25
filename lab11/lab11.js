const container = document.querySelector('.weather_data');
const input = document.querySelector("#cityInput");
let apiKey = "87555796a57303a6e7571d6ad0e49103";
const table = document.querySelector("body");


input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        getWeather();
    }
});


async function getWeather() {
    let city = input.value;
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`);
        let data = await res.json();

        let temp = data.main.temp;
        container.innerHTML = `
            <h2 class="country">${data.name}</h2>
            <p class="temp">Температура: ${temp}°C</p>
            <p class="hum">Влажность: ${data.main.humidity}%</p>
            <p class="wind">Скорость ветра: ${data.wind.speed} м/с</p>
        `;

        updateWeatherUI(temp);
    
}

function updateWeatherUI(temp) {
    table.classList.remove("hot", "warm", "cool", "cold");

    if (temp >= 25) {
        table.classList.add("hot");
    } else if (temp >= 15) {
        table.classList.add("warm");
    } else if (temp >= 5) {
        table.classList.add("cool");
    } else {
        table.classList.add("cold");
    }
}