//Define UI Elements
const input = document.getElementById("input");
const button = document.getElementById("check");
const displayVowel = document.getElementById("displayVowel");

button.addEventListener("click", function (e) {
  const str = input.value;
  console.log(str);
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i of str) {
    if (vowels.includes(i)) {
      count++;
    }
  }
  displayVowel.innerText = `${str} has ${count} vowels`;
  input.value = "";
});
