'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 0,
    address,
    time = '10:00',
    mainIndex = 0,
  }) {
    console.log(
      `Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

// //------Destructuring Arrays------//(a way of unpacking values from an array or object into seperate variables//Break a complex data structure down into a smaller data structure like variables)
// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// //[] here is Not an array, but a destructuring assignment (left side of "=")
// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //Switching variables

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [secondary, main] = [main, secondary];
// console.log(main, secondary);

// //Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //Nested destructuring
// const nested = [2, 3, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Defalut values
// const [q = 1, p = 1, r = 1] = [8];
// console.log(q, p, r);

// //------Destructuring objects------//
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// //Variable name being different with the property name
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// // Default value
// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters);

// //Mutating variables
// let e = 10;
// let f = 20;
// const obj = { e: 1, f: 2 };

// ({ e, f } = obj);
// console.log(e, f);

// //Nested objects
// const { fri } = openingHours;
// console.log(fri);

// const {
//   fri: { open: openHour, close: closeHour, break: breakhour = '' },
// } = openingHours;

// console.log(openHour, closeHour, breakhour);

// // Functions with many parameters, we can pass an object as an argument
// restaurant.orderDelivery({
//   time: '20:00',
//   address: 'Samoborska 11',
//   starterIndex: 2,
//   mainIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'lusan street 34',
//   starterIndex: 2,
// });

// //------The Spread Operator(...)------//

// const arr1 = [7, 8, 9];
// const badNewArr = [1, 2, arr1[0], arr1[1], arr1[2]];
// const goodNewArr = [1, 2, ...arr1];

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join 2 arrays
// const wholeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(wholeMenu);

// //Iterabels: arrays, strings, map, set, Not objects

// const str = 'momo';
// const letter = [...str, '', 'Y'];
// console.log(letter);
// console.log(...str);
// // console.log(`${...str} Yang`);

// //Pass each single value as an argument in functions //Real-word example
// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt('Ingredient2?'),
//   // prompt('Ingredient3?'),
// ];
// restaurant.orderPasta(...ingredients);

// //Objects
// const newRestaurant = { ...restaurant, foundedYear: 1995, founder: 'Smith' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Secondonll';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

//------Rest Pattern and Parameters------//

//Spread, because ... on the right side of =
// const arr2 = [1, 2, ...[3, 4]];

// //Rest, because ... on the left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// //Arrays
// const [pizza, pasta, ...otherfood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, pasta, otherfood);

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //Functions

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     console.log(sum);
//   }
// };

// add(2, 3);
// add(5, 6, 7, 8);
// const x = [25, 65, 9];
// add(...x);

// restaurant.orderPizza('salt', 'mushrooms', 'galic', 'olive oil');
// restaurant.orderPizza('salt');

//------Short Circuitting(&& and ||)------//

//Use any data type, return any date type

//  --||---Return the first truthy value
// console.log(3 || 'momo');
// console.log('' || 'momo');
// console.log(true || 0);

//  --When it is all falsy values, return the last value--
// console.log(undefined || null);
// console.log('' || undefined || 0 || null);

// restaurant.numGuest = 23;
// const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuest || 10;
// console.log(guest2);

//  --&&---Return the first falsy value
// console.log(0 && 'momo');

//  --When it is all truthyvalues, return the last value--
// console.log(7 && 'momo');

// Examples
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'ham');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'ham');

//------The Nullish Coalescing Operator(??)------//
// restaurant.numGuests = 0;
// const guestsWrong = restaurant.numGuests || 10;
// console.log(guestsWrong);

//--Nullish: undefined and null (Not 0 or '')--
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

//------Logical Assignment Operator------//
// const restaurant1 = {
//   name: 'Mime',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const restaurant2 = {
//   name: 'Tori',
//   owner: 'Jondde Udescd',
// };

// OR Assignment Operator
// restaurant1.numGuests = restaurant1.numGuests || 10;
// restaurant2.numGuests = restaurant2.numGuests || 10;
// restaurant1.numGuests ||= 10;
// restaurant2.numGuests ||= 10;

//Nullish Assignment Operator
// restaurant1.numGuests ??= 10;
// restaurant2.numGuests ??= 10;

// console.log(restaurant1.numGuests);
// console.log(restaurant2.numGuests);

//AND Assignment Operator
// restaurant1.owner = restaurant1.owner && 'ANONYMOUS';
// restaurant2.owner = restaurant2.owner && 'ANONYMOUS';

// restaurant1.owner &&= 'ANONYMOUS';
// restaurant2.owner &&= 'ANONYMOUS';
// console.log(restaurant1);
// console.log(restaurant2);

// ---Coding challenge #1---//

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;
// // console.log(players1);
// // console.log(players2);

// // const [gk, ...fieldplayers] = players1;
// // console.log(gk);
// // console.log(fieldplayers);

// // const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // const { team1, x: draw, team2 } = game.odds;
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   for (const player of players) {
//     console.log(player);
//   }
//   console.log(`${players.length} goals were scored`);
// };

// // printGoals('Davis', 'Muller', 'Lewandowski');
// printGoals(...game.scored);

// console.log(
//   `${(team1 < team2 && game.team1) || game.team2} is more likely to win`
// );

//------Looping Arrays: The for-of Loop------//

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//   console.log(item);
// }
// for (const [i, el] of menu.entries()) {
//   console.log(`Menu ${i + 1}: ${el}`);
// }

//------Enhanced object iterals------//

// ----1----//

// const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [`weekday-${2 + 4}`]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurantCopy = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   //ES6 Enhanced Object iterals

//   // ----2----//
//   openingHours,
//   // ----3----//
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 0, address, time = '10:00', mainIndex = 0 }) {
//     console.log(
//       `Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
//   },

//   orderPizza(mainIngredient, ...otherIngredient) {
//     console.log(mainIngredient);
//     console.log(otherIngredient);
//   },
// };

//------Optional Chaining(?.)------//

// console.log(restaurant.openingHours.mon.open);

// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

//--With Optional Chaining(?.)

// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// //Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method does not exist');

// //Arrays
// const user = [
//   {
//     name: 'Momo',
//     email: 'momo.yang0805@gmail.com',
//   },
// ];
// const userCopy = [];

// console.log(user[0]?.name ?? 'User does not exist');
// console.log(userCopy[0]?.name ?? 'User does not exist');

// //------Looping Objects: Object Keys, Values, and Entries------//

// //--Property Name
// const properties = Object.keys(restaurant.openingHours);
// // console.log(properties);

// // for (const day of properties) {
// //   console.log(day);
// // }

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// //--Property Value
// const value = Object.values(restaurant.openingHours);
// console.log(value);

// //--Entire Object
// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day}, we open at ${open}, close at ${close}`);
// }

// ---Coding challenge #2---//

// for (const [number, playerName] of game.scored.entries()) {
//   console.log(`Goal ${number + 1}: ${playerName}`);
// }
// const value = Object.values(game.odds);
// console.log(value);

// let total = 0;
// for (let i = 0; i < value.length; i++) {
//   total += value[i];
// }

// const average = total / value.length;
// console.log(average);

// const entries = Object.entries(game.odds);
// for (const [team, odd] of entries) {
//   console.log(
//     `odd of ${team !== 'x' ? `victory ${game[team]}` : 'draw'}: ${odd}`
//   );
// }

// const scored = game.scored;
// // console.log(scored);
// let scores = {};

// for (let i = 0; i < scored.length; i++) {
//   if (scores[scored[i]]) {
//     scores[scored[i]] += 1;
//   } else {
//     scores[scored[i]] = 1;
//   }
// }

// console.log(scores);

// //------Sets------//

// const orderSet = new Set([
//   'pasta',
//   'pizza',
//   'pizza',
//   'risotto',
//   'pasta',
//   'pizza',
// ]);

// console.log(orderSet);

// console.log(new Set('momo'));

// console.log(orderSet.size);
// console.log(orderSet.has('pizza'));
// console.log(orderSet.has('rice'));

// orderSet.add('bread');
// orderSet.add('bread');

// console.log(orderSet);

// orderSet.delete('pasta');
// console.log(orderSet);

// // orderSet.clear();
// // console.log(orderSet);

// for (const order of orderSet) {
//   console.log(order);
// }

// //Example

// const staff = ['chef', 'waiter', 'waiter', 'manager', 'waiter'];
// const staffUnique = new Set(staff);
// console.log(staffUnique);

// const staffUniqueArr = [...new Set(staff)];
// console.log(staffUniqueArr);

// console.log(new Set(staff).size);
// console.log(new Set('momo').size);

// //------Maps: Fundamentals------//

// const rest = new Map();
// rest.set('name', 'Batak');
// rest.set(1, 'Zagreb');
// rest.set(2, 'Vienna');

// console.log(rest.set(3, 'Shanghai'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 9)
//   .set('close', 22)
//   .set(true, 'we are open')
//   .set(false, 'we are closed');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time >= rest.get('open') && time <= rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();
// console.log(rest);

// const arr = [1, 2];

// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// //------Maps: Iteration------//
//--Better way to create map without using set method

// const questions = new Map([
//   ['question', 'What is the most popular programming lanuage in the world?'],
//   [1, 'Java'],
//   [2, 'Python'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'You are right!🎉'],
//   [false, 'Try again'],
// ]);

// console.log(questions);

// //--Convert Object to Map
// console.log(Object.entries(restaurant.openingHours));
// const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);

// console.log(questions.get('question'));
// for (const [key, value] of questions) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// // const answer = Number(prompt('Your answer'));
// // console.log(answer);

// // if (answer === 3) {
// //   console.log(questions.get(true));
// // } else {
// //   console.log(questions.get(false));
// // }
// //Better way
// // console.log(questions.get(questions.get('correct') === answer));

// //--Convert Map to array

// console.log([...questions]);
// console.log([...questions.keys()]);
// console.log([...questions.values()]);

// ---Coding challenge #2---//
// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const events = new Set(gameEvents.values());
// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents);
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} mins`
// );

// for (const [mins, event] of gameEvents) {
//   console.log(`${mins < 45 ? 'First Half' : 'Second Half'} ${mins}: ${event}`);
// }

// ---Working With String - Part 1---//

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B303'[0]);

// console.log(airline.length);
// console.log('B202'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal')); //Case sensitive

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the Middle Seat!🥳');
//   } else {
//     console.log('You got lucky 😎');
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('3C');
// checkMiddleSeat('9E');

// //Behind the Scene(why we can use method in String)

// console.log(new String('momo'));
// console.log(typeof new String('momo'));
// console.log(typeof new String('momo').slice(1));

// ---Working With String - Part 2---//

// // console.log(airline.toLowerCase());
// // console.log(airline.toUpperCase());

// // Fixing Capitalization in name
// const passenger = 'MoMo';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// //Comparing Email
// const email = 'hello@jonas.io';
// const loginEmail = '   Hello@Jonas.Io \n';

// // const emailLower = loginEmail.toLowerCase();
// // const emailTrim = emailLower.trim();
// // console.log(emailTrim);

// const emailNormal = loginEmail.toLowerCase().trim();
// console.log(email === emailNormal);

// //Replacing
// const priceGB = '23,38£';
// const priceUS = priceGB.replace(',', '.').replace('£', '$');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// //Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Leo'));
// console.log(plane.startsWith('Airbu'));

// if (plane.includes('neo') && plane.startsWith('Airbus')) {
//   console.log('Part of new Airbus family');
// }

// //Practice
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };

// ---Working With String - Part 3---//

// console.log('a+very+nice+string'.split('+'));
// console.log('Momo Yang'.split(' '));

// const [firstName, lastName] = 'Momo Yang'.split(' ');
// const newName = ['Mrs', firstName, lastName].join(' ');
// console.log(newName);

// const capitalizeName = function (names) {
//   const name = names.split(' ');
//   const capName = [];
//   for (const n of name) {
//     // capName.push(n[0].toUpperCase() + n.slice(1));
//     capName.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(capName.join(' '));
// };

// capitalizeName('alex william anna bill');
// capitalizeName('momo yang');

// //Padding
// const message = 'Go to gate 23';
// console.log(message.padStart(20, '+').padEnd(30, '+'));
// console.log('momo'.padStart(20, '+').padEnd(30, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };
// console.log(maskCreditCard(2049227562992));
// console.log(maskCreditCard(4873212));
// console.log(maskCreditCard('243566924295622258'));

// // Repeat
// const message2 = 'Bad weather...All Departure Delayed...';
// console.log(message2.repeat(5));

// const planeInLine = function (number) {
//   console.log(`There are ${number} planes in the line ${'🛩'.repeat(number)} `);
// };

// planeInLine(5);

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const btn = document.querySelector('button');

// const camelCaseConvert = function () {
//   const text = document.querySelector('textarea').value;
//   const names = text.split(' ');
//   const arr = [];
//   for (const name of names) {
//     const [first, second] = name.split('_');
//     const newName = [
//       first.replace(first[0], first[0].toLowerCase()),
//       second.replace(second[0], second[0].toUpperCase()),
//     ].join('');
//     arr.push(newName);
//   }
//   for (const t of arr) {
//     console.log(`${t.padEnd(20, ' ')}     ${'✅'.repeat(arr.indexOf(t) + 1)}`);
//   }
// };

// btn.addEventListener('click', camelCaseConvert);

// btn.addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.toLowerCase().split('\n');
//   // console.log(rows);
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.trim().split('_');
//     // console.log(first, second);
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

// ---String Methods Practice---//

// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // 🔴 Delayed Departure from FAO to TXL (11h25)
// //              Arrival from BRU to FAO (11h45)
// //   🔴 Delayed Arrival from HEL to FAO (12h05)
// //            Departure from FAO to LIS (12h30)

// // console.log(flights.split('+'));
// const getCode = str => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split('+')) {
//   // console.log(flight.split(';'));
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
//     '_',
//     ' '
//   )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
//     'h',
//     ':'
//   )})`.padStart(36);
//   console.log(output);
// }
