'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
////////------PROJECT: "Bankist" App-----/////////

const addNewUserName = function (accs) {
  accs.forEach(function (acc) {
    return (acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join(''));
  });
};
addNewUserName(accounts);

const displayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} € `;
};

const displaySummary = function (acc) {
  const totalIncome = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, deposit) => acc + deposit, 0);
  labelSumIn.textContent = `${totalIncome}€`;

  const totalOutcome = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, withdrawal) => acc + withdrawal, 0);
  labelSumOut.textContent = `${Math.abs(totalOutcome)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int);

  labelSumInterest.textContent = `${interest}€`;
};

////////------Creating DOM Element-----/////////

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
                    <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
                    <div class="movements__value">${mov}€</div>
                  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);

  //Display balance
  displayBalance(acc);

  //Display summary
  displaySummary(acc);
};
//////----Implementing Login-----////
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Clear Input area
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Display UI(user-interface) and message
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;

    updateUI(currentAccount);
  }
});

//////----Implementing Transfers-----////

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receieveAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receieveAcc &&
    currentAccount.balance >= amount &&
    receieveAcc.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-amount);
    receieveAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

//////----The some Method-----////

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add Movement
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);

    inputLoanAmount.value = '';
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );
    //Delete Account
    accounts.splice(index, 1);
    //Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
////////------Simple Array Methods-----/////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// //SLICE(don't mutate the original array)
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));

// //COPY AN ARRAY
// console.log(arr.slice());
// console.log([...arr]);

// //SPLICE(mutate the original array)
// // console.log(arr.splice(2));

// //Use to delete the last element of an array
// arr.splice(-1);

// // splice(start, deleteCount)
// console.log(arr.splice(1, 2));
// console.log(arr);

// //REVERSE(mutate the original array)
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// //CONCAT (don't mutate the original array)
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //JOIN (don't mutate the original array)
// console.log(letters.join('-'));

/////////////////////////////////////////////////
////////------The new at Method-----/////////
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// //Useful case---Get the last element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

//Can use for string, too
// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

///////////////////////////////////////////////////////
//////////------Looping Arrays: forEach-----///////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('------forEach----');
// movements.forEach(function (mov, i) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

/////////////////////////////////////////////////
//////////------forEach with Maps and Sets-----//

