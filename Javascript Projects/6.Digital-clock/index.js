function set_time() {
  //Initializing time
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let session = "AM";

  // formatting time Zone
  if (hours > 12) {
    hours = hours - 12;
    session = "PM";
  }

  if (hours === 0) {
    hours = 12;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  let time = hours + ":" + minutes + ":" + seconds + " " + session;

  const display_time = document.getElementById("display_time");
  const display_date = document.getElementById("date");

  display_date.innerHTML = date.toDateString();
  display_time.innerHTML = time;
}

setInterval(set_time, 1000);
