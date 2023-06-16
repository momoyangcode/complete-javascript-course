'use strict';

//-----Default Parameters-----//

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   passengerNum = 1,
//   price = 1000 * passengerNum
// ) {
//   //ES5
//   //   passengerNum = passengerNum ?? 1;
//   //   price = price ?? 1000;

//   const booking = {
//     flightNum,
//     passengerNum,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
//   //   console.log(bookings);
// };

// createBooking('LH3420');
// createBooking('LH3234', 2, 800);
// createBooking('LH3420', 3);
// createBooking('LH3420', 5);

// createBooking('LH3420', undefined, 500);

//-----How Passing Arguments works: Value vs. Reference-----//

// const flight = 'LH2340';
// const momo = {
//   firstName: 'Momo',
//   passport: 243857022245,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH3483';
//   passenger.firstName = 'Mrs.' + passenger.firstName;

//   if (passenger.passport === 243857022245) {
//     alert('Checked in');
//   } else {
//     alert('Wrong Passport!');
//   }
// };
// // checkIn(flight, momo);
// // console.log(flight);
// // console.log(momo);
// //Is the same as doing
// const flightNum = flight;
// const passenger = momo;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// newPassport(momo);
// checkIn(flight, momo);
// console.log(momo);

//-----Functions Accepting Callback-----//

// const oneword = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher-order function
// const transformer = function (str, func) {
//   console.log(str);
//   console.log(`Transformed string: ${func(str)}`);
//   console.log(`Transformed by: ${func.name}`);
// };

// transformer('Javascript is one of the programming languages', oneword);
// transformer('Javascript is one of the programming languages', upperFirstWord);

// //JS uses callbacks all the time

// const high5 = function () {
//   console.log('🙌');
// };

// // document.body.addEventListener('click', high5);
// ['momo', 'tomo', 'yang'].forEach(high5);

//-----Functions Returning Functions-----//

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet = greeting => name => {
//   console.log(`${greeting} ${name}`);
// };

// const greeterHey = greet('Hey');
// greeterHey('Momo');
// greeterHey('Tomo');

// greet('Hello')('William');

//-----The Call&Apply Methods-----//

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({
//       name: `${name}`,
//       flight: `${this.iataCode}${flightNum}`,
//     });
//   },
// };

// // lufthansa.book(4210, 'momo');
// // lufthansa.book(1340, 'tomo');
// // console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const booking = lufthansa.book;

// // //Does not work
// // // book(23, 'Sarah Williams');

// // // Call Method
// // book.call(eurowings, 23, 'Sarah Williams');
// // console.log(eurowings);

// // book.call(lufthansa, 63, 'Peter Zhang');
// // console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// // // Apply Method(not often use)
// // book.call(swiss, 5650, 'Paul Smith');

// // const flightData = [183, 'Alex'];
// // book.apply(swiss, flightData);
// // console.log(swiss);

// // book.call(swiss, ...flightData);

// //Create a new function

// const bookLH = booking.bind(lufthansa);
// const bookEW = booking.bind(eurowings);
// const bookLX = booking.bind(swiss);

// bookEW(445, 'Tom Smith');
// console.log(eurowings);

// const bookEW23 = booking.bind(eurowings, 23);
// bookEW23('Momo Yang');

// //With Event Listener
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //Partial application

// // const addTax = (rate, value) => value + value * rate;
// // const addVAT = addTax.bind(null, 0.23);
// // console.log(addVAT(100));

// // const addTax = function (rate) {
// //   return function (value) {
// //     console.log(value + value * rate);
// //   };
// // };

// const addTax = rate => value => value + value * rate;
// const addVAT = addTax(0.23);
// console.log(addVAT(100));

//-----Coding Challenge #1-----//

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     const value = Number(
//       prompt(`${this.question} \n${this.options.join('\n')}`)
//     );
//     if (value === 0 || value === 1 || value === 2 || value === 3) {
//       this.answers[value] = this.answers[value] + 1;
//     } else {
//       alert('Invalid Number!');
//     }
//     console.log(this.answers);
//     this.displayResults();
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const arr1 = [5, 2, 3];
// const arr2 = [1, 5, 3, 9, 6, 1];

// poll.displayResults.call({ answers: arr1 }, 'string');
// poll.displayResults.call({ answers: arr2 }, 'array');

//-----Immediately Invoked Function Expressions(IIFE)-----//

// const runOnce = function () {
//   console.log('This will only run once');
// };
// runOnce();

// (function () {
//   console.log('This will only run once');
//   const isPrivate = 23;
// })();

// // console.log(isPrivate);

// (() => console.log('This will ALSO only run once'))();

// //    {} more often used to hide varaiables in the scope---Data Privacy
// {
//   const isPrivate = 23;
// }

//-----Closures-----//

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker);

// //-----More Closures Examples-----//
// let f;

// const g = function () {
//   const a = 23;

//   f = function () {
//     console.log(a * 2);
//   };
// };

// g();
// f();

// // Reassign f function

// const h = function () {
//   const b = 8;
//   f = function () {
//     console.log(b * 2);
//   };
// };
// h();
// f();

// console.dir(f);

// //Example 2

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// boardPassengers(180, 3);

//-----Coding Challenge #2-----//

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.body.addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();
