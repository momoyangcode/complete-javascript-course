//Activating strict mode
'use strict';

// let hasDriverLicense = false;

// const passTest = true;

// if (passTest) hasDriverLicense = true;

// if (hasDriverLicense) console.log('You can drive');

// const private = 23;



//Function


/* function logger() {
    console.log('My name is Momo');
}

//calling/running/invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(0, 5);
console.log(orangeJuice);

const appleOrangeJuice = fruitProcessor(2, 3);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num); */

//Function Declarations vs. Expression

//Function Declarations
/* const age1 = calcAge1(1995);
console.log(age1);


function calcAge1(birthYear) {
    return 2023 - birthYear;
}

//Functio Expression

const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}

const age2 = calcAge2(1995);
console.log(age1, age2);
 */

//Arrow function 

/* const calAge3 = birthYear => 2023 - birthYear;

console.log(calAge3(1995));

// const yearsUntilRetirement = birthYear => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }
// console.log(yearsUntilRetirement(1995));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1995, 'Momo')) */




//Function calling

// const cutFruitPieces = function (fruit) {
//     return fruit * 4;
// }

/* const cutFruitPieces = fruit => fruit * 4;

const fruitProcessor = function (apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    return `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`
}

console.log(fruitProcessor(2, 3));

console.log(fruitProcessor(5, 6));
 */


//Reviewing Functions

/* const calcAge = function (birthYear) {
    return 2023 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retireAge = 65 - age;

    if (retireAge > 0) {
        console.log(`${firstName} retires in ${retireAge} years.`);
        return retireAge;
    } else {
        console.log(`${firstName} has already retired.`);
        return -1;
    }
    // return retireAge;

}

console.log(yearsUntilRetirement(1995, 'Momo'));
console.log(yearsUntilRetirement(1950, 'Nikki'));

 */

/* function calAge(birthYear, firstName) {
    const age = 2023 - birthYear;
    console.log(`${firstName} is ${age} years old.`)
    return age;
}

const age1 = calAge(1995, 'Momo')
console.log(age1);

const age2 = calAge(1991, 'Tomo')
console.log(age2); */

//Introduction to Arrays

// const friend1 = 'Jonas';
// const friend2 = 'Tomo';
// const friend3 = 'Haliey';

/* const friends = ['Jonas', 'Tomo', 'Haliey', 'Michelle'];

console.log(friends);

const birthYears = new Array(1995, 1991, 1997, 1989);

console.log(friends[0]);
console.log(birthYears[1]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[friends.length - 1] = 'Jason';
console.log(friends);

friends[friends.length] = 'Dora';
console.log(friends);


const firstName = 'Momo'
const birthYear = 1995;

const momo = [firstName, 'Yang', 2023 - birthYear, 'student', friends];
console.log(momo);
console.log(momo.length);


const calcAge = function (birthYear) {
    return 2023 - birthYear;
}

const years = [1995, 1993, 1996, 1990, 1991];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages); */



//Basic Array Operations

//Add elements

//Add last one
/* const friends = ['Tomo', 'Haliey', 'Jason'];
console.log(friends);

const newLength = friends.push('Michelle');
console.log(friends);
console.log(newLength);

//Add first one

const newLength2 = friends.unshift('Dora');
console.log(friends);
console.log(newLength2);

//Remove elements

//Remove last one
const popped = friends.pop();
console.log(friends);
console.log(popped);

//Remove first one

const popped2 = friends.shift();
console.log(friends);
console.log(popped2);


//Check position of an element

console.log(friends.indexOf('Tomo'));
console.log(friends.indexOf('Jelena'));

//check if an element is in the array or not(true or false)

friends.push('23')

console.log(friends.includes('Gabi'));
console.log(friends.includes('Haliey'));
console.log(friends.includes(23));

if (friends.includes('Jason')) {
    console.log('You have a friend called Jason')
}

 */

//Introduction to Objects
/*
const momoArray = [
    'Momo',
    'Yang',
    2023 - 1995,
    'student',
    ['Tomo', 'Haliey', 'Jason']
]

console.log(momoArray);

const momo = {
    firstName: 'Momo',
    lastName: 'Yang',
    age: 2023 - 1995,
    job: 'student',
    friends: ['Tomo', 'Haliey', 'Jason']
};

console.log(momo);
 */


//Object Dot vs. Bracket Notation 

/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);

console.log(jonas.firstName);
console.log(jonas['job']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);


const interstedIn = prompt('What do you want to know about Jonas? Please choose between firstName, lastName, age, job, friends.');

if (jonas[interstedIn]) {
    console.log(jonas[interstedIn]);
} else {
    console.log('Wrong request! Please choose between firstName, lastName, age, job, friends.')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';

console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, abd his best friend is called ${jonas.friends[0]}.`);

 */


//Object Methods (functions in the object)
/*
const momo = {
    firstName: 'Momo',
    lastName: 'Yang',
    birthYear: 1995,
    job: 'student',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLiense: false,

    // calcAge: function (birthYear) {
    //     return 2023 - birthYear;
    // }
    // calcAge: function () {
    //     console.log(this);
    //     return 2023 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        this.summary = `${this.firstName} is a ${this.calcAge()}-year-old ${this.job}, and she has ${this.hasDriversLiense ? 'a' : 'no'} driver's license.`
        return this.summary
    }
};

// console.log(momo.calcAge(1995));
// console.log(momo['calcAge'](1995))
// // console.log(momo.calcAge());
// momo.calcAge();
// console.log(momo);

momo.getSummary();

console.log(momo.summary);
// console.log(momo.summary);
// console.log(momo.summary);

console.log(momo.age);


 */



//Iteration: The For Loop


//Too much repete
// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');


//Effective

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}🏋️‍♀️`);
// }



//--------Looping Arrays, Breaking and Continuing------//
/*
const momo = [
    'Momo',
    'Yang',
    2023 - 1995,
    'student',
    ['Michael', 'Peter', 'Steven']
];

const type = [];

// console.log(type);

// const years = [1991, 2007, 1995, 2020];
// const age = [];

// for (let i = 0; i < years.length; i++) {
//     age.push(2023 - years[i]);
// }

// console.log(age);


//------Breaking and Continuing(skip)-------//

for (let i = 0; i < momo.length; i++) {
    // if (typeof momo[i] !== 'string') continue;
    // console.log(momo[i]);

    if (typeof momo[i] === 'number') break;
    console.log(momo[i]);
    // // type[i] = typeof momo[i];
    // type.push(typeof momo[i]);
}


 */




//Looping Backwards and Loops in Loops

/*
const momo = [
    'Momo',
    'Yang',
    2023 - 1995,
    'student',
    ['Michael', 'Peter', 'Steven']
];

for (let i = momo.length - 1; i >= 0; i--) {
    console.log(momo[i]);
}


for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---------Starting exercise ${exercise}`)

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise${exercise}: Lifting weights: repetition ${rep}🏋️‍♀️`)
    }
}

 */


//The While Loop


//For Loop

// for (let i = 1; i <= 10; i++) {
//     console.log(`Lifting weights repetition ${i}`);
// }


//---------While Loop-------//

// let i = 1;
// while (i <= 10) {
//     console.log(`Lifting weights repetition ${i}`);
//     i++;
// }


//When do we use while loop: when you don't need an accounter (you don't know in advance that in how many iteration(重复) the loop would have )

//For Example  (throw a dice)

//The Math.random() gives a number between 0-1;

//The Math.trunc() returns the integer part of a number by removing any fractional digits.



// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`you rolled number ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;//without this line in the loop, the browser will load unlimitied times.
//     if (dice === 6) console.log('Loop is about to end...');
// }



