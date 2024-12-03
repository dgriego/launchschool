/*
 *
 */
const p = console.log;

function rotateArray(arr) {
  if (!arr || !Array.isArray(arr)) return undefined;
  if (!arr.length) return [];
  const cp = arr.slice();
  const rotated = [...cp.slice(1), cp[0]];
  p(rotated);
  return rotated;
}

rotateArray([7, 3, 5, 2, 9, 1]); // [3, 5, 2, 9, 1, 7]
rotateArray(["a", "b", "c"]); // ["b", "c", "a"]
rotateArray(["a"]); // ["a"]
rotateArray([1, "a", 3, "c"]); // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]); // [[1, 2], 3, { a: 2 }]
rotateArray([]); // []

// return `undefined` if the argument is not an array
p(rotateArray()); // undefined
p(rotateArray(1)); // undefined

// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array); // [2, 3, 4, 1]
p(array); // [1, 2, 3, 4]
