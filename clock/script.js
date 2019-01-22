const displayClock = () => {
  const clockDisplay = document.getElementById("clockDisplay");

  const today = new Date();
  let session = "AM";

  let hour = today.getHours();
  let minute = today.getMinutes();
  let seconds = today.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;

  if (hour >= 12 && hour < 24) {
    hour -= 12;
    session = "PM";
  }

  minute = minute < 10 ? "0" + minute : minute;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = `${hour}:${minute}:${seconds} ${session}`;
  clockDisplay.textContent = time;

  setTimeout(displayClock, 1000);
};

displayClock();