// //MAP
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //SET
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, set) {
//   console.log(`${value}: ${value}`);
// });

/////////////////////////////////////////////////
//////////------Coding Challenge #1-----//

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsJulia2 = [9, 16, 6, 8, 3];
// const dogsKate = [4, 1, 15, 8, 3];
// const dogsKate2 = [10, 5, 6, 1, 4];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaNew = [...dogsJulia];
//   dogsJuliaNew.splice(-2);
//   dogsJuliaNew.shift();

//   const dogs = dogsJuliaNew.concat(dogsKate);

//   dogs.forEach(function (age, i) {
//     console.log(
//       `Dog Number ${i + 1} is ${
//         age >= 3 ? `an adult, and is ${age} years old` : 'still a puppy 🐶'
//       }`
//     );
//   });
// };

// checkDogs(dogsJulia, dogsKate);

// console.log('---------------');
// checkDogs(dogsJulia2, dogsKate2);

/////////////////////////////////////////////////
///////////------The Map Method-----////////////

// const euroToUsd = 1.1;
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movementsToUsd = movements.map(function (mov) {
//   return mov * euroToUsd;
// });

//Use Arrow function to simplify
// const movementsToUsd = movements.map(mov => mov * euroToUsd);
// console.log(movements);
// console.log(movementsToUsd);

// const movToUsd = [];
// for (const mov of movements) {
//   movToUsd.push(mov * euroToUsd);
// }

// console.log(movToUsd);

// const movementsDescription = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You have ${
//       mov > 0 ? 'deposited' : 'withdrew'
//     } ${Math.abs(mov)}`

// if (mov > 0) {
//   return `Movement ${i + 1}: You have deposited ${mov}`;
// } else {
//   return `Movement ${i + 1}: You have withdrew ${Math.abs(mov)}`;
// }
// console.log(movementsDescription);

/////////////////////////////////////////////////
///////////------Computing Usernames-----////////////

// const createNewUserName = function (username) {
//   const userName = username
//     .toLowerCase()
//     .split(' ')
//     .map(name => name[0])
//     .join('');
//   console.log(userName);
// };

// createNewUserName('Steven Thomas Williams');

// const addNewUserName = function (accs) {
//   accs.forEach(function (acc) {
//     return (acc.userName = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join(''));
//   });
// };
// addNewUserName(accounts);
// console.log(accounts);

/////////////////////////////////////////////////
///////////------The filter Method-----////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposit = movements.filter(mov => mov > 0);
// const withdrawal = movements.filter(mov => mov < 0);
// console.log(deposit);
// console.log(withdrawal);

// let deposit = [];
// for (const mov of movements) {
//   if (mov > 0) deposit.push(mov);
// }
// console.log(deposit);

/////////////////////////////////////////////////
///////////------The reduce Method-----////////////

// const sum = movements.reduce((acc, cur, i) => acc + cur, 0);

// console.log(sum);

// let balance = 0;
// for (const mov of movements) {
//   balance += mov;
// }
// console.log(balance);

////----Maximum Value---//////

// const max = movements.reduce((acc, mov) => {
//   // acc > mov ? acc : mov; (undefined)
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);

// console.log(max);

/////////////////////////////////////////////////
///////////------Coding Challenge #2-----////////////
// const dogAge1 = [5, 2, 4, 1, 15, 8, 3];
// const dogAge2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (dogAgeArr) {
//   const humanAge = dogAgeArr.map(dogAge =>
//     dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4
//   );
//   const adultDogsArr = humanAge.filter(age => age >= 18);
// const average =
//   adultDogsArr.reduce((acc, age) => acc + age, 0) / adultDogsArr.length;

//   const average = adultDogsArr.reduce(
//     (acc, age, _, arr) => acc + age / arr.length,
//     0
//   );
//   return average;
// };

// const average1 = calcAverageHumanAge(dogAge1);
// const average2 = calcAverageHumanAge(dogAge2);
// console.log(average1, average2);

/////////////////////////////////////////////////
//////----The Magic of Chaining Methods-----////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const euroToUsd = 1.1;

// const totalDepositUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     // console.log(arr); // use the arr to check problems of chain methods
//     return mov * euroToUsd;
//   })
//   .reduce((acc, mov) => acc + mov);

// console.log(totalDepositUSD);

////*******1. Do not abuse using chain array method (compress in the most optimize way) *******////////
////*******2. Avoid mutating original arrays(use splice, reverse... carefully)*******////////

//////////////////////////////////////
//////----Coding Challenge #3-----////

// const dogAge1 = [5, 2, 4, 1, 15, 8, 3];
// const dogAge2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = dogAgeArr =>
//   dogAgeArr
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, adultDogAge, i, arr) => acc + adultDogAge / arr.length, 0); // (only way to calculate the average in this case)

// const average1 = calcAverageHumanAge(dogAge1);
// const average2 = calcAverageHumanAge(dogAge2);
// console.log(average1, average2));

///////////////////////////////////////////////////////////////////////////////////
//////----The find Method(usually use for finding one element of an array)-----////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //Return the first element which fit with the condition
// const firstWithdrawal = movements.find((mov, i, arr) => mov < 0);
// console.log(firstWithdrawal);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') console.log(acc);
// }

/////////////////////////////////////////////////
////////------some and every-----/////////
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //EQUALITY
// console.log(movements.includes(-130));

// //CONTION
// console.log(movements.some(mov => mov === -130));

// const anyDeposit = movements.some(mov => mov > 0);
// console.log(anyDeposit);

// //////----The every Method-----////

// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// //Separate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

/////////////////////////////////////////////
////////------flat and flatMap-----/////////

//for Nested Array

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[1, [2, 3]], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);

// Use Chainning to simplify
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(overallBalance);

// //////----flatMap(only goes ONE level deep)-----////

// const overallBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(overallBalance);

/////////////////////////////////////////////
////////------Sorting Array-----/////////////

//String (it mutate the array)
// const owners = ['Jonas', 'Zach', 'Adam', 'Matha'];
// console.log(owners.sort());
// console.log(owners);

//Numbers

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//return < 0, A, B
//return > 0, B, A

//////----Ascending-----////
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// movements.sort((a, b) => a - b);

