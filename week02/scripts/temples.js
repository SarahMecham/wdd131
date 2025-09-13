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