// ----------------- Sub-menu section -------------------

const subMenuToggle = document.querySelector(".sub-menu-toggle");
const subNavMenu = document.querySelector(".sub-nav-menu");

if (subMenuToggle && subNavMenu) {
  subMenuToggle.addEventListener("click", () => {
    subNavMenu.classList.toggle("show");
    subMenuToggle.textContent = subNavMenu.classList.contains("show") ? "❌" : "☰";
  });
}

// -------------------- Trails Section --------------------
const heading = document.querySelector("main h2");
const trailContainer = document.querySelector(".trail-maps");

if (trailContainer) {
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
      difficulty: "Beginner",
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
      trailName: "Wasatch Crest to Mill D",
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
    }
  ];

  function createTrailCard(trailArray) {
    trailContainer.innerHTML = "";

    trailArray.forEach(trail => {
      let card = document.createElement("section");

      let name = document.createElement("h3");
      name.textContent = trail.trailName;

      let location = document.createElement("p");
      location.innerHTML = `<span class="label">Location:</span> ${trail.location}`;

      let difficulty = document.createElement("p");
      difficulty.innerHTML = `<span class="label">Difficulty:</span> ${trail.difficulty}`;

      let type = document.createElement("p");
      type.innerHTML = `<span class="label">Trail Type:</span> ${trail.type}`;

      let mapLink = document.createElement("a");
      mapLink.href = trail.mapUrl;
      mapLink.textContent = "View Map";
      mapLink.target = "_blank";

      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(difficulty);
      card.appendChild(type);
      card.appendChild(mapLink);

      trailContainer.appendChild(card);
    });
  }

  function filteredTrail(criteria) {
    let filtered = [];

    switch (criteria) {
      case "advanced":
        filtered = trails.filter(t => t.difficulty.toLowerCase() === "advanced");
        heading.textContent = "Advanced Trails";
        break;
      case "intermediate":
        filtered = trails.filter(t => t.difficulty.toLowerCase() === "intermediate");
        heading.textContent = "Intermediate Trails";
        break;
      case "beginner":
        filtered = trails.filter(t => t.difficulty.toLowerCase() === "beginner");
        heading.textContent = "Beginner Trails";
        break;
      case "point-to-point":
        filtered = trails.filter(t => t.type.toLowerCase() === "point-to-point");
        heading.textContent = "Point-to-Point Trails";
        break;
      case "shuttle":
        filtered = trails.filter(t => t.type.toLowerCase() === "shuttle");
        heading.textContent = "Shuttle Trails";
        break;
      case "loop":
        filtered = trails.filter(t => t.type.toLowerCase() === "loop");
        heading.textContent = "Loop Trails";
        break;
      case "all":
      default:
        filtered = trails;
        heading.textContent = "All Trails";
    }

    createTrailCard(filtered);
  }

  document.querySelectorAll(".sub-nav-menu a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      document
        .querySelectorAll(".sub-nav-menu a")
        .forEach(link => link.classList.remove("active"));
      link.classList.add("active");

      filteredTrail(link.textContent.toLowerCase());
    });
  });

  createTrailCard(trails);
}

const form = document.getElementById("newsletter-form");

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    this.innerHTML = "<h3>Thank you for subscribing! 🎉</h3>";
  });
}