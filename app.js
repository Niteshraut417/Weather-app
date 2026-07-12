const apiKey = "YOUR_API_KEY"; // Get this from OpenWeatherMap
document.getElementById('searchBtn').addEventListener('click', async () => {
    const city = document.getElementById('cityInput').value;
    const display = document.getElementById('weatherDisplay');

    if (!city) return;

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        
        if (!response.ok) throw new Error("City not found");
        
        const data = await response.json();
        
        display.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        display.innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
});
