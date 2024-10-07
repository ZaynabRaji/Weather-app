function getWeather(){
    const city = document.getElementById('city').value;
    const Apikey = 'fbe2fd7ab7819a343015d62b896d8804';
    const ApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={fbe2fd7ab7819a343015d62b896d8804}';
    
    fetch(ApiUrl)
    .then(response => {
        if (!response.ok) {
          throw new Error('Not found');
        }
        return response.json();
      })
    .then(data => {
        const weatherInfo = `
      <h2>Weather in ${data.name}</h2>
      <p><img src="cloud.png" alt="cloud and sun"/> ${data.main.temp}°C</p>
      <p>Weather : ${data.weather[0].description}</p>
      <p>Wind : ${data.wind.speed} km/h</p>
      <p>Humidity : ${data.main.humidity} %</p>
    `;
    document.getElementById('weatherinfo').innerHTML = weatherInfo;
    })

    .catch(error => {
        document.getElementById('weatherInfo').innerHTML = `<p>${error.message}</p>`;
        // console.error('Erreur :', error);
      });
}
