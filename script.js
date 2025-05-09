// const apiKey = "df213bac928435cf1db84c73386e6a0b";
// const apiUrl =
//   "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// async function checkWeather(city) {
//   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//   let data = await response.json();
//   console.log(data);
//   document.querySelector(".city").innerText = data.name;
//   document.querySelector(".temp").innerText =
//     Math.round(data.main.temp) + "°C";
//   document.querySelector(".humidity").innerText = data.humidity + "%";
//   document.querySelector(".wind").innerText = data.wind.speed + "km/h";
// }
// searchBtn.addEventListener("click", () => {
//   checkWeather();
// });
const apiKey = "df213bac928435cf1db84c73386e6a0b";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    return;
``  } else {
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
  let data = await response.json();
  console.log(data);
  document.querySelector(".city").innerText = data.name;
  document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerText = data.main.humidity + "%";
  document.querySelector(".wind").innerText = data.wind.speed + "km/h";
  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "assets/clouds.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "assets/rain.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "assets/snow.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "assets/mist.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "assets/drizzle.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "assets/clear.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
