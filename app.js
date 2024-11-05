import { apiKey } from './config.js';

async function getWeather() {
    const city = document.getElementById("city").value;
    console.log("API Key:", apiKey); // Mostrar la clave en la consola para verificar que esté presente

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

    try {
        const response = await fetch(url);
        console.log("Response status:", response.status); // Log para ver el estado de la respuesta

        if (!response.ok) throw new Error("Ciudad no encontrada");

        const data = await response.json();
        console.log("Data recibida:", data); // Verificar si los datos son correctos

        const weatherInfo = `
            <h2>Clima en ${data.name}</h2>
            <p>Temperatura: ${data.main.temp}°C</p>
            <p>Descripción: ${data.weather[0].description}</p>
            <p>Humedad: ${data.main.humidity}%</p>
        `;

        document.getElementById("weather-result").innerHTML = weatherInfo;
    } catch (error) {
        console.error("Error:", error.message); // Log de error
        document.getElementById("weather-result").innerHTML = `<p>${error.message}</p>`;
    }
}
