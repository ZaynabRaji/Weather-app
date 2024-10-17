const Apikey = 'fbe2fd7ab7819a343015d62b896d8804';
const ApiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

async function getWeather(city) {
  const response = await fetch(`${ApiUrl}?q=${city}&appid=${Apikey}&units=metric`);
  // const response = await fetch(ApiUrl + Apikey);
  var data = await response.json();

  if (response.ok) {
  const weatherInfo = `
      <h2>Weather in ${data.name}</h2>
      <p><img src="cloud.png" alt="cloud and sun"/> ${data.main.temp}°C</p>
      <p>Weather : ${data.weather[0].description}</p>
      <p>Wind : ${data.wind.speed} km/h</p>
      <p>Humidity : ${data.main.humidity} %</p>
    `;
    document.getElementById('weatherInfo').innerHTML = weatherInfo;
  } else {
    document.getElementById('weatherInfo').innerHTML = `<p>City not found, please try again.</p>`;
  }
}

searchBtn.addEventListener("click", ()=>{
  getWeather(searchInput.value);
});
  
