document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

  
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    if(navMenu.classList.contains("show")) {
        menuToggle.textContent = "❌";
    } else{
        menuToggle.textContent = "☰";
    }
});

const temp = 43
const wind = 10

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

const trails = [
  {
    trailName: "Bolt",
    location: "Herriman, Utah",
    difficulty: "Advanced",
    type: "point-to-point",
    mapUrl: "https://www.trailforks.com/trails/bolt-837108/"
  },
  {
    trailName: "Copper Rise",
    location: "Herriman, Utah",
    difficulty: "Beginner",
    type: "point-to-point",
    mapUrl: "https://www.trailforks.com/trails/copper-rise/"
  },
  {
    trailName: "Apex",
    location: "Herriman, Utah",
    difficulty: "Intermediate",
    type: "point-to-point",
    mapUrl: "https://www.trailforks.com/trails/apex-757997/"
  },
  {
    trailName: "Bonanza Loop",
    location: "Midway, Utah",
    difficulty: "Intermediate",
    type: "loop",
    mapUrl: "https://www.trailforks.com/trails/bonanza-loop-trail/"
  },
  {
    trailName: "Chips Down",
    location: "Midway, Utah",
    difficulty: "Advanced",
    type: "point-to-point",
    mapUrl: "https://www.trailforks.com/trails/chips-down/"
  },
  {
    trailName: "Soldier Hollow - NICA Race Course",
    location: "Midway, Utah",
    difficulty: "Intermediate",
    type: "loop",
    mapUrl: "https://www.trailforks.com/route/nica-soldier-hollow-race-2023/"
  },
  {
    trailName: "Butterfield - NICA Race Course",
    location: "Herriman, Utah",
    difficulty: "beginner",
    type: "loop",
    mapUrl: "https://www.trailforks.com/route/nica-butterfield-race-course/"
  },
 {
    trailName: "Corner Canyon - Mid Week MTB Race",
    location: "Draper, Utah",
    difficulty: "Intermediate",
    type: "loop",
    mapUrl: "https://www.trailforks.com/route/2018-mid-week-mtb-race-4-corner-canyon/"
  },
 {
    trailName: "Richfield - NICA Race Course",
    location: "Richfield, Utah",
    difficulty: "Intermediate",
    type: "loop",
    mapUrl: "https://www.trailforks.com/route/richfield-nica-race-course/"
  },
  {
    trailName: "Vertigo",
    location: "Draper, Utah",
    difficulty: "Intermediate",
    type: "point-to-point",
    mapUrl: "https://www.trailforks.com/trails/vertigo-74682/"
  },
  {
    trailName: "Spinal Tap: The Full Epidural",
    location: "Richfield, Utah",
    difficulty: "Advanced",
    type: "shuttle",
    mapUrl: "https://www.trailforks.com/route/spinal-tap-the-full-epidural/"
  },
  {
    trailName: "VertigoWasatch Crest to Mill D",
    location: "Brighton, Utah",
    difficulty: "Intermediate",
    type: "shuttle",
    mapUrl: "https://www.trailforks.com/route/wasatch-crest-to-mill-d-shuttle-ride/"
  },
  {
    trailName: "Rattle and Hum - Beginner WomenMTB",
    location: "Lehi, Utah",
    difficulty: "Beginner",
    type: "loop",
    mapUrl: "https://www.trailforks.com/route/womenmtb-beginner-ride-rattle-and-hum/"
  },
];