const displayClock = () => {
  const clockDisplay = document.getElementById("clockDisplay");

  const today = new Date();

  let session = 'AM';
  let hour = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  if (hour >= 12 && hour < 24) {
    hour -= 12;
    session = 'PM';
  }

  hour = hour < 10 ? `0${hour}` : hour;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  const time = `${hour}:${minutes}:${seconds} ${session}`;

  clockDisplay.textContent = time;

  setInterval(displayClock, 1000);
};

displayClock();
