// const accordionContents = document.querySelectorAll(".accordion");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const accordionContent = e.currentTarget.parentElement.nextElementSibling;
    accordionContent.classList.toggle("show-text");
  });
});
