const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector("main .btn");
const colorValue = document.querySelector("main .banner span");
btn.addEventListener("click", changeColor);
function changeColor() {
  const randomNumber = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomNumber];
  colorValue.textContent = colors[randomNumber];
}
