const div_container = document.getElementById("root");
const change_btn = document.getElementById("change-btn")
const change_btn_auto = document.getElementById("change-btn-auto")
const color_name = document.getElementById("text-color")
const stop_change = document.getElementById("change-btn-auto-stop")


change_btn.addEventListener("click",function(){
  const r = Math.floor(Math.random()*255);
  const g = Math.floor(Math.random()*255);
  const b = Math.floor(Math.random()*255);
  // console.log(r,g,b)

  div_container.style.backgroundColor = `rgb(${r},${g},${b})`;
})

// change color automatically with hex value
change_btn_auto.addEventListener("click",function(e){
  setInterval(
    function(){
      const r = Math.floor(Math.random()*255);
      const g = Math.floor(Math.random()*255);
      const b = Math.floor(Math.random()*255);
      // console.log(r,g,b)
    
      div_container.style.backgroundColor = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`; 
      color_name.innerHTML = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
    },1000)
})

//stop auto color change
// stop_change.addEventListener("click",function(e){
//   div_container.style.backgroundColor = "rgb(0,0,0)"
// })