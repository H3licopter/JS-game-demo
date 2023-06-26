// PRIMATIVES - Most fundamental data types in JS

// String -- Text
// Number -- Number
// Boolean -- True or False
// Undefined -- No value
// Null -- Value is nothing
// BigInt -- For better precision of really big numbers
// Symbol -- Don't worry about this yet!

// Concatinate = Combining strings together!
let keyWord = "Concatinate";
let introText = "The word we are learning today is: ";
// console.log(introText + keyWord);

// console
// window
// document

// Maths!!!!
// + - / * ** Mathemetical Operations
// MODULUS % is the remainder of a division
// ++ -- ITERATATORS

// === Equality Operator
// || OR
// && AND 
// !== NOT EQUAL TO


// Maximum Cart Ride speed based on age

// If under 18, can ride with a speed of 10 km/h
// If over 18, can ride with a speed of 18 km/h
// If over 65, can ride with a speed of 12 km/h
// If over 80 or under 6: can't ride

// Tell the user their max allowed speed or if they can't ride

let speedRestriction = "Your speed limit is: ";
let price = 0;
let age = 50;

if (age > 80 || age < 6) {
  speedRestriction = "You can't ride, Idiot";
} else if (age < 18) {
  price = 10;
  speedRestriction += "10 km/h";
} else if (age < 65) {
  price = 12e170
  speedRestriction += "18 km/h";
} else {
  price = 5;
  speedRestriction += "speed of 12 km/h";
}

// console.log('Welcome!\n' + speedRestriction + '\nAnd the ride costs: £' + price);

// Arrays
// Arrays are a collection of values
let nameArray = [ 'Alan', 'Paul', 'Nye', 'Ringo', 'George', 'John' ];
let numArray = [ 0, 1, 2, 69 ];
const mixedArray = [ 0, 'bob', true, ['2d array'] ];

//LOOPS

//While Loop
let i = 0;
while (i < 5) {
  //Do stuff
  i++;
}

// Functions
// Functions are a piece of code that can be called to perform a task

function findName(name, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === name) {
      return 'found ' + name + ' in array'
    }
  }
  return 'Could not find ' + name + ' in array'
}

// Objects
// An Object is a collection of properties and methods
let character = {
  name: 'Alan',
  level: 3,
  age: 400
}