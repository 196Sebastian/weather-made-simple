const apiKey = "f6480f568f3c6737afa1179ee96aac4d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const userInput = document.querySelector(".search-section input");
const buttonSearch = document.querySelector(".search-section button");

async function checkWeather(city) {
  const response = await fetch(`${apiUrl} ${city} &appid=${apiKey}`);
  var data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
  document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°c`;
  document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
}

buttonSearch.addEventListener("click", () => {
  checkWeather(userInput.value);
})