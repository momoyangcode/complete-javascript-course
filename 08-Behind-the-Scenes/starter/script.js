'use strict';

// //////////-----Scope and The Scope Chain-----///////////
// function calcAge(birthYear) {
//   const age = 2023 - birthYear;
//   //   console.log(firstName);

//   function printAge() {
//     let output = `You are ${firstName}, and ${age} years old, born in ${birthYear}.`;
//     console.log(output);
//     // console.log(add(2, 3));

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       // var millenial = true;

//       //******Create new variable with the same name as outer scope's variable******//
//       const firstName = 'Steve';
//       const str = `${firstName} is a millenial`;
//       console.log(str);
//       // console.log(add(2, 3));
//     }

//     function add(a, b) {
//       return a + b;
//     }
//     console.log(add(2, 3));

//     //******Reassigning outer scope's variable******//
//     output = 'New Output!';
//     console.log(output);
//     //   console.log(millenial);
//   }
//   printAge();
//   // A return statement ends the execution of a function (ususally in the end of a function)
//   return age;
// }

// // console.log(add(2, 3));

// const firstName = 'Momo';

// calcAge(1995);

// //////////-----Hoisting and The TDZ(Temporal Dead Zone)-----///////////

// Variables;
// console.log(x);
// console.log(y);
// console.log(z);

// var x = 1;
// let y = 2;
// const z = 3;

// // Var creates a property in global window object which cause complications in some cases
// console.log(x === window.x);
// console.log(y === window.x);
// console.log(z === window.x);

// //Functions
// console.log(addDeclaration(2, 3));
// console.log(addExpression(2, 3));
// console.log(addArrow(2, 3));

// function addDeclaration(a, b) {
//   return a + b;
// }

// const addExpression = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// //Example
// //**********(Note: always use const and let, use functions after declaring to make it more clear, declare all the variable in the top of scopes;)***********//

// if (numProduct !== 0) {
//   deleteShoppingCart();
// }

// var numProduct = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// // //////////-----The This Keyword-----///////////

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2023 - birthYear);
//   console.log(this);
// };

// calcAge(1995);

// const calcAgeArrow = birthYear => {
//   console.log(2023 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1991);

// const momo = {
//   birthYear: 1995,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.birthYear);
//   },
// };

// momo.calcAge();

// const tomo = {
//   birthYear: 1991,
// };

// tomo.calcAge = momo.calcAge;
// tomo.calcAge();

// const f = momo.calcAge;
// f();

// //////////-----Regular function vs Arrow functions-----///////////

// var firstName = 'Tomo';
// console.log(this);
// const momo = {
//   firstName: 'momo',
//   lastName: 'Yang',
//   year: 1995,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.year);
//   },
//   greet: function () {
//     console.log(`Hey, I am ${this.firstName}`);

//     //Solution 1
//     //     const self = this; //self or that;
//     //     const isMillenial = function () {
//     //       console.log(self);
//     //       console.log(self.year >= 1981 && self.year <= 1996);
//     //       //   console.log(this.year >= 1981 && this.year <= 1996);
//     //     };
//     //     isMillenial();
//     //   },

//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
// };
// momo.calcAge();
// momo.greet();
// // console.log(this.firstName);

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 3, 4, 5);

// //Arguments keyword does not exit in arrow functions!!!
// var addArrow = () => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 3, 4);

// // //////////-----Primitives vs. Objects (Primitive vs. Reference Types)-----///////////

//---Primitives--//
// let age = 31;
// let oldAge = age;
// age = 30;
// console.log(age);
// console.log(oldAge);

//---Reference types--//
// const me = {
//   firstName: 'Momo',
//   age: 28,
// };

// const friend = me;
// friend.age = 30;
// console.log(me);
// console.log(friend);

// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 28,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

// console.log('Before marriage:', jessica);
// console.log('After marriage:', marriedJessica);

// //Copying objects
// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 28,
//   family: ['Alice', 'Bob'],
// };

// //Assign here is to merge 2 objects && Only copy in the first level
// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Davis';

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('Tom');

// console.log('Before marriage:', jessica2);
// console.log('After marriage:', jessicaCopy);
