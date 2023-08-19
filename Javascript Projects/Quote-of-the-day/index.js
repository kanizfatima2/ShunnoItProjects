const quote = document.getElementById("quote");
const author_name = document.getElementById("author-name");
const speech_btn = document.getElementById("speech-btn");
const copy_btn = document.getElementById("cpy-btn");
const twitter_btn = document.getElementById("twi-btn");
const new_quote_btn = document.getElementById("new-btn");

// new_quote_btn.innerText = "Loading...";
// new_quote_btn.classList.add("loading");

async function get_api() {
  const url = "https://api.quotable.io/random";
  const response = await fetch(url);
  const data = await response.json();
  quote.innerText = `${data.content}`;
  author_name.innerText = `${data.author}`;
}

document.addEventListener("DOMContentLoaded", get_api);
new_quote_btn.addEventListener("click", get_api);

//text to speech
speech_btn.addEventListener("click", function (e) {
  const msg = quote.innerText;
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en-US";

  speech.text = msg;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
  // console.log(msg);
});

//copy the text
copy_btn.addEventListener("click", function (e) {
  navigator.clipboard.writeText(quote.innerText);
  alert("copied the text");
});
