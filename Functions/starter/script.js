'use strict';

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  
  /*
  ES5
  numPassengers = numPassengers || 1;
  price = price || 199;
  */

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123', 2, 800);

const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 24739479284
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH99';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 24739479284) {
        alert('Checked In')
    } else {
        alert ('Wrong passaport')
    }
}

checkIn(flight, jonas)
console.log(flight)
console.log(jonas)

const flightNum = flight
const passenger = jonas

const newPassaport = function(person) {
  person.passport = Math.trunc(Math.random() * 10000000)
}

newPassaport(jonas)
checkIn(flight, jonas)