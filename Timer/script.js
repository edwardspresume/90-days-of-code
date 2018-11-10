// Hourglass flow animation
const hourglassFlow = () => {
    const hourglass = document.getElementById('hourglass');

    hourglass.className = 'far fa-hourglass';

    setTimeout(() => {
        hourglass.className = 'fas fa-hourglass-start';
    }, 1000);

    setTimeout(() => {
        hourglass.className = 'fas fa-hourglass-half';
    }, 2000);

    setTimeout(() => {
        hourglass.className = 'fas fa-hourglass-end';
    }, 3000);

    setTimeout(() => {
        hourglass.className = 'fas fa-hourglass';
    }, 4000);
}

hourglassFlow();
setInterval(hourglassFlow, 5000);

const timer = () => {
    // DOM elements
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    // Date variables
    const currentTime = new Date();
    const deadLine = new Date('February 1, 2019');

    // Calculate remaining milliseconds till dealLine
    let remainingTime = deadLine - currentTime;

    // Time calculations
    let remainingSeconds = Math.floor(remainingTime / 1000);
    let remainingMinutes = Math.floor(remainingSeconds / 60);
    let remainingHours = Math.floor(remainingMinutes / 60);
    let remainingDays = Math.floor(remainingHours / 24);

    remainingHours %= 24;
    remainingMinutes %= 60;
    remainingSeconds %= 60;

    remainingHours = remainingHours < 10 ? '0' + remainingHours : remainingHours;

    remainingMinutes = remainingMinutes < 10 ? '0' + remainingMinutes : remainingMinutes;

    remainingSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

    // Render time to the DOM
    days.textContent = remainingDays;
    hours.textContent = remainingHours;
    minutes.textContent = remainingMinutes;
    seconds.textContent = remainingSeconds;

    //Run timer function every second
    setTimeout(timer, 1000);
}

timer();