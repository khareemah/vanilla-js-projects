const slides = document.querySelectorAll(".slider");
slides.forEach((slide, index) => {
  slide.style.left = `${100 * index}%`;
});

// prev and next image pagination
const prev = document.querySelector("button.prev");
const next = document.querySelector("button.next");
let counter = 0;
next.addEventListener("click", function() {
  counter++;
  showNext();
});
prev.addEventListener("click", function() {
  counter--;
  showNext();
});

function showNext() {
  // if (counter < 0) counter = slides.length - 1;
  // if (counter == slides.length) counter = 0;

  if (counter > 0) {
    prev.style.display = "inline-block";
  } else {
    prev.style.display = "none";
  }
  if (counter >= slides.length - 1) {
    next.style.display = "none";
  } else {
    next.style.display = "inline-block";
  }
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${100 * counter}%)`;
  });
}
