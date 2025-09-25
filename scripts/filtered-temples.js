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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
 {
    templeName: "Oquirrh Mountain Utah",
    location: "South Jordan, Uath",
    dedicated: "2009, August, 21-23",
    area: 60000,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/b46172590e39dff0cb70a5dcb243bd90febcccf8/full/1920%2C/0/default"
  },
  {
    templeName: "Idaho Falls",
    location: "Idaho Falls, Idaho",
    dedicated: "1945, September, 23-25",
    area: 85624,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/4bf9d39bb528bad9ce09a57058c2ceffc2f37cbb/full/1920%2C/0/default"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April, 6-24",
    area: 382207,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/2f60566ed51b9c12b35cbc571b85089d4245c9e5/full/1920%2C/0/default"
  },
];

const heading = document.querySelector("main h2");
const gallery = document.querySelector(".gallery");

function createTempleCard(templeArray) {
    gallery.innerHTML = "";

    templeArray.forEach(temple => {
        let card = document.createElement("section");

        let name = document.createElement("h3");
        name.textContent = temple.templeName;

        let location = document.createElement("p");
        location.innerHTML = `<span class = "label">Location:</span> ${temple.location}`;

        let dedicated = document.createElement("p");
        dedicated.innerHTML = `<span class = "label">Dedicated:</span> ${temple.dedicated}`;

        let area = document.createElement("p");
        area.innerHTML = `<span class = "label"> Area:</span> ${temple.area.toLocaleString()} sq ft`;

        let img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} Temple`;
        img.loading = "lazy";

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        gallery.appendChild(card);
    });
}

function filteredTemples(criteria) {
    let filtered = [];

    switch (criteria) {
        case "old":
            filtered = temples.filter(t => parseInt(t.dedicated) < 1900);
            heading.textContent = "Old Temples";
            break;
        case "new":
            filtered = temples.filter(t => parseInt(t.dedicated) > 2000);
            heading.textContent = "New Temples";
            break;
        case "large":
            filtered = temples.filter(t => t.area > 90000);
            heading.textContent = "Large Temples";
            break;
        case "small":
            filtered = temples.filter(t => t.area < 10000);
            heading.textContent = "Small Temples";
            break;
        case "home":
        default:
            filtered = temples;
            heading.textContent = "All Temples";
    }

    createTempleCard(filtered);
}

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        document.querySelectorAll(".nav-menu a").forEach(link => link.classList.remove("active"));
        link.classList.add("active");

        filteredTemples(link.textContent.toLowerCase());
    });
});

createTempleCard(temples);

