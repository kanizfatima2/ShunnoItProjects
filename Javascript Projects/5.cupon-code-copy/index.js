const copy_btn = document.getElementById("copy");
const input = document.getElementById("input");

copy_btn.addEventListener("click", function (e) {
  navigator.clipboard.writeText(input.value);
  alert("Copied the text: " + input.value);
  input.value = "";
});
