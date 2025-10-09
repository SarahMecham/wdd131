const newsletterForm = document.getElementById("newsletter-form");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault();
    this.innerHTML = "<h3>Thank you for subscribing! 🎉</h3>";
  });
}
