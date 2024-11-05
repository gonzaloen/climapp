async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "9c54ae518f01b4a75caf7490c67ff151"; // Aquí está tu API Key directamente
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Ciudad no encontrada");

        const data = await response.json();
        const weatherInfo = `
            <h2>Clima en ${data.name}</h2>
            <p>Temperatura: ${data.main.temp}°C</p>
            <p>Descripción: ${data.weather[0].description}</p>
            <p>Humedad: ${data.main.humidity}%</p>
        `;

        document.getElementById("weather-result").innerHTML = weatherInfo;
    } catch (error) {
        document.getElementById("weather-result").innerHTML = `<p>${error.message}</p>`;
    }
}
