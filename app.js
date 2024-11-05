export async function getWeather() {
    try {
        const city = document.getElementById("city").value.trim();
        const apiKey = process.env.NEXT_PUBLIC_API_KEY; // Leer desde la variable de entorno
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

        console.log("URL de solicitud:", url); // Log para verificar la URL

        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error("Ciudad no encontrada o problema con la solicitud");
        }

        const data = await response.json();
        console.log("Data recibida:", data); // Log de los datos obtenidos

        const weatherInfo = `
            <h2>Clima en ${data.name}</h2>
            <p>Temperatura: ${data.main.temp}°C</p>
            <p>Descripción: ${data.weather[0].description}</p>
            <p>Humedad: ${data.main.humidity}%</p>
        `;

        document.getElementById("weather-result").innerHTML = weatherInfo;
    } catch (error) {
        console.error("Error al obtener el clima:", error.message); // Log del error en consola
        document.getElementById("weather-result").innerHTML = `<p>Error: ${error.message}</p>`;
    }
}
