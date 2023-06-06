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
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt*1000);
}




let apiKey = "b1b60e90e3e1e584041678da21127779";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Cape Town&appid=${apiKey}&units=metric`

axios.get(apiUrl).then(displayTemperature);
