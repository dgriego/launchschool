// INIT Date object for the year
// loop through each month
// get the 13th day of each month
// check if that day is a friday
// return the number of friday the 13ths


function fridayThe13ths(year) {
  const FRIDAY = 5;
  let fridayThe13thsCount = 0;

  for (let idx = 1; idx <= 12; idx++) {
    const date = new Date(`${year}-${idx}-13 00:00`);

    if (date.getDay() === FRIDAY) fridayThe13thsCount += 1;
  }

  return fridayThe13thsCount;
}

console.log(fridayThe13ths(1986) === 1);
console.log(fridayThe13ths(2015) === 3);
console.log(fridayThe13ths(2017) === 2);