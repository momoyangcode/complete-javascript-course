/* LESSON 1O

// Value and Variables
let js = "amazing";
console.log(40 + 8 + 23 - 10);

let firstName = "Momo"
let lastName = "Yang"

console.log(firstName);
console.log(lastName);

let myFirstJob = "Teacher";
let myFutureJob = "Programmer";

console.log(myFirstJob);
console.log(myFutureJob);


let myCountry = "China";
let myCountryContinent = "East Asia"
let myCountryPopulation = "1411.75 million"

console.log(myCountry);
console.log(myCountryContinent);
console.log(myCountryPopulation);

*/





/*  LESSON 12


// Data Types


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);

console.log(typeof 28);
console.log(typeof 'Momo');

javascriptIsFun = 'Yes!';

console.log(typeof javascriptIsFun);


let year;

console.log(year);
console.log(typeof year);

year = 1995;
console.log(typeof year);

console.log(typeof null); //a bug


*/



/*
//let, const, var

let age = 28;
age = 30;

const birthYear = 1995;
console.log(birthYear);

var myFutureJob = 'programmer';
myFutureJob = 'teacher';
console.log(myFutureJob);

*/


/*
//Basic operators


//Math operator

const thisYear = 2023;
const ageMomo = thisYear - 1995;
const ageTomo = thisYear - 1991;

console.log(ageMomo, ageTomo);

console.log(ageMomo * 2, ageMomo / 3, 2 ** 3);

const firstName = 'Momo';
const lastName = 'Yang';
console.log(firstName + ' ' + lastName);


//Assignment operator

let x = 10 + 5;
x += 10; //x = x + 10 = 25;
x *= 4; //x = x * 4 = 100;
x++; //x = x + 1 = 101;
x--; //x = x - 1;
x--;
console.log(x);

//Comparsion operator


console.log(ageMomo > ageTomo); //< > <= >=;

console.log(ageMomo >= 18);

const isFullAge = ageMomo >= 18;
console.log(isFullAge);

console.log(thisYear - 1995 > thisYear - 1991);

*/


/*

// Operator Precedence

const now = 2023;

const ageMomo = now - 1995;
const ageTomo = now - 1991;

console.log(now - 1995 > now - 1991);

let x, y;

x = y = 25 - 10 - 5;
console.log(x, y);

const ageAverage = (ageMomo + ageTomo) / 2;
console.log(ageAverage);

*/


// Strings and Template Literals

/*
const myName = 'Momo';
const currentYear = 2023;
const myBirthYear = 1995;
const myFirstJob = 'Chinese teacher';
const myFutureJob = 'programmer';

const introMomo = "I'm " + myName + ", I'm " + (currentYear - myBirthYear) + ' years old, my first job was a ' + myFirstJob + ', but in the future I want to be a ' + myFutureJob + '.'

console.log(introMomo);

const introMomoNew = `I'm ${myName}, I'm ${currentYear - myBirthYear} years old, my first job was a ${myFirstJob}, but in the future I want to be a ${myFutureJob}. `;

console.log(introMomoNew);

console.log(`fistline\n\
secondline\n\
third line`)

console.log(`firstline
secondline
thirdline`)

*/

//22 equality operators

// const age = '18';
// if (age === 18) console.log('You just became an adult.(strict)');

// // if (age == 18) console.log('You just became an adult.(loose)');

// const favoriteNumber = Number(prompt("What's your favorite number?"));
// console.log(favoriteNumber);
// console.log(typeof favoriteNumber);

// if (favoriteNumber === 18) {
//     console.log('cool! 18 is a cool number!')
// } else if (favoriteNumber === 9) {
//     console.log('9 is half of 18')
// } else {
//     console.log("it's not 9 or 18.")
// }

// if (favoriteNumber !== 18) console.log('Number is not 18');


//Logical operators

// const hasDrivingLicense = true;
// const hasGoodVision = true;

// console.log(!hasGoodVision);
// console.log(!hasDrivingLicense || hasGoodVision);

// if (hasDrivingLicense || hasGoodVision) {
//     console.log('You can drive');
// } else {
//     console.log('Someone else should drive');
// }

// const isTired = false;

// if (hasDrivingLicense && hasGoodVision && !isTired) {
//     console.log('You can drive');
// } else {
//     console.log('Someone else should drive')
// }

// switch statement 

// const day = '2';

// if (day === 'monday') {
//     console.log('plan course structure');
//     console.log('go to coding meeting');
// } else if (day === 'tuesday') {
//     console.log('prepare theory video');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('write coding examples');
// } else if (day === 'friday') {
//     console.log('record video');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('enjoy the weekend');
// } else {
//     console.log('Not a valid day!');
// }

// switch (day) {
//     case 'monday': //day === 'monday'
//         console.log('plan course structure');
//         console.log('go to coding meeting');
//         break;
//     case 'tuseday':
//         console.log('prepare theory video');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('write coding examples');
//         break;
//     case 'friday':
//         console.log('record video');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day!')
// }


//Expressions and  Statement

//Expressions
// 3 + 4
// 1995
// true && false && !false

//Statement 

// if else;
// switch; 


// const me = 'Momo';
// console.log(`I am ${2023 - 1995}`);

// // The conditional operator

// const age = 28;

// age >= 18 ? 4 : console.log('You can drink water 💦');

// const whatToDrink = age >= 18 ? 'wine 🍷' : 'water 💦';
// console.log(whatToDrink);

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine 🍷';
// } else {
//     drink2 = 'water 💦';
// }
// console.log(drink2);

// console.log(`I would like to drink ${age >= 18 ? 'wine 🍷' : 'water 💦'}`);











