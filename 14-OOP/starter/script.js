'use strict';

//////////////////////////////////////////////////////////
///--- Constructor Functions and the new Operator----/////
/* 
//Constructor Functions (Arrow function can't because it does not have the 'this' keyword)
const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never put method in the constructor Functions because we don't want all the objects created by the constructor function carry it like below:
  // this.calAge = function() {
  //     console.log(2023 - this.birthYear);
  // }
};
//momo  and tomo are instances of Person
const momo = new Person('Momo', 1995);
const tomo = new Person('Tomo', 1991);
// console.log(momo, tomo);

//1. New {} is created
//2. function is called, this = {}
//3. {} linked to the prototype
//4. function automatically return {}

//check if an object is the instance of the constructor function

// console.log(momo instanceof Person);
// const jay = 'jay';
// console.log(jay instanceof Person);

////////////////////////////////////////
/////////------Prototypes------/////////

//Every objects that created in a constructor function would automatically has access to the prototypes that are defined in the constructor function
// console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

//this keyword is always set to the object which is calling the method
// momo.calcAge();
// tomo.calcAge();
// console.log(momo);

//Prototype is not the prototype of the constructor function, it is used as the prototype of all the objects that are created with the constructor function
// console.log(momo.__proto__);
// console.log(momo.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(momo));
// console.log(Person.prototype.isPrototypeOf(Person));

//Set properties on the prototype

Person.prototype.spieces = 'Homo Sapiens';
// console.log(momo.spieces, tomo.spieces);

// console.log(momo.hasOwnProperty('firstName'));

//Own properties are the ones that are declared directly in the object itself, objects only have access to their prototypes
// console.log(momo.hasOwnProperty('spieces'));

///////////////////////////////////////////////////////////
////---Prototypal Inheritance on Bulit-in Objects ----/////

console.log(momo.__proto__);

//Object Prototype (top of the prototype chain)
console.log(momo.__proto__.__proto__);
console.log(momo.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [2, 8, 5, 2, 2, 5];
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

//Don't add method on bulit-in objects like array and so on like below
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

//Huge element prototype chain
const h1 = document.querySelector('h1');
console.log(h1.__proto__);

//function prototype
console.dir(x => x + 1);
 */

/////////////////////////////////////////
/////---Coding Challenge #1----/////////
/* 
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.brake();
car1.accelerate();
car2.brake();
 */

/////////////////////////////////////////
/////////---ES6 Classes----//////////////

class PersonCl {
  constructor() {}
}
