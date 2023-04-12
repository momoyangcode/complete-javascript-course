'use strict';

function calcAge(birthYear) {
  const age = 2023 - birthYear;
  //   console.log(firstName);

  function printAge() {
    let output = `You are ${firstName}, and ${age} years old, born in ${birthYear}.`;
    console.log(output);
    // console.log(add(2, 3));

    if (birthYear >= 1981 && birthYear <= 1996) {
      // var millenial = true;

      //******Create new variable with the same name as outer scope's variable******//
      const firstName = 'Steve';
      const str = `${firstName} is a millenial`;
      console.log(str);
      // console.log(add(2, 3));
    }

    function add(a, b) {
      return a + b;
    }
    console.log(add(2, 3));

    //******Reassigning outer scope's variable******//
    output = 'New Output!';
    console.log(output);
    //   console.log(millenial);
  }
  printAge();
  // A return statement ends the execution of a function (ususally in the end of a function)
  return age;
}

// console.log(add(2, 3));

const firstName = 'Momo';

calcAge(1995);
