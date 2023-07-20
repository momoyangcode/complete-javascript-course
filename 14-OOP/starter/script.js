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

// //class expression
// const PersonCl = class {};

// //calss declaration
// class PersonCl {}

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   //Instance Methods: Method will be added to the prototype property
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return this.calcAge();
//   }

//   //Static Methods
//   static hey() {
//     console.log('Hey there 👋');
//     console.log(this);
//   }
// }

// const momo = new PersonCl('Momo', 1995);
// momo.age;
// console.log(momo);
// momo.calcAge();
// console.log(momo.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// momo.greet();

//1. Classes are NOT hoisted
//2. Classes are first-class citizes
//3. Classes are executed in strict mode

/////////////////////////////////////////////////
/////////---Setters and Getters----//////////////
// const account = {
//   owner: 'momo',
//   movements: [200, 100, -50, 80],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   //any setter method need to have exactly 1 parameter
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

//As a property, not a function
// console.log(account.latest);
// account.latest = 999;
// console.log(account.movements);

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   //Set properties that already exist
//   set fullName(name) {
//     if (name.includes(' ')) {
//       this._fullName = name;
//     } else {
//       alert(`${name} is not a full name `);
//     }
//   }

//   get fullName() {
//     return this._fullName;
//   }
// }

// const momo2 = new PersonCl('Momo Yang', 1995);
// console.log(momo2.fullName);

// const jessica = new PersonCl('Jessica Walter', 1989);

/////////////////////////////////////////////////
///////////---Static Methods----/////////////////

//examples: Array.from is really attached to the entire constructor, it's not in the prototype of Array
// Number.parseFloat(12);

//Add a static method on constructor functions
// const Users = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Users.hey = function () {
//   console.log('Hey there 👋');
//   //this keyword will be the object which calling the method
//   console.log(this);
// };

// Users.hey();

//Add a static method on classes---line 150
// PersonCl.hey();

/////////////////////////////////////////////////
///////////---Object.create----/////////////////
/* 
const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  init(firstName, birthYear) {
    (this.firstName = firstName), (this.birthYear = birthYear);
  },
};

//link the prototype to any object you want
const steven = Object.create(PersonProto);
console.log(steven.__proto__);

steven.name = 'Steven';
steven.birthYear = 2000;
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 2003);
sarah.calcAge(); */

//////////////////////////////////////////////////////
///////////---Coding Challenge #2----/////////////////
/* 
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 120);
console.log(ford.speedUS);
ford.speedUS = 50;
console.log(ford); */

///////////////////////////////////////////////////////////
///////////---Inheritance Between "Classes": Constructor Functions----/////////////////
/* 
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//We need to create the prototype first before we add any other methods in it

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`Hi, my name is ${this.firstName}, I study ${this.course}`);
};

const david = new Student('David', 1997, 'Computer Science');
david.introduce();
david.calcAge();
console.log(david.__proto__);
console.log(david.__proto__.__proto__);

//We need to fix the problem below:
console.dir(Student.prototype.constructor);

//Solution:
Student.prototype.constructor = Student;

console.dir(Student);
 */

///////////////////////////////////////////////////////////
///////////---Coding Challenge #3----/////////////////
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

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

//Link the prototype
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
tesla.brake();
tesla.accelerate();
 */

///////////////////////////////////////////////////////////
///////////---Inheritance Between "Classes": ES6 Classes----/////////////////
/* 
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log((this.age = 2023 - this.birthYear));
  }

  greet() {
    console.log(`Hey ${this.fulltName}`);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full Name`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey 👋');
  }
}

class Student extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always need to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I am ${2023 - this.birthYear} years old`);
  }
}

const momo = new Student('Momo Yang', 1995, 'JavaScript');

// console.log(momo);
// momo.introduce();
// momo.calcAge();
 */
///////////////////////////////////////////////////////////
///////////---Inheritance Between "Classes": Object.create----/////////////////
/* 
const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2004, 'Python');
jay.introduce();
jay.calcAge();
 */

///////////////////////////////////////////////////////////
///////////---Another Class Example----/////////////////
/* class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thank you for opening the account, ${this.owner}`);
  }

  //Public Interface: Much better to creact methods that intereact with properties

  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('jonas', 'EUR', 1111);

// acc1.movements.push(200);
// acc1.movements.push(-200);

acc1.deposit(100);
acc1.withdraw(100);

console.log(acc1); */

///////////////////////////////////////////////////////////
///////////---Encapsulation: Protected Properties and Methods----/////////////////
/* 
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //Protected property
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thank you for opening the account, ${this.owner}`);
  }

  //Public Interface: Much better to creact methods that intereact with properties
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  } //Only bank can decide

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('jonas', 'EUR', 1111);

// acc1.movements.push(200);
// acc1.movements.push(-200);

acc1.deposit(100);
acc1.withdraw(100);
console.log(acc1.getMovements());
console.log(acc1);
 */

///////////////////////////////////////////////////////////
///////////---Encapsulation: Private Class Fields and Methods----/////////////////
/* 
//1. Public fields
//2. Private fields
//3. Public methods
//4. Private methods

//(there is also static version)

class Account {
  //Public fields(instances):
  locale = navigator.language;

  //2) Private fields(instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thank you for opening the account, ${this.owner}`);
  }

  //3) Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
  this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }

  //4) Private methods

  #approveLoan(val) {
    return true;
  }

  static helper() {
    console.log(`Helper`);
  }
}

const acc1 = new Account('jonas', 'EUR', 1111);

acc1.deposit(100);
acc1.withdraw(100);

console.log(acc1);
console.log(acc1.getMovements());

Account.helper();
 */

///////////////////////////////////////////////////////////
///////////---Chaining Methods----////////////////////////
/* 
class Account {
  locale = navigator.language;
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thank you for opening the account, ${this.owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }

    return this;
  }

  #approveLoan(val) {
    return true;
  }

  static helper() {
    console.log(`Helper`);
  }
}

const acc1 = new Account('jonas', 'EUR', 1111);

acc1.deposit(100);
acc1.withdraw(100);
console.log(acc1);

//Chaining
acc1.deposit(300).deposit(500).withdraw(89).requestLoan(100);
console.log(acc1.getMovements());
 */

///////////////////////////////////////////////////////////
///////////---Coding Challenge #4----////////////////////////
/* 
class CarCl {

  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed}km/h, with a charge of ${
        this.#charge
      }`
    );

    return this;
  }
}

const car1 = new EVCl('Rivian', 120, 23);
car1.chargeBattery(88).accelerate().brake().accelerate();

console.log(car1.speedUS);
 */
