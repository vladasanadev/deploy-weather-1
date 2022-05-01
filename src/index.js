function formatedDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day} ${hours}:${minutes}`;
}

let currentTimeDate = document.querySelector("#currentDate");
let currentTime = new Date();

currentTimeDate.innerHTML = formatedDate(currentTime);

///

function showTemperature(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#DayTemperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#Humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#real-feel").innerHTML = Math.round(
    response.data.main.feels_like
  );
}

function searchCity(city) {
  let apiKey = "c00315bc8e5475ad20314024ada12a35";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units="metric"`;
  axios.get(apiUrl).then(showTemperature);
}

function ShowCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input");
  let cityName = document.querySelector(".data.main.name");
  cityName = input.value;
  searchCity(city);
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  console.log(position);
  let apiKey = "c00315bc8e5475ad20314024ada12a35";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units="metric"`;
  axios.get(apiUrl).then(showTemperature);
}

function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", ShowCity);
let CurentButton = document.querySelector("#current-location-button");
CurentButton.addEventListener("click", getCurrentPosition);
searchCity("Vilnius");
///
function convertToFarenheit(event) {
  event.preventDefault();
  let DayTemperature = document.querySelector("#DayTemperature");
  DayTemperature.innerHTML = 47;
}

function convertToCelciusDay(event) {
  event.preventDefault();
  let DayTemperature = document.querySelector("#DayTemperature");
  DayTemperature.innerHTML = 7;
}
