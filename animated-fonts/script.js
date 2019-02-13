/* ==========================================================================
                            Break chain animation
   ========================================================================== */


const breakChain = () => {
  const chain = document.getElementById('chain');
  chain.className = 'fas fa-link';

  setTimeout(() => { chain.className = 'fas fa-unlink'; }, 1000);
};

breakChain();
setInterval(breakChain, 2000);


/* ==========================================================================
                        Charge battery Animation
   ========================================================================== */


const chargeBattery = () => {
  const battery = document.getElementById('battery');
  battery.className = 'fas fa-battery-empty';

  setTimeout(() => { battery.className = 'fas fa-battery-quarter'; }, 1000);
  setTimeout(() => { battery.className = 'fas fa-battery-half'; }, 2000);
  setTimeout(() => { battery.className = 'fas fa-battery-three-quarters'; }, 3000);
  setTimeout(() => { battery.className = 'fas fa-battery-full'; }, 4000);
};

chargeBattery();
setInterval(chargeBattery, 5000);


/* ==========================================================================
                        Hourglass flow Animation
   ========================================================================== */


const hourglassFlow = () => {
  const hourglass = document.getElementById('hourglass');
  hourglass.className = 'far fa-hourglass';

  setTimeout(() => { hourglass.className = 'fas fa-hourglass-start'; }, 1000);
  setTimeout(() => { hourglass.className = 'fas fa-hourglass-half'; }, 2000);
  setTimeout(() => { hourglass.className = 'fas fa-hourglass-end'; }, 3000);
  setTimeout(() => { hourglass.className = 'fas fa-hourglass'; }, 4000);
};

hourglassFlow();
setInterval(hourglassFlow, 5000);
