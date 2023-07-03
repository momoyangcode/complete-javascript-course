'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

////////////////////////////////////////////////
/////-----Adding Dates to "Bankist"App-----/////

const formatMovementsDate = function (date) {
  const calcPassedDays = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const passedDays = calcPassedDays(date, new Date());

  if (passedDays === 0) return 'Today';
  if (passedDays === 1) return 'Yesterday';
  if (passedDays <= 7) return `${passedDays} days ago`;

  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const day = `${date.getDate()}`.padStart(2, 0);
  return `${day}/${month}/${year}`;
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);

    const displayDate = formatMovementsDate(date);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// //Fake always loggedin
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Update the date
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const date = `${now.getDate()}`.padStart(2, 0);
    const hours = `${now.getHours()}`.padStart(2, 0);
    const mins = `${now.getMinutes()}`.padStart(2, 0);
    // format: day/month/year
    labelDate.textContent = `${date}/${month}/${year}, ${hours}:${mins}`;

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    //Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//////////////////////////////////////////////////
////////-----Converting and Checking Numbers-----/////////////

// console.log(23 === 23.0);

// //Base 10 ---from 0 to 10;
// //Binary base 2 --- 0, 1;
// console.log(0.1 + 0.2 === 0.3); //Becasue JS use Binary base

// //-----Conversion --from string to number----//
// console.log(Number('23'));
// console.log(+'23');

// //----Parsing(Must start with a numbers!)---// *
// console.log(Number.parseInt('30px'));
// console.log(Number.parseInt('e32'));
// console.log(Number.parseInt('2.5rem'));
// console.log(Number.parseFloat('  2.5rem   '));
// console.log(Number.parseFloat('30px'));

// //--isNaN(check if value is NaN)--//

// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20px'));
// console.log(Number.isNaN(23 / 0)); // Result is Infinite Number

// //--isFinite(check if value is Number)--// *

// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20px'));
// console.log(Number.isFinite(23 / 0));

// //---isInterger--//
// console.log(Number.isInteger(23));
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger(23.5));
// console.log(Number.isInteger(23 / 0));

////////////////////////////////////////////////
////////-----Math and Rounding-----/////////////

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));

//Only way to calculate cubic
// console.log(8 ** (1 / 3));

// console.log(Math.max(5, 36, 48, 3, -11, 6, 8));
// console.log(Math.max(5, 36, '48', 3, -11, 6, 8));
// console.log(Math.max(5, 36, '48px', 3, -11, 6, 8));
// console.log(Math.max(...[5, 36, 48, 3, -11, 6, 8]));

// console.log(Math.min(5, 36, 48, 3, -11, 6, 8));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

//a random number from 0 to 6
// console.log(Math.trunc(Math.random() * (6 - 0 + 1) + 0));

// Create a function which generate from min to max
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomInt(10, 20));

//Rounding Intergers

//Trunc-remove any decimals part
// console.log(Math.trunc(23.2));

// console.log(Math.round(23.2));
// console.log(Math.round(23.5));

// console.log(Math.ceil(23.2));
// console.log(Math.ceil(23.5));

// console.log(Math.floor(23.2));
// console.log(Math.floor('23.5'));

// console.log(Math.floor(23.5));
// console.log(Math.trunc(23.5));

// Floor works both for positiva and negative numbers
// console.log(Math.floor(-23.5));
// console.log(Math.trunc(-23.5));

//Rounding Decimals

//* toFixed always return a string
// console.log((2.7).toFixed());
// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log(+(2.75347).toFixed(2));

////////////////////////////////////////////////
////////-----The Remainder Operator-----////////

// console.log(5 % 2); // 5 = 2 * 2 + 1;
// console.log(8 % 2); // 8 = 2 * 4;
// console.log(8 % 3); // 8 = 2 * 3 + 2;

// const isEven = n => n % 2 === 0;
// console.log(isEven(6));
// console.log(isEven(-24));
// console.log(isEven(9));

//most use case : Nth time need to do something
// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
//     if (i % 2 === 0) {
//       row.style.backgroundColor = 'orangered';
//     }
//     if (i % 3 === 0) {
//       row.style.backgroundColor = 'blue';
//     }
//   });
// });

// labelBalance.addEventListener('click', function () {
//   Array.from(document.querySelectorAll('.movements__row'), (row, i) => {
//     if (i % 2 === 0) {
//       row.style.backgroundColor = 'orangered';
//     }
//     if (i % 3 === 0) {
//       row.style.backgroundColor = 'blue';
//     }
//   });
// });

////////////////////////////////////////////
////////-----Numeric Separators-----////////

//In English 120,844,000,000

// const diameter = 120_844_000_000;
// console.log(diameter);

// const price = 399_99;
// console.log(price);

// const transferFee1 = 15_00;
// const transferFee2 = 1_500;
// console.log(transferFee1, transferFee2);

//Can only be put between numbers
//Bad Example 1:
// const PI = _3_._1415_;

//Only can use in Number, not in a string
//Bad Example 2:
// console.log(Number('2300_000'));

//Can't use in ParseInt/Float
//Bad Example 3:
// console.log(Number.parseInt('230_000'));
// console.log(Number.parseFloat('230_000'));

////////////////////////////////////////////
////////-----Working with BigInt-----///////
/* 
//Biggest safe number in JS
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
//If a num is bigger than this, then JS can't have a accurate represent, examples:

console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);
console.log(52472446729157169100233276032623670);

//BigInt can represent any num, no matte how big it is
console.log(52472446729157169100233276032623670n);

//This Way(BigInt in front) is for smaller number
console.log(BigInt(5247244));

//Operations (works the same)
console.log(1000000000000n + 10000000000000n);
console.log(1232562956291502n * 10000000n);

//Does not work when one is number, one is BigInt
// console.log(1257693245037264146n * 3);
console.log(15n === 15);

//Does work when "<" or ">" or "==" or + 'str'
console.log(20n > '15');
console.log(15n == '15');
console.log(typeof 15n);
console.log(20n + ' is a number');

//Divisions (only return the interger part)
console.log(10n / 3n);
console.log(10 / 3);
 */
////////////////////////////////////////////
////////-----Creating Dates-----///////////

/* //Create a date
const now = new Date();
console.log(now);

console.log(new Date('Jun 26 2023 20:41:58'));
console.log(new Date('December 24, 2023'));
console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2022, 0, 1, 14, 12, 0));
console.log(new Date(1995, 7, 5));

//timestamp
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); */

/* 
//Working with dates
const future = new Date(2035, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getMilliseconds());
console.log(future.getDay());
console.log(future.toISOString());

//Working with timestamp
console.log(future.getTime());
console.log(new Date(2079094980000));
console.log(Date.now());

//Set(1 example):
future.setFullYear(2028);
console.log(future);
 */

////////////////////////////////////////////
////////-----Operation with Dates-----//////
/* 
const future = new Date(2035, 10, 21);
console.log(+future);

const calcPassedDays = (date1, date2) =>
  Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

console.log(
  calcPassedDays(new Date(2035, 10, 21), new Date(2035, 10, 23, 5, 12))
); */
