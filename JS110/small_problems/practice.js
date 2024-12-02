/*
 * returns -
 * 1. distinct case-insensitive chars that appear more than once
 * 2. unique digits that appear more than once
 *
 * if it's included more than once, than include
 *
 * 1. check for more than one
 * .. do a count, then count OR track the values
 *  if it exists already, increment the total count
 *
 *
 * tracker = []
 * loop
 *    char
 *    if char is in tracker
 *      counter++
 *
 */
const p = console.log;

function distinctMultiples(str) {
  str = str.toLowerCase();
  const tracker = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    tracker[char] = (tracker[char] || 0) + 1;
  }

  return Object.values(tracker).reduce((a, b) => {
    b = b > 1 ? 1 : 0;
    return a + b;
  }, 0);
}

p(distinctMultiples("xyz") === 0); // (none)
p(distinctMultiples("xxyypzzr") === 3); // x, y, z
p(distinctMultiples("xXyYpzZr") === 3); // x, y, z
p(distinctMultiples("unununium") === 2); // u, n
p(distinctMultiples("multiplicity") === 3); // l, t, i
p(distinctMultiples("7657") === 1); // 7
p(distinctMultiples("3141592653589793") === 4); // 3, 1, 5, 9
p(distinctMultiples("2718281828459045") === 5); // 2, 1, 8, 4, 5
