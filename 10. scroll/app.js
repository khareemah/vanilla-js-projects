// fixed navbar

window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  const headerHeight = header.getBoundingClientRect().height;
  const topBtn = document.querySelector("a.top");

  if (window.pageYOffset > headerHeight) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }

  if (window.pageYOffset > 500) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

// nav toggle
const navToggle = document.querySelector("header .nav-toggle");
const nav = document.querySelector("header .nav");
const ul = document.querySelector("header .nav ul");
navToggle.addEventListener("click", function() {
  navToggle.classList.toggle("rotate");
  const navHeight = nav.getBoundingClientRect().height;
  const ulHeight = ul.getBoundingClientRect().height;
  if (navHeight === 0) {
    nav.style.height = ulHeight + "px";
  } else {
    nav.style.height = 0;
  }
});
// smooth scroll
const links = document.querySelectorAll(".links");
links.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href").slice(1);
    const target = document.getElementById(href);
    const position = target.offsetTop;
    window.scrollTo({
      left: 0,
      top: position
    });
    nav.style.height = 0;
  });
});
