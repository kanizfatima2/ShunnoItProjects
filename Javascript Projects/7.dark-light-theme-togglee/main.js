//Define UI Elements
const toggle = document.getElementById('toggleDark')
let darkMode = localStorage.getItem("darkMode");

// define functions 
const enableDarkMode =()=>{
  document.body.classList.add('dark-theme');
  localStorage.setItem("darkMode","enabled");
};

const disableDarkMode =()=>{
  document.body.classList.remove('dark-theme');
  localStorage.setItem("darkMode","disable");
};

// Save DarkMode History
if (darkMode === "enabled") {
  toggle.classList.add('bi-moon')
  enableDarkMode();
}


// define eventlistener 
toggle.addEventListener("click",function(e){
  let darkMode = localStorage.getItem("darkMode");
  if(darkMode!=="enabled"){
    this.classList.add("bi-moon");
    enableDarkMode();
  }
  else{
    this.classList.remove("bi-moon");
    disableDarkMode();
  }
})