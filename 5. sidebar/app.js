const navToggle = document.querySelector(".nav-toggle");
const aside = document.querySelector("aside");
const closeBtn = document.querySelector("aside .close-btn");

navToggle.addEventListener("click", function() {
  aside.classList.toggle("open");
});
closeBtn.addEventListener("click", function() {
  aside.classList.remove("open");
});
