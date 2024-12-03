/*
 *
 * slice from length - argument
 * rotate that value
 *
 * slice up to the argum
 *
 * glue those together
 *
 * slice(0, argument) slice(-argument)
 */
const p = console.log;

function rotateArray(arr) {
  if (!arr || !Array.isArray(arr)) return undefined;
  if (!arr.length) return [];
  const cp = arr.slice();
  const rotated = [...cp.slice(1), cp[0]];
  return rotated;
}

function rotateRightmostDigits(num, count) {
  const nums = String(num).split("");
  const left = nums.slice(0, -count);
  const right = rotateArray(nums.slice(-count));
  const joined = Number([...left, ...right].join(""));
  return joined;
}

rotateRightmostDigits(735291, 1); // 735291
rotateRightmostDigits(735291, 2); // 735219
rotateRightmostDigits(735291, 3); // 735912
rotateRightmostDigits(735291, 4); // 732915
rotateRightmostDigits(735291, 5); // 752913
rotateRightmostDigits(735291, 6); // 352917
