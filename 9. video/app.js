const btn = document.querySelector(".btn");
const control = document.querySelector(".btn .switch");
const video = document.querySelector(".video-container video");

console.log(btn, video);
btn.addEventListener("click", function() {
  if (control.classList.contains("slide")) {
    control.classList.remove("slide");
    video.play();
  } else {
    control.classList.add("slide");
    video.pause();
  }
});
window.addEventListener("load", function() {
  document.querySelector(".preloader").classList.add("loaded");
});
