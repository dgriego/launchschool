function fridayThe13ths(year) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reduce((acc, month) => {
    if ((new Date(`${year}-${month}-13 00:00`)).getDay() === 5) {
      return acc + 1;
    }

    return acc;
  }, 0);
}

console.log(fridayThe13ths(1986) === 1);
console.log(fridayThe13ths(2015) === 3);
console.log(fridayThe13ths(2017) === 2);