let str = '212345'.split('');
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr = [];
let prev = 1;
let converted = 0;

for (let idx = str.length; idx > 0; idx--) {
  arr.push(prev);

  prev *= 10;
}

arr.reverse();

str.forEach((val, idx) => {
  converted += numbers[val] * arr[idx];
});

console.log(converted);
