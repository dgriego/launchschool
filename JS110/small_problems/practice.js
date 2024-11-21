const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

function repeatedSubstring(str) {
  let repeatCount = -Infinity;
  let currentSet = ["", 0];

  for (let i = 0; i < str.length; i++) {
    let count = 0;
    const substr = str.slice(0, i + 1);

    for (let x = 0; x < str.length; x++) {
      const innerSubstr = str.slice(x, x + substr.length);

      if (substr === innerSubstr) {
        count += 1;
      }

      if (count > repeatCount && substr.length * count === str.length) {
        repeatCount = count;
        currentSet = [substr, count];
      }
    }
  }

  return currentSet;
}

p(eq(repeatedSubstring("xyzxyzxyz"), ["xyz", 3]));
p(eq(repeatedSubstring("xyxy"), ["xy", 2]));
p(eq(repeatedSubstring("xyz"), ["xyz", 1]));
p(eq(repeatedSubstring("aaaaaaaa"), ["a", 8]));
p(eq(repeatedSubstring("superduper"), ["superduper", 1]));
