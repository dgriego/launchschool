// number to string

// 1234
// I need to extract each value from the number in isolation
// and append to a string

// 1234 = 1
// 1234 = 2
// 1234 = 3


// build a library or structure that contains the string values
// '0123456789' -> this might works since it has indeces

// create the array of the values I need [1000, 100, 10, 1]

// on each iteration
//. divide current number by top of the 10s array
//. ie. 1234 / 1000
//. get the floor of the number

//  get the remainder and save it for next iteration
//. look up value in string
//. append to string

// start in reverse to get teh 10s I need
const number = 1234566;
const numberStrings = '0123456789';
let tensArr = [];
let baseTen = 1;

while (true) {
  tensArr.push(baseTen);

  if (Math.floor(number / baseTen) === 1) {
    break;
  }

  baseTen *= 10;
}


let next = number;
let str = '';

tensArr.reverse().forEach(val => {
  let result = Math.floor(next / val);
  next %= val;
  str += numberStrings[result];
});

console.log(str);
