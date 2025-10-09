document.getElementById("signup-form").addEventListener("submit", function(e) {
  e.preventDefault();

  this.style.display = "none";

  document.querySelector(".thank-you").style.display = "block";
});
