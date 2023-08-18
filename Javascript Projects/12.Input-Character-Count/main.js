const input = document.getElementById("input");
const display_input = document.getElementById("displayCharacter");

input.addEventListener("mouseover",function(e){
  let count = e.target.value;
  display_input.innerHTML = `${count.length}`;
  
})
