/*
 *
 * Create a function that takes a string argument that
 * consists entirely of numeric digits and computes the
 * greatest product of four consecutive digits in the string.
 * The argument will always have more than 4 digits.
 *
 * 1. grabbing 4 values at a time
 *  length = 4
 *  idx + 4 >, 1 + 4 = 5
 *  0 + 4, 0, 1, 2, 3
 *  1 + 4, 1, 2, 3, 4
 *  idx -> slice(idx, 4)
 *
 *  A ->
 *
 *  START
 *    store largest
 *    convert to integers and split
 *
 *    loop, val, idx
 *       group = slice(idx, idx + 4)
 *       group reduce product
 *       compare largest
 */

const p = console.log;

function greatestProduct(str) {
  let largest = -Infinity;
  const nums = str.split("").map((char) => Number(char));

  nums.forEach((_, idx) => {
    if (idx + 4 > nums.length) return;

    const product = nums.slice(idx, idx + 4).reduce((a, b) => a * b, 1);

    if (product > largest) {
      largest = product;
    }
  });

  return largest;
}

p(greatestProduct("23456") === 360); // 3 * 4 * 5 * 6
p(greatestProduct("3145926") === 540); // 5 * 9 * 2 * 6
p(greatestProduct("1828172") === 128); // 1 * 8 * 2 * 8
p(greatestProduct("123987654") === 3024); // 9 * 8 * 7 * 6