//////----Descending-----////
// movements.sort((a, b) => b - a);
// console.log(movements);

///////////////////////////////////////////////////////
////////------More Ways of Creating and Filling Arrays-----/////////////

// const arr1 = [1, 2, 3, 4, 5, 6, 7];
// const arr2 = new Array(1, 2, 3, 4, 5, 6, 7);
// console.log(arr1, arr2);

// const x = new Array(7);
// console.log(x);

//////----The fill Method-----////
//fill(value, start, end-nocount)//it mutate the array
// x.fill(1);
// console.log(x);

// x.fill(2, 3, 5);
// console.log(x);

//////----Array.from-----////

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);

// const arr = movementsUI.map(el => Number(el.textContent.replace('€', '')));
// console.log(arr);

//////----Another way to create an array from documents.querySelectorAll-----////
// const movementsUI2 = [...document.querySelectorAll('.movements__value')];
// console.log(movementsUI2);
// });

///////////////////////////////////////////////////////
////////------Array Methods Practice-----/////////////

// //1.
// const bankDepositsSum = accounts
//   .flatMap(acc => acc.movements)
//   //.flat()
//   .filter(mov => mov > 0)
//   .reduce((sum, mov) => sum + mov, 0);

// console.log(bankDepositsSum);

// //2.
// // const numDeposits1000 = accounts
// //   .flatMap(acc => acc.movements)
// //   .filter(mov => mov >= 1000).length;

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   // .reduce((count, mov) => (mov >= 1000 ? count + 1 : count))
//   .reduce((count, mov) => (mov >= 1000 ? ++count : count), 0);

// console.log(numDeposits1000);

// // Prefixed ++ operator

// let a = 10;
// // console.log(a++);
// console.log(++a);
// a = a++;
// console.log(a);

// //3.
// const sum = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sum, cur) => {
//       // cur > 0 ? (sum.deposit += cur) : (sum.withdrawal += cur);
//       sum[cur > 0 ? 'deposit' : 'withdrawal'] += cur;
//       return sum;
//     },
//     {
//       deposit: 0,
//       withdrawal: 0,
//     }
//   );

// console.log(sum);

// //4
// //this is a nice title -> This Is a Nice Title

// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);

//   const exceptions = ['a', 'an', 'but', 'and', 'the', 'or', 'on', 'in', 'with'];

//   const convertedTitle = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');

//   console.log(capitalize(convertedTitle));
// };

// convertTitleCase('this is a nice title');
// convertTitleCase('this is a LONG titlebut not too long');
// convertTitleCase('and here is another title with an EXAMPLE');

//////////////////////////////////////////////////
////////-----Coding Challenge #4-----/////////////

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// console.log(dogs);

// const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
// if (sarahDog.curFood < sarahDog.recFood * 0.9) {
//   console.log('it eats too little');
// } else if (sarahDog.curFood > sarahDog.recFood * 1.1) {
//   console.log('It eats too much');
// } else {
//   console.log('it eats okay amount');
// }

// const ownersEatTooMuch = dogs
//   .filter(dog => dog.curFood > dog.recFood * 1.1)
//   .flatMap(dog => dog.owners);
// console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);

// const ownersEatTooLittle = dogs
//   .filter(dog => dog.curFood < dog.recFood * 0.9)
//   .flatMap(dog => dog.owners);
// console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// const owners = dogs.reduce(
//   (owners, dog) => {
//     if (dog.curFood < dog.recFood * 0.9) {
//       owners.ownersEatTooLittle.push(...dog.owners);
//     } else if (dog.curFood > dog.recFood * 1.1) {
//       owners.ownersEatTooMuch.push(...dog.owners);
//     }
//     return owners;
//   },
//   { ownersEatTooLittle: [], ownersEatTooMuch: [] }
// );
// console.log(owners);

// console.log(dogs.some(dog => dog.curFood === dog.recFood));

// console.log(
//   dogs.some(
//     dog => dog.curFood >= dog.recFood * 0.9 && dog.curFood <= dog.recFood * 1.1
//   )
// );

// console.log(
//   dogs.filter(
//     dog => dog.curFood >= dog.recFood * 0.9 && dog.curFood <= dog.recFood * 1.1
//   )
// );

// const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);

// console.log(dogsCopy);
