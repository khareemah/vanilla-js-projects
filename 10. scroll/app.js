// fixed navbar and back to top button
const header = document.querySelector("header");
const backToTop = document.querySelector(".top");
window.addEventListener("scroll", function() {
  const headerHeight = header.getBoundingClientRect().height;
  if (window.pageYOffset > headerHeight) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }

  if (window.pageYOffset > 500) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// nav toggle
const navToggle = document.querySelector("header .nav-toggle");
const nav = document.querySelector("header .nav");
const ul = document.querySelector("header .nav ul");
navToggle.addEventListener("click", function() {
  const navHeight = nav.getBoundingClientRect().height;
  const ulHeight = ul.getBoundingClientRect().height;
  if (navHeight == 0) {
    nav.style.height = `${ulHeight}px`;
  } else {
    nav.style.height = 0;
  }
});

// smooth scroll
const links = document.querySelectorAll(".links");
links.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const href = link.getAttribute("href").slice(1);
    const target = document.querySelector(`#${href}`);
    const headerHeight = header.getBoundingClientRect().height;
    const navHeight = nav.getBoundingClientRect().height;
    let top = target.offsetTop - headerHeight;
    if (headerHeight > 82) {
      top = top + navHeight;
    }
    window.scrollTo({
      top: top,
      left: 0
    });
    nav.style.height = 0;
  });
});

// link.addEventListener("click", function (e) {
//   e.preventDefault();
//   // navigate to the specific link
//   const href = e.currentTarget.getAttribute("href").slice(1);
//   const target = document.getElementById(href);
//   const headerHeight = header.getBoundingClientRect().height;
//   const navHeight = nav.getBoundingClientRect().height;
//   let position = target.offsetTop - headerHeight;
//   if (headerHeight > 82) {
//     position = position + navHeight;
//   }
//   window.scrollTo({
//     left: 0,
//     top: position
//   });
//   nav.style.height = 0;
// });
