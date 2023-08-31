// 12
// Given the following data structure, use a combination of methods,
// including filter, to return a new array identical in structure
// to the original, but containing only the numbers that are multiples of 3.
let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
arr.map(arr => {
  return arr.filter(el => el % 3 === 0);
});


let arr13 = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
arr13.sort((a, b) => {
  const oddSumA = a.reduce((a, accum) => a + (accum % 2 !== 0 ? accum : 0));
  const oddSumB = b.reduce((a, accum) => a + (accum % 2 !== 0 ? accum : 0));

  return oddSumA - oddSumB;
}, 0);

// 14
let obj14 = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

Object.values(obj14).map(obj => {
  if (obj.type === 'fruit') {
    return obj.colors.map(color => color[0].toUpperCase() + color.slice(1));
  } else {
    return obj.size.toUpperCase();
  }
});

// 15
let arr15 = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];
arr15.filter(obj => {
  const arr = [].concat(...Object.values(obj));
  return arr.every(num => num % 2 === 0);
});

// 16
const obj16 = {};
let arr16 = [['a', 1], ['b', 'two'], ['sea', {c: 3}], ['D', ['a', 'b', 'c']]];
arr16.forEach(arr => {
  const [key, value] = arr;
  obj16[key] = value;
});
console.log(obj16);

// 17
// UUID
// pattern can determine how many numbers we need and how many times to loop
function generateUUID() {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyz';
  const pattern = [8, 4, 4, 4, 12];

  return pattern.map(charCount => {
    let segment = '';

    for (let idx = 0; idx < charCount; idx++) {
      const randNum = Math.floor(Math.random() * chars.length);
      segment += chars[randNum];
    }

    return segment;
  }).join('-');
}
console.log(generateUUID());
