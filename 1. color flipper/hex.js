const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("main .btn");
const colorValue = document.querySelector("main .banner span");
btn.addEventListener("click", changeColor);
function changeColor() {
  let backgroundColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * colors.length);
    backgroundColor += colors[randomNumber];
  }
  colorValue.innerHTML = backgroundColor;
  document.body.style.backgroundColor = backgroundColor;
}
