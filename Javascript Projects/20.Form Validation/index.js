const form = document.getElementById("form");

form.addEventListener("input", function (e) {
  // console.log(e.target.type);

  if (e.target.type === "text") {
    const input = e.target.value;
    if (input && input.length > 5) {
      e.target.parentElement.classList.add("success");
      e.target.parentElement.classList.remove("fail");
      e.target.nextElementSibling.children[0].style.visibility = "visible";
      e.target.nextElementSibling.children[1].style.visibility = "hidden";
    } else {
      e.target.parentElement.classList.add("fail");
      e.target.parentElement.classList.remove("success");
      e.target.nextElementSibling.children[0].style.visibility = "hidden";
      e.target.nextElementSibling.children[1].style.visibility = "visible";
    }
  }
});
