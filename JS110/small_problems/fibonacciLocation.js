// Problemr is that we want to find the incrementer
// of a particular fib number that matches the number
// of digits specified by the argument
//
// (the first fibonacci number has an incrementer of 1)
//
// -> create a fibonacci array
// -> create a mechanism for producing fibonaccis
// -> tracking the incrementer that would match the argument

// Examples
// 2 => [1, 1, 2, 3, 5, 8, 13] => 7
// and so on...

// Data structure
// array where we can track the incrementer

// Algo
//
// Fibonacci
// ----
// INIT fibArray = [1, 1]
// INIT firstNumuber = 1
// INIT secondNumber = 1
// 1, 1, 2, 3, 5
// INIT startincrementer = 0
//
// startincrementer + startIndex + 1
// 1 + 1 = 2
// first = second
// second = first + second
//
// startincrementer + startIndex + 1
// first = 1
// second = 2
// 2 is added to fibArray
// [1, 1, 2]
//
// 1 + 2 = 3
// first = 2
// second = 3
// 3 is add to fibArray

// if secondNumber is null
// first + first
//
// begin loop
// first = fibArr[counter]
// second = fibArr[counter + 1]
// fib = first + second
// fibArr.push(fib)
// if fib converted to string matches the argument
//   store that counter value
// increment counter
// end
//
// want to find length of argument to integer
// 2n

function findFibonacciIndexByLength(length) {
  const fibArray = [1, 1];
  let locationIndex = 7;
  let incrementer = 0;

  while (true) {
    const firstNumber = fibArray[incrementer];
    const secondNumber = fibArray[incrementer + 1];
    const fib = firstNumber + secondNumber;
    fibArray.push(fib);

    if (String(fib).length === Number(length)) {
      locationIndex = BigInt(incrementer + 3);
      break;
    }

    incrementer++;
  }

  return locationIndex;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);
