'use strict';

const bookings = [];

const createBooking = function (flightNum, passengerNum, price) {
  const booking = {
    flightNum,
    passengerNum,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH3420');
