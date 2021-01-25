const modalOverlay = document.querySelector(".modal-overlay");
const modalBtn = document.querySelector(".modal .modal-btn");
const modalCloseBtn = document.querySelector(".modal-content .close-btn");

modalBtn.addEventListener("click", function() {
  modalOverlay.classList.add("open-modal");
});

modalCloseBtn.addEventListener("click", function() {
  modalOverlay.classList.remove("open-modal");
});
