function formatDate(timestamp) {
   let date = new Date(timestamp);
   let hours = date.getHours();
   let minutes = date.getMinutes();
   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   let day = days[date.getDay()];
   return `${day} ${hours}:${minutes}`;
}



function displayTemperature(response) {
  console.log(response.date.main.temp); 
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt*1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x,png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
 let apiKey = "b1b60e90e3e1e584041678da21127779";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
 axios.get(apiUrl).then(displayTemperature);
    
}

function handleSybmit(event) {
event.preventDefault();
let cityElement = document.querySelector("#city-input");
search(cityInputElement.value);

}

function displayFahrenheitTemperature(event) {
 event.preventDefault(); 
 let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
 let temperatureElement = document.querySelector("#temperature")
 temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

let celsiusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSybmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);
search("Cape Town")