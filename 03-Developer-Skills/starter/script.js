// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//////-----live-server--------/////////

/* const x = '23';

if (x === 23) console.log(23);

const calcAge = birthYear => 2023 - birthYear;

console.log(calcAge(1995)); */

//////------Using Google, StackOverFlow and MDN------///////

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1) Understanding the problem

//--- What is temperature amplitude? Answer: It's the diffences between highest and lowest temperature.
//--- How to calculate the min and max temperatures?
//--- What's a sensor error? What should I do with it? Answer: Ignore the sensor error.

//2) Breaking up into sub-problems

//--- How to ignore errors?
//--- Find max temperature in array
//-- Find min temperature in array.
//-- Subtract min from max and return it

/* const calcAmplitude = function (temp) {
  let min = temp[0];
  let max = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcAmplitude(temperatures);
console.log(amplitude); */

// PROBLEM 2:
//-Function should now receive 2 arrays of temps

//1) Understanding the problem
//--How to change the function? Do we create a new one? or implement the functionality twice?
// NO, just merge 2 arrays.

//2) Breaking up into sub-problems

//---How to merge 2 arrays
/* 
const calcAmplitude = function (temp1, temp2) {
  const temp = temp1.concat(temp2);
  let min = temp[0];
  let max = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcAmplitude(temperatures);
console.log(amplitude); */

///////-------Debugging with the console and Breakpoints-----////////

/* const measureKelvin = function () {
  const measurement = {
    type: 'temperature',
    unit: 'celsius',
    // C) Fix
    // value: Number(prompt('Degree celsius')),
    value: 10,
  };

  //   console.error(measurement.value);
  //   console.warn(measurement.value);
  //   console.log(measurement.value);
  //   console.log(measurement);
  //   console.table(measurement);
  // B) Find
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) Identify
console.log(measureKelvin()); */

//////-----Codin Challenge 1-----///////

/* 
const printForecast = function (arr) {
  let forecast = '...';
  for (let i = 0; i < arr.length; i++) {
    const describe = `${arr[i]}°C in ${i + 1} days ... `;
    forecast += describe;
  }
  return forecast;
};

const arr1 = [17, 21, 23];
console.log(printForecast(arr1));

const arr2 = [12, 5, -5, 0, 4];
console.log(printForecast(arr2)); */
