const btn = document.getElementsByClassName("btn-primary")[0];
const randColor = document.getElementById("randColor");

btn.addEventListener("click",function(e){
  const color = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#"+color;
  randColor.innerHTML = "#"+color;
})