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
const mixedArray = [ 0, 'bob', true, ['2d array', 'things', 'stuff'] ];

const gameBoard = [
  ['Rook', 'Knight', 'Bishop', 'Queen', 'King', 'Bishop', 'Knight', 'Rook'],
  ['Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn'],
  ['Rook', 'Knight', 'Bishop', 'Queen', 'King', 'Bishop', 'Knight', 'Rook']
]

// Changing (Mutating) a value in an array
nameArray[2] = 'Bob';

// Adding values to end of array
nameArray[6] = 'Karen';

let arrayLength = nameArray.length;
nameArray[arrayLength] = 'Dave';

nameArray.push('Fred', 'Jill');

// Adding values to start of Array
nameArray.unshift('Harriet');

//Remove Value from the end of the Array
nameArray.pop();

//Remove value from start of array
nameArray.shift();

//LOOPS

//While Loop
let i = 0;
while (i < nameArray.length) {
  i++;
}

//Do while
do {
  i++;
} while (i < 5);

// Functions
// Functions are a piece of code that can be called to perform a task

function findName(name, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === name) {
      return true
    }
  }
  return false
}


const cards = [6, 427, 8787, 3, 98, 456765445];



// Switch Statement
let number = 3;
switch(number) {
  case 1:
    break;
  case 2:
    console.log("Yay the number is two!")
    break;
  case 3:
    break;
  default: 0
    break;
} 

// Objects
// An Object is a collection of properties and methods
let alanCustomer = {
  name: 'Alan',
  age: 34,
  purchased: [1231234, 12392947, 123442],
}

// Classes
// Classes are blueprints for objects

class Customer {
  constructor(name, age, purchases) {
    this.name = name
    this.age = age
    this.purchases = purchases
  }

  hasItem(item) {
    return this.purchases.includes(item)
  }
}

let alan = new Customer('Alan', 34, [123, 234, 345]);

// Anonymous Functions
// Functions without a name

() => console.log("Hello World!")

//is the same as:
function thing() {
  console.log("Hello World!")
}


// Higher order functions
// Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher order functions

setTimeout(() => console.log("Hello World!"), 1000);

// setInterval(thing, 1000);


const coolFunction = (msg) => {
  console.log(msg)
}

