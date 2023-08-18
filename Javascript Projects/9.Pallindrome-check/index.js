const input = document.getElementById("input");
const button = document.getElementById("check");
const display_pallindrome = document.getElementById("displayPalindrome");

button.addEventListener("click",function(e){
const word = input.value;
// console.log(word);
const rev_word = word.split("").reverse().join("");
// console.log(rev_word)

if(word === rev_word){
  display_pallindrome.innerHTML = `${word} is a pallindrome Number`;
  display_pallindrome.style.color="purple"
}
else{
  display_pallindrome.innerHTML = `${word} is not a pallindrome Number`;
  display_pallindrome.style.color="red"
}
input.value=""
})