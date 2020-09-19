'use strict';

/* Age in Dog Years */

const calculateAgeInDogYears = (ageOfPerson) => {
  const ageInDogYears = ageOfPerson / 7;

  return ageInDogYears;
};

const dogAge = calculateAgeInDogYears(49);

console.log(dogAge);

/*  Best in Show */

const bestInShow = (dogBreed) => {
  if (dogBreed === 'schnauzer') {
    return 'My favorite dog breed is schnauzer';
  }
  return 'This is not my favorite dog.';
};

const myFavorite = bestInShow('doberman');

console.log(myFavorite);

/*   Addition */

const add = (z, y, x) => {
  const sum = x + y + z;
  return sum;
};

console.log(add(6, 5, 2));

/* Self-Driving Cars */

const go = (direction, speed) => {
  if (speed > 75) {
    console.log(`The car is moving ${direction} at ${speed} mph. SLOW DOWN!`);
  } else console.log(`The car is moving ${direction} at ${speed} mph.`);
};

go('in circles', 80);
go('forward', 65);
go('backward', 45);

/* Evens or Odds */

const evenOrOdd = (num) => {
  if (num % 2 === 0) {
    return 'Even';
  }
  return 'Odd';
};

console.log(evenOrOdd(80));

/* Double Functions */

const words = [
  'The',
  'killing',
  'complex',
  'houses',
  'married',
  'kittens',
  'and',
  'single',
  'soldiers',
  'and',
  'their',
  'kleptomaniacal',
  'families',
];

const filterOutK = (array) => {
  return array.filter((word) => !word.startsWith('k'));
};

const sentence = (array) => {
  return array.join(' ') + '.';
};
const filteredArray = filterOutK(words);
console.log(sentence(filteredArray));

/* You Can Tune a Piano, But You Can't... */

const caughtTuna = () => {
  const randomizer = Math.floor(Math.random() * 3);
  if (randomizer === 2) {
    console.log('Sven hooked a tuna!  :)');
  } else {
    console.log('Sven came up empty-handed.  :(');
  }
};

caughtTuna();

/*   Fast Food (Multiple Parameters) */

const junkFoodMeal = (sandwich, side, drink, dessert) => {
  const createObject = {
    sandwhich: sandwich,
    side: side,
    drink: drink,
    dessert: dessert,
  };
  return createObject;
};

const takeOutBag = junkFoodMeal(
  'impossible burger',
  'tator tots',
  'vanilla coke',
  'chocolate chip cookie'
);

console.log(takeOutBag);

/* Practice: Same Chores, Different Days */

const twice = (number) => number * 2;
const timesFive = (number) => number * 5;
const square = (number) => number * number;
const cube = (number) => number * number * number;

const bigify = (number, operation) => {
  const result = operation(number);
  return result;
};

const number = 7;
const by2 = bigify(number, twice);
const by5 = bigify(number, timesFive);
const byItself = bigify(number, square);
const cubed = bigify(number, cube);

console.log(cubed, by2, by5, byItself);

const daughter = {
  firstName: 'Mariah',
  lastName: 'Patton',
};

const putUpToys = () => 'puts all toys in the toy bin';
const makeUpBed = () => 'make up the bed';
const putAwayClothes = () =>
  'put clothes in proper drawers after mom and dad fold';
const putUpGroceries = () => 'helps mom and dad put away groceries';
const cleanPlayArea = () => 'puts away all toys that are in play area';
const putUpShoes = () => 'put shoes in shoe rack next to door';

const dayPlanner = (day, chore1, chore2, chore3, name) => {
  return `On ${day}, ${daughter.firstName} ${daughter.lastName} ${chore1}, and ${daughter.firstName} ${daughter.lastName} ${chore2}, and ${daughter.firstName} ${daughter.lastName} ${chore3}.`;
};
console.log(
  dayPlanner('Saturday', daughter, putUpShoes(), putUpToys(), putUpGroceries())
);
