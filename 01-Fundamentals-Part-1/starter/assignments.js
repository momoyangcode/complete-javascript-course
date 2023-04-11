/*
let myCountry = "China";
let myCountryContinent = "East Asia"
let myCountryPopulation = "1411.75 million"

console.log(myCountry);
console.log(myCountryContinent);
console.log(myCountryPopulation);

//Assignment---Data Types


let isIsland = 'China';
console.log(typeof isIsland)


isIsland = true;
console.log(isIsland);
console.log(typeof isIsland)

let language;

console.log(language);
console.log(typeof language)






//Assignment---let, const, var

const myNativeLanguage = 'Chinese';

let myLocation = 'China';
myLocation = 'Croatia';

console.log(myNativeLanguage);
console.log(myLocation);


//Assignment---Basic Operators

let chinaPopulationInMillions = 1411.75;

chinaPopulationInMillions++;

console.log(chinaPopulationInMillions);

const finlandPopulationInMillions = 6;

console.log(chinaPopulationInMillions > finlandPopulationInMillions);

const averageCountryPopulationInMillions = 33;

console.log(chinaPopulationInMillions < averageCountryPopulationInMillions);

const chinaDescription = myCountry + ' is in ' + myCountryContinent + ', and its ' + myCountryPopulation + ' people speak ' + myNativeLanguage + '.'

console.log(chinaDescription);


console.log(`${myCountry} is in ${myCountryContinent}, and its ${myCountryPopulation} people speak ${myNativeLanguage}.`)


//console.log(ChinaPopulationInMillion / 2);




//coding challenge #1

let massMarksInKg = 78;
let massJohnInKg = 92;


let heightMarksInMeter = 1.69;
let heightJohnInMeter = 1.95;



const marksBMI = massMarksInKg / heightMarksInMeter ** 2;

const johnBMI = massJohnInKg / heightJohnInMeter ** 2;

console.log(marksBMI, johnBMI);

let markHigherBMI = marksBMI > johnBMI;

console.log(markHigherBMI);

massMarksInKg = 95;
massJohnInKg = 85;

heightMarksInMeter = 1.88;
heightJohnInMeter = 1.76;

const newMarksBMI = massMarksInKg / heightMarksInMeter ** 2;

const newJohnBMI = massJohnInKg / heightJohnInMeter ** 2;

console.log(newMarksBMI, newJohnBMI);

console.log(newMarksBMI > newJohnBMI);


//coding challenge 2

if (marksBMI > johnBMI) {
    console.log(`Marks' BMI is higher than John's`)
} else {
    console.log(`John's BMI is higher than Marks'`)
}

if (newMarksBMI > newJohnBMI) {
    console.log(`Marks' BMI (${newMarksBMI}) is higher than John's (${newJohnBMI})!`)
} else {
    console.log(`John' BMI (${newJohnBMI}) is higher than Marks' (${newMarksBMI})!`)
}



/*
const age = 15;

if (age >= 18) {
    console.log(`Momo can start driving licence 🚗`);
} else {
    console.log(`Momo is too young, wait another ${18 - age} years.`)
}

const birthYear = 1995;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
*/


/*
//type convertion
const inputYear = '1991';

console.log(inputYear);

console.log(Number(inputYear));

console.log(Number(inputYear) + 18);

console.log('Momo');

console.log(Number('Momo'));

console.log(String(27), String(32));


//type corecion

console.log('I am ' + '23' + ' years old');

console.log('23' - '10' - 3);

console.log('25' + '10' - '10');

console.log(2 - '23' + '5' - 8);

let n = '1' + 1;
n = n - 1;
console.log(n);


// console.log('9' - '5');
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);



// 5 falsy values: 0, NaN, null, undefined, ''

console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(25));
console.log(Boolean({}));
console.log(Boolean(''));


const money = 0;

if (money) {
    console.log(`Don't spend it all`)
} else {
    console.log(`Find a job!`)
}

let height;

if (height) {
    console.log('Height is defined');
} else {
    console.log('Height is Undefined!')
}

*/

// const numNeighbours = Number(
//     prompt('How many neighbour countries does your country have?')
// );

// if (numNeighbours === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No border');
// }

// const speakEnglish = true;
// const populationInMillions = 50;
// const isAnIsland = false;

// const language = 'Chinese'
// const populationInMillions = 150;
// const isAnIsland = false;

// if (language === 'English' && populationInMillions < 50 && !isAnIsland) {
//     console.log('Sarah wants to live in China!')
// } else {
//     console.log("Sarah doesn't want to live in China")
// }

// const dolphinsScore1 = 96;
// const dolphinsScore2 = 108;
// const dolphinsScore3 = 89;

// const dolphinsScore1 = 97;
// const dolphinsScore2 = 112;
// const dolphinsScore3 = 50;

// const dolphinsAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;

// // const koalasScore1 = 88;
// // const koalasScore2 = 91;
// // const koalasScore3 = 110;

// const koalasScore1 = 109;
// const koalasScore2 = 95;
// // const koalasScore3 = 123;
// const koalasScore3 = 80;

// const koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

// console.log(dolphinsAverageScore, koalasAverageScore);

// if (dolphinsAverageScore > koalasAverageScore) {
//     console.log('Congratulations! Dolphins is the winner 🎉');
// } else if (dolphinsAverageScore === koalasAverageScore) {
//     console.log('Same score for two teams!');
// } else {
//     console.log('Congratulations! Koalas is the winner 🎉');
// }

// const minimumScore = 100;

// if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= minimumScore) {
//     console.log('Congratulations! Dolphins wins the trophy 🏆🎉');
// } else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= minimumScore) {
//     console.log('Congratulations! Koalas is the winner 🏆🎉');
// } else if (koalasAverageScore === dolphinsAverageScore && koalasAverageScore >= minimumScore && dolphinsAverageScore >= minimumScore) {
//     console.log("It's a win-win draw! 🥳");
// } else {
//     console.log('No one wins 😔');
// }


//switch statement 

// const language = 'French'

// switch (language) {
//     case 'Chinese':
//     case 'Mandarin':
//         console.log('MOST number of native speakers');
//         break;
//     case 'Spanish':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'English':
//         console.log('3rd place');
//         break;
//     case 'Hindi':
//         console.log('Number 4');
//         break;
//     case 'Arabic':
//         console.log('5th most spoken language');
//         break;
//     default:
//         console.log('Great language too :D');
// }

// const myCountry = 'China';
// const myCountryPopulation = 44;

// myCountryPopulation > 33 ? console.log(`${myCountry}'s population is above average`) : console.log(`${myCountry}'s population is below average`);

// console.log(myCountryPopulation > 33 ? `${myCountry}'s population is above average` : `${myCountry}'s population is below average`);

// console.log(`${myCountry}'s population is ${myCountryPopulation > 33 ? 'above' : 'below'} average`)

// const tip1 = 0.15;
// const tip2 = 0.2;

// const bill = 40;

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);

// console.log(`The bill was ${bill1}, the tip was ${bill1 >= 50 && bill1 <= 300 ? bill1 * tip1 : bill1 * tip2}, and the total value is ${bill1} + ${tip}`);

