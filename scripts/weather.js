const tempEl = document.getElementById("temp");
const conditionsEl = document.getElementById("conditions");
const windEl = document.getElementById("wind");
const windChillEl = document.getElementById("windChill");

if (tempEl && conditionsEl && windEl && windChillEl) {
  const temp = 43;
  const wind = 10;

  tempEl.textContent = `${temp} ℉`;
  conditionsEl.textContent = `Partly Cloudy`;
  windEl.textContent = `N ${wind} MPH`;

  function calculateWindChill(temperature, windSpeed) {
    return (
      35.74 +
      0.6215 * temperature -
      35.75 * Math.pow(windSpeed, 0.16) +
      0.4275 * temperature * Math.pow(windSpeed, 0.16)
    );
  }

  windChillEl.textContent =
    temp <= 50 && wind > 3
      ? `${Math.round(calculateWindChill(temp, wind))} ℉`
      : "N/A";
}
