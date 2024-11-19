/*
Create a function that takes a string argument and 
returns a hash in which the keys represent the
 lowercase letters in the string, and the values represent 
 how often the corresponding letter occurs in the string.
*/

// const p = console.log;
// const objeq = function(obj1, obj2) {
//   let keys1 = Object.keys(obj1);
//   let keys2 = Object.keys(obj2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (let key of keys1) {
//     if (! keys2.includes(key)) {
//       return false;
//     } else if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// function countLetters(str) {
//   let letterCount = {}

//   for (let i = 0; i < str.length; i++) {
//     const key = str[i].toLowerCase()
//     if (!key.match(/[a-z]/)) continue
//     letterCount[key] = letterCount[key] ? letterCount[key] += 1 : 1
//   }

//   return letterCount
// }

// let expected = {'w': 1, 'o': 2, 'e': 3, 'b': 1, 'g': 1, 'n': 1};
// p(objeq(countLetters('woebegone'), expected));

// expected = {'l': 1, 'o': 1, 'w': 1, 'e': 4, 'r': 2,
//             'c': 2, 'a': 2, 's': 2, 'u': 1, 'p': 2};
// p(objeq(countLetters('lowercase/uppercase'), expected));

// expected = {'u': 1, 'o': 1, 'i': 1, 's': 1};
// p(objeq(countLetters('W. E. B. Du Bois'), expected));

// p(objeq(countLetters('x'), {'x': 1}));
// p(objeq(countLetters(''), {}));
// p(objeq(countLetters('!!!'), {}));

// specified number of times
// rotate 3 times
[1, 2, 3, 4, 5][(5, 1, 2, 3, 4)];

/*
I don't need to care about values, I really only want to move the end to the beginning

I slice up to the end and than glue the end to the beginning

or I could pop and then unshift the array 3 times


*/
function rotater(arr, times) {
  let copy = arr.slice();
  for (let i = 0; i < times; i++) {
    copy = [copy[arr.length - 1], ...copy.slice(0, -1)];
  }
  console.log(copy);
}

const arr = [1, 2, 3, 4, 5];
rotater(arr, 3);

