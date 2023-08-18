const display = document.getElementById("display");
const add_btn = document.getElementById("add");
const sub_btn = document.getElementById("sub");
const reset_btn = document.getElementById("reset");

add_btn.addEventListener("click", function (e) {
  display.innerHTML++;
  display.style.color = "#0d6efd";
});

sub_btn.addEventListener("click", function (e) {
  display.innerHTML--;
  display.style.color = "#dc3545";
});

reset_btn.addEventListener("click", function (e) {
  display.innerHTML = "0";
  display.style.color = "#ffc107";
});
