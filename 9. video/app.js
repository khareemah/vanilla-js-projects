const btn = document.querySelector(".btn");
const control = document.querySelector(".btn .switch");
const video = document.querySelector(".video-container video");

btn.addEventListener("click", function() {
  control.classList.toggle("pause");
  console.log(control.classList.contains("pause"));
  if (control.classList.contains("pause")) {
    video.pause();
  } else {
    video.play();
  }
});

window.addEventListener("load", function() {
  document.querySelector(".preloader").classList.add("loaded");
});
