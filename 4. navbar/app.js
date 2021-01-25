const navToggle = document.querySelector("header .nav-toggle");
const nav = document.querySelector("header .nav");
navToggle.addEventListener("click", function() {
  nav.classList.toggle("open");
  navToggle.classList.toggle("rotate");
});
