'use strict';

/* function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity};`

}

const descriptionFinland = describeCountry('Finland', 6, 'Helsinki');
console.log(descriptionFinland);

const descriptionChina = describeCountry('China', 140, 'Beijing');
console.log(descriptionChina);

const descriptionCroatia = describeCountry('Croatia', 4, 'Zagreb');
console.log(descriptionCroatia); */

/*
function percentageOfWorld1(country, population) {
    return `${country} has ${population} millions people, so it's about ${(Math.round((population / 7900) * 100 * 100) / 100).toFixed(2)}% of the world population`
}

const percentageOfChina = percentageOfWorld1('China', 1441);

console.log(percentageOfChina);


const percentageOfCroatia = percentageOfWorld1('Croatia', 4.8);

console.log(percentageOfCroatia);


const percentageOfEngland = percentageOfWorld1('England', 56);

console.log(percentageOfEngland);

const percentageOfWorld2 = function (country, population) {
    return `${country} has ${population} millions people, so it's about ${(population / 7900) * 100}% of the world population`
}

const percentageOfChina2 = percentageOfWorld2('China', 1441);

console.log(percentageOfChina2);


const percentageOfCroatia2 = percentageOfWorld2('Croatia', 4.8);

console.log(percentageOfCroatia2);


const percentageOfEngland2 = percentageOfWorld2('England', 56);

console.log(percentageOfEngland2);

*/

// function percentageOfWorld1(country, population) {
//     return `${country} has ${population} millions people, so it's about ${(Math.round((population / 7900) * 100 * 100) / 100).toFixed(2)}% of the world population`
// }

// const percentageOfChina = percentageOfWorld1('China', 1441);

// console.log(percentageOfChina);

// const percentageOfWorld3 = (country, population) => `${country} has ${population} millions people, so it's about ${(Math.round((population / 7900) * 100 * 100) / 100).toFixed(2)}% of the world population`;

// console.log(percentageOfWorld3('China', 1441));


/* const percentageOfWorld1 = function (population) {
    return (Math.round((population / 7900) * 100 * 100) / 100).toFixed(2);
}

const describePopulation = function (country, population) {
    // const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`;
    return description;
}

console.log(describePopulation('China', 1441));
 */


//coding challenge 1
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let averageDolphins = calcAverage(44, 23, 71);
let averageKoalas = calcAverage(65, 54, 49);

const checkWinner = function (averageDolphins, averageKoalas) {
    if (averageDolphins >= 2 * averageKoalas) {
        console.log(`Dolphins win (${averageDolphins} vs. ${averageKoalas})`);
    } else if (averageKoalas >= 2 * averageDolphins) {
        console.log(`Koalas win (${averageKoalas} vs. ${averageDolphins}`);
    } else {
        console.log('No team wins!');
    }
}

checkWinner(averageDolphins, averageKoalas);


averageDolphins = calcAverage(85, 54, 41);
averageKoalas = calcAverage(23, 34, 27);

checkWinner(averageDolphins, averageKoalas);

const num = Math.round(2.470865).toFixed(2);

const num2 = (Math.round(2.470865 * 100) / 100).toFixed(2);

console.log(num, num2);

 */

// const populations = [1411, 5, 14, 208];

// console.log(populations.length === 4);

// const percentageOfWorld1 = function (population) {
//     return (Math.round((population / 7900) * 100 * 100) / 100).toFixed(2);
// }

// const percentages = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[1]),
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3])
// ];

// console.log(percentages);

/* const neighbours = ['Slovenia', 'Germany', 'BiH'];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country')
}
else {
    console.log('Probably it is a central European country')
}

neighbours[neighbours.indexOf('BiH')] = 'Republic of BiH';

console.log(neighbours); */




//coding challenge 2

// const calcTip = function (bill) {
//     if (bill >= 50 && bill <= 300) {
//         return bill * 0.15;
//     } else {
//         return bill * 0.2;
//     }
// }

/* const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2])
]

console.log(tips);

const total = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2],
]

console.log(total); */
/*

const myCountry = {
    country: 'China',
    capital: 'Beijing',
    language: 'Chinese',
    population: 1411,
    neighbours: ['Korea', 'Russia', 'Thailand']
};

console.log(myCountry);

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital city called ${myCountry.capital}.`);


myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry['population']);
// console.log(myCountry.population + 2);

// console.log(myCountry['population'] - 2);
 */


/*
const myCountry = {
    country: 'China',
    capital: 'Beijing',
    language: 'Chinese',
    population: 1411,
    neighbours: ['Korea', 'Russia', 'Thailand'],

    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
        // return this.language;
    },

    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        // return this.isIsland;
    }
};

console.log(myCountry.describe());

myCountry.checkIsland();

console.log(myCountry.isIsland);

 */


//Coding Challenge 3

/*
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
};

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.BMI, john.BMI);

if (mark.BMI > john.BMI) {
    console.log(`${mark.firstName}'s BMI(${mark.BMI}) is higher than ${john.firstName}'s BMI(${john.BMI})!`)
} else if (john.BMI > mark.BMI) {
    console.log(`${john.firstName}'s BMI(${john.BMI}) is higher than ${mark.firstName}'s BMI(${mark.BMI})!`)
} else {
    console.log(`${john.firstName}'s BMI(${john.BMI}) is the same as ${mark.firstName}'s BMI(${mark.BMI})!`)
}; */

// for (let voter = 1; voter <= 50; voter++) {
//     console.log(`Voter number ${voter} is currently voting`);
// }

/*
const populations = [1411, 5, 14, 208];

const percentageOfWorld1 = function (population) {
    return (Math.round((population / 7900) * 100 * 100) / 100).toFixed(2);
}

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];

console.log(percentages);


//Better Solution

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
}

console.log(percentages2);

 */

/*
const populations = [1411, 5, 14, 208];
const percentageOfWorld1 = function (population) {
    return (Math.round((population / 7900) * 100 * 100) / 100).toFixed(2);
}

const percentages3 = [];

let i = 0;
while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]);
    percentages3.push(perc);
    i++;
};

console.log(percentages3);

 */



//Coding Challenge 4
/* 

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const total = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    total.push(tip + bills[i]);
}

// let i = 0;
// while (i < bills.length) {
//     const inTotal = calcTip(bills[i]) + bills[i];
//     total.push(inTotal);
//     i++;
// }

console.log(tips);
console.log(total);


const calcAverage = function (arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];//  sum = sum + arr[i];
    }
    const average = sum / arr.length;
    return average;
}

console.log(calcAverage([1, 2, 3, 4, 5]));


/* 

const returnB = function (arr) {

    const bArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === 'b') {
            bArray.push(arr[i])
        }
    }
    return bArray;
}

const arr = ['momo', 'tomo', 'bob', 'job', 'bill'];

console.log(bFamily);



 */ 