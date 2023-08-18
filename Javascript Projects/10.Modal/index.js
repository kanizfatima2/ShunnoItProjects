const openModal = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

openModal.addEventListener("click", function (e) {
  modal.style.display = "block";
});

closeModal.addEventListener("click", function (e) {
  modal.style.display = "none";
});
