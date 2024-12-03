/*
 *
 */
const p = console.log;
function whatIsDifferent(nums) {
  nums = nums.sort((a, b) => a - b);

  if (nums[0] !== nums[1]) return nums[0];

  return nums[nums.length - 1];
}
p(whatIsDifferent([0, 1, 0]) === 1);
p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
p(whatIsDifferent([3, 4, 4, 4]) === 3);
p(whatIsDifferent([4, 4, 4, 3]) === 3);
