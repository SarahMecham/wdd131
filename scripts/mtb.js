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

    if (navMenu.classList.contains("show")) {
      menuToggle.textContent = "❌";
    } else {
      menuToggle.textContent = "☰";
    }
  });
}

const subMenuToggle = document.querySelector(".sub-menu-toggle");
const subNavMenu = document.querySelector(".sub-nav-menu");

if (subMenuToggle && subNavMenu) {
  subMenuToggle.addEventListener("click", () => {
    subNavMenu.classList.toggle("show");

    if (subNavMenu.classList.contains("show")) {
      subMenuToggle.textContent = "❌";
    } else {
      subMenuToggle.textContent = "☰";
    }
  });
}