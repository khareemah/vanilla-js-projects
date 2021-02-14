const slides = document.querySelectorAll(".slider");
slides.forEach((slide, index) => {
  slide.style.left = `${100 * index}%`;
});
