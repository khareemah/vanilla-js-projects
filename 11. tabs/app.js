const btns = document.querySelectorAll(".btn-container .btn");
const texts = document.querySelectorAll("div.text");
btns.forEach(btn => {
  btn.addEventListener("click", function(e) {
    btns.forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    const attr = e.target.getAttribute("data-id");
    texts.forEach(text => {
      if (attr == text.id) {
        text.classList.add("active");
      } else {
        text.classList.remove("active");
      }
    });
  });
});
