/*
 *
 * rotate by 1, rotate Array
 *
 * rotate 1
 * rotate 2
 * rotate 3 on.. (slice from 3)
 *
 * from 0, I rotate by 1
 * from 1, I rotate by 1
 *
 * rotation
 * left = (i(0), i + 1), (0, 1 + 1 (2))
 * left + rotated
 *
 * rotated => slice(i + 1), 1, 2, 3, 4
 * [0, 1, 2, 3, 4]
 *
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

function maxRotation(num) {
  const numStr = String(num).split("");
  // let rotation = Number(rotateArray(numStr).join(""));
  let rotated = [];
  let current = num;
  //
  // if (numStr.length < 3) return rotation;

  for (let i = 0; i < numStr.length - 1; i++) {
    rotated = rotateRightmostDigits(current, numStr.length - i);
    current = rotated;
  }

  return current;
}

maxRotation(735291); // 321579
maxRotation(3); // 3
maxRotation(35); // 53
maxRotation(105); // 15 -- the leading zero gets dropped
p(maxRotation(8703529146) === 7321609845);
