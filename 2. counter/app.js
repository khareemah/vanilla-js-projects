const counterValue = document.querySelector("main .value");
const btns = document.querySelectorAll("main .btn");
let counter = 0;
btns.forEach(btn => {
  btn.addEventListener("click", function() {
    if (btn.classList.contains("increase")) {
      counter++;
    } else if (btn.classList.contains("decrease")) {
      counter--;
    } else {
      counter = 0;
    }
    if (counter < 0) {
      counterValue.style.color = "red";
    } else if (counter > 0) {
      counterValue.style.color = "green";
    } else {
      counterValue.style.color = "hsl(209, 61%, 16%)";
    }
    counterValue.textContent = counter;
  });
});
