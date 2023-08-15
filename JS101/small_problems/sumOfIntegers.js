const readLineSync = require('readLine-sync');

const number = Number(readLineSync.question('Please enter an integer greater than 0: '));
const sumOrProduct = readLineSync.question('Enter "s" to computer the sum, or "p" to compute the product. ');

const numbers = [...Array(number).keys()].map(val => val + 1);
const initialValue = sumOrProduct === 's' ? 0 : 1;

const result = numbers.reduce((previous, current) => {
  if (sumOrProduct === "s") {
    return previous + current;
  } else {
    return previous * current;
  }
}, initialValue);

const message = `The ${sumOrProduct === 's' ? 'sum' : 'product'} of the integers between 1 and ${number} is ${result}`;
console.log(message);
