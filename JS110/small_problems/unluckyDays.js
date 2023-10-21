function fridayThe13ths(year) {
  return (Array(12).fill(1)).reduce((acc, _, month) => {
    if ((new Date(year, month, 13)).getDay() === 5) {
      return acc + 1;
    }

    return acc;
  }, 0);
}

console.log(fridayThe13ths(1986) === 1);
console.log(fridayThe13ths(2015) === 3);
console.log(fridayThe13ths(2017) === 2);