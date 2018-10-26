// DOM elements
const hotelName = document.getElementById('hotel-name');
const hotelRooms = document.getElementById('hotel-rooms');
const msg = document.getElementById('msg');
const checkHotel = document.getElementById('check-hotel');

// Hotel object data
const hotel = {
    name: 'King Nation',
    rooms: 1000,
    booked: 720,

    checkAvailability() {
        return this.rooms - this.booked;
    }
}

// Render hotel data to DOM
checkHotel.addEventListener('click', () => {
    msg.style.display = 'none';
    hotelName.textContent = hotel.name;
    hotelRooms.textContent = `Rooms: ${hotel.checkAvailability()}`;

});