const slides = document.querySelectorAll(".slider");
slides.forEach((slide, index) => {
  slide.style.left = `${100 * index}%`;
});

const prev = document.querySelector("button.prev");
const next = document.querySelector("button.next");
let counter = 0;
next.addEventListener("click", function() {
  counter++;
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${100 * counter})%`;
  });
});
