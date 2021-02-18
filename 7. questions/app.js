const questions = document.querySelectorAll(".question-card");
questions.forEach(question => {
  const questionBtn = question.querySelector(".question-btn");
  questionBtn.addEventListener("click", function() {
    questions.forEach(item => {
      if (item !== question) item.classList.remove("show-answer");
    });
    question.classList.toggle("show-answer");
  });
});
