/*
 * dict to count
 * then later check values
 *
 * or, loop through each value, another loop inner that counts the rest
 * finds first odd then ends
 * don't thin i need tracker because it should end on odd value anyways.
 *
 * loop
 *   inner loop
 *     count if it mathes outer value
 *
 * return if odd (in scope of outer loop)
 */

const p = console.log;

function oddFellow(nums) {
  const seen = [];

  for (let i = 0; i < nums.length; i++) {
    const numA = nums[i];
    let count = 1;

    if (seen.includes(numA)) continue;

    nums.slice(i + 1).forEach((numB) => {
      if (numA === numB) count++;
    });

    if (count % 2 !== 0) return numA;
    seen.push(numA);
  }

  return 0;
}

p(oddFellow([4]) === 4);
p(oddFellow([7, 99, 7, 51, 99]) === 51);
p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
p(oddFellow([0, 0, 0]) === 0);
