document.querySelector("#newsletter-form form").addEventListener("submit", function(e) {
  e.preventDefault();

  this.style.display = "none";
  document.querySelector("#newsletter-form .thank-you").style.display = "block";
});
