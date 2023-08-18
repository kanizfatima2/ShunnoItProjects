const btn = document.getElementsByClassName("btn-primary")[0];
const randNumber = document.getElementById("randNumber");

btn.addEventListener("click",function(e){
  const num = Math.floor(Math.random()*10)+1;
  randNumber.innerHTML = `${num}`
})