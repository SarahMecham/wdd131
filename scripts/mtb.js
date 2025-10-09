// -------------------- Footer Date --------------------
const yearEl = document.getElementById("currentyear");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const lastModifiedEl = document.getElementById("lastModified");
if (lastModifiedEl) {
  lastModifiedEl.textContent = `Last Modified: ${document.lastModified}`;
}

// -------------------- Mobile Menu --------------------
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    menuToggle.textContent = navMenu.classList.contains("show") ? "❌" : "☰";
  });
}
