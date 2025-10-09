const formContainer = document.querySelector(".form-content");
const thankYou = document.querySelector(".thank-you");

if (formContainer && thankYou) {
  formContainer.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    formContainer.classList.add("hidden");
    thankYou.classList.add("show");
  });
}
