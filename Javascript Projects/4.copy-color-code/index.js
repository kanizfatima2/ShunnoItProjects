const change_btn = document.getElementById("change-btn");
const div_container = document.getElementById("root");
const color = document.getElementById("output");
const copy_btn = document.getElementById("copy-btn");

change_btn.addEventListener("click", function (e) {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  // console.log(r,g,b)

  div_container.style.backgroundColor = `#${r.toString(16)}${g.toString(
    16
  )}${b.toString(16)}`;
  color.value = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
});

//copy color text
copy_btn.addEventListener("click", function (e) {
  navigator.clipboard.writeText(color.value);

  if (isValidHex(color.value)) {
    generateMessage(`${color.value} copied`);
  } else {
    window.alert("Invalid hex color code!");
  }
});

// toast message generate
function generateMessage(msg) {
  const div = document.createElement("div");
  div.innerText = msg;
  div.className = "toast-message toast-message-slide-in";

  div.addEventListener("click", function () {
    div.classList.remove("toast-message-slide-in");
    div.classList.add("toast-message-slide-out");

    div.addEventListener("animationend", function () {
      div.remove();
    });
  });

  document.body.appendChild(div);
}

// change color by typing
color.addEventListener("keyup", function (e) {
  const color_name = e.target.value;
  if (color_name && isValidHex(color_name)) {
    div_container.style.backgroundColor = color_name;
  }
});

// valid hex or not
function isValidHex(color) {
  if (color.length != 7) return false;
  if (color[0] != "#") return false;
  color = color.substring(1);

  return /^[0-9A-Fa-f]{6}$/i.test(color);
}
