// Write a function that:
// - Takes a string of numeric digits as input
// - Finds all sequences of 4 consecutive digits
// - Computes the product of each sequence
// - Returns the greatest product found
//
// Input: String of digits (length > 4)
// Output: Number (greatest product)
//
// Rules:
// - Input consists entirely of numeric digits
// - Input will always have more than 4 digits
// - Need to find product of 4 consecutive digits
// - Return the largest such product
/*
this seems like a sequencer type iterator.  I jump in groups
of 4, when that tail equals the length it's all over.

23456

2, 2 + 1 === 3, 3 + 1 === 4, 4 + 1 === 5 (valid sequence) -> multiply

idx(0), idx(0) + 1 === idx(0 + 1)(next)
*/

const p = console.log;

function greatestProduct(str) {
  let largestProduct = -Infinity

  for (let i = 0; i < str.length; i++) {
    if (i + 4 > str.length) break

    let [first, second, third, fourth] = str.slice(i, i + 4)
    first = Number(first)
    second = Number(second)
    third = Number(third)
    fourth = Number(fourth)

    product = first * second * third * fourth
    if (product > largestProduct) {
      largestProduct = product
    }
  }

  return largestProduct
}

p(greatestProduct('23456') === 360);      // 3 * 4 * 5 * 6
p(greatestProduct('3145926') === 540);    // 5 * 9 * 2 * 6
p(greatestProduct('1828172') === 128);    // 1 * 8 * 2 * 8
p(greatestProduct('123987654') === 3024); // 9 * 8 * 7 * 6