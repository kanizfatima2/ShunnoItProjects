const pass = document.getElementsByName("password")[0];
const eye_btn = document.getElementById("eye");

eye_btn.addEventListener("click",function(e){
  if(eye_btn.src.includes('eye-pass')){
   pass.setAttribute('type', 'text');
   eye.src = './eye-text.png'
  }

  else{
    pass.setAttribute('type', 'password');
    eye.src = './eye-pass.png'
  }
})