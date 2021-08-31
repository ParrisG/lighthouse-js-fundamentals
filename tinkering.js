/* Voting Station Calculation
const chooseStations = function (stations) {
  let goodStations = [];
  for (const station of stations) {
    if (station [1] >= 20 && (station [2] === "school" || station [2] === "community centre")) {
      goodStations.push(station[0]);
    }
  }
  return goodStations;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));
*/

/* X Marks the Perfect Shot
const finalPosition = function (moves) {
  const perfectShot = [];
  let x = 0;
  let y = 0;
  for (let direction of moves) {
    if (direction === 'north') {
      y = y + 1;
    } else if (direction === 'east') {
      x = x + 1;
    } else if (direction === 'south') {
      y = y - 1;
    } else if (direction === 'west') {
      x = x - 1;
    }
  }
  perfectShot.push(x);
  perfectShot.push(y);
  return perfectShot;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));
*/

/* Age Calculator
function ageCalculator (name, yearOfBirth, currentYear) {
  let age = 0;
  let ageMessage = "";
  age = currentYear - yearOfBirth;
  ageMessage = name + " is " + age + " years old.";
  return ageMessage;
}
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
*/
/*
function howManyHundreds(num) {
  return Math.floor(num / 100);
}

function calculateRectangleArea(length, width) {
  let area;
  if (length < 0 || width < 0) {
    return area;
  } else {
    area = length * width;
    return area;
  }
}
function calculateTriangleArea(base, height){
  let area;
  if (base < 0 || height < 0) {
    return area;
  } else {
    area = (base * height) / 2;
    return area;
  }
}
function calculateCircleArea(radius) {
  let area;
  if (radius < 0) {
    return area;
  } else {
    area = Math.PI * Math.pow(radius, 2);
    return area;
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1));
*/
