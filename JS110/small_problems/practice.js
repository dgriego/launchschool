/*
 *  index N - represents, all numbers with an index less than N
 *  SUM to the same value as the numbers with an index greater than N
 *
 *  grab middle point and sum to left and right of index
 *  where the values are the same, return that middel point
 *
 *  first point should be 1
 *  0, 1, 2, 3
 *  0 [1] 2 + 3
 *
 *  1, end just before the tail, length - 2, just have to do slice
 *
 *  only have to control you iterator
 *
 *  start
 *
 *  loop, end at array length, start at 0
 *  if index is 0, sum is 0
 *
 *  if index is length - 1, sum is 0
 */

const p = console.log;

function equalSumIndex(nums) {
  for (let i = 0; i < nums.length; i++) {
    let sumLeft = 0;
    let sumRight = 0;

    sumLeft = nums.slice(0, i).reduce((a, b) => a + b, 0);
    sumRight = nums.slice(i + 1).reduce((a, b) => a + b, 0);

    if (sumLeft === sumRight) return i;
  }

  return -1;
}
p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
p(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);

// The following test case could return 0 or 3. Since we're
// supposed to return the smallest correct index, the correct
// return value is 0.
p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);
