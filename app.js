export async function getWeather() {
    try {
        const city = document.getElementById("city").value.trim();
        const apiKey = "9c54ae518f01b4a75caf7490c67ff151"; // Usar directamente la clave API aquí
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error("Ciudad no encontrada o problema con la solicitud");
        }

        const data = await response.json();

        const weatherInfo = `
            <h2>Clima en ${data.name}</h2>
            <p>Temperatura: ${data.main.temp}°C</p>
            <p>Descripción: ${data.weather[0].description}</p>
            <p>Humedad: ${data.main.humidity}%</p>
        `;

        document.getElementById("weather-result").innerHTML = weatherInfo;
    } catch (error) {
        console.error("Error al obtener el clima:", error.message);
        document.getElementById("weather-result").innerHTML = `<p>Error: ${error.message}</p>`;
    }
}
