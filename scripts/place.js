const temp = 43
const wind = 10

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

document.getElementById("temp").textContent = `${temp} ℉`;
document.getElementById("conditions").textContent = `Partly Cloudy`;
document.getElementById("wind").textContent = `N ${wind} MPH`

function calculateWindChill(temperature, windSpeed) {
    return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
}

let windChillDisplay;

if (temp <= 50 && wind > 3) {
    windChillDisplay = `${Math.round(calculateWindChill(temp, wind))} ℉`;
} else {
    windChillDisplay = "N/A";
}

document.getElementById("windChill").textContent = windChillDisplay;

