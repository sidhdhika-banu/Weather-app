
document.getElementById('search-btn').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    const apiKey = 'b9283d16da885f55d3558909ea0f6a3a'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching data:', error));
});
function displayWeather(data) {
    if (data.cod === 200) {
        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; // Get the icon URL

        const weatherInfo = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <img src="${iconUrl}" alt="${data.weather[0].description}" /> <!-- Weather icon -->
            <h3>${data.weather[0].main}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Feels Like: ${data.main.feels_like}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
        document.getElementById('weather-info').innerHTML = weatherInfo; // Update HTML
    } else {
        document.getElementById('weather-info').innerHTML = `<p>City not found.</p>`;
    }
}

