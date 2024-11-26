/*
Create a function that takes a single integer argument and returns the sum of all 
the multiples of 7 or 11 that are less than the argument. If a number is a 
multiple of both 7 and 11, count it just once.

For example, the multiples of 7 and 11 that are below 25 are 7, 11, 14, 21, 
and 22. The sum of these multiples is 75.

If the argument is negative, return 0.

P -

return the sum of all the numbers below the given number that are multiples of 7 OR 11
  - if it's a multiple of both, count it once (this means I could store the values and only have unique values)
  - good use case for a set, since it's unique

this could mean that I am able to loop up to (and including the number) and store
values in a set

1. determine a multiple
2. loop up to number

1. divide by a given number and compare the remainders (should be 0)
    - loop can start at 7, since nothing below that will apply

we can loop by 1 and check both numbers at once, or two separate loops and increment by 11 (and store in a set)


set
loop begin (start at 7, ++7)
  7, 14, 21, 28
  if multiple.
  set.add

loop begin (start at 11, ++11)
*/
const p = console.log;

function sevenEleven(num) {
  const multiples = []

  if (num < 7) return 0

  for (let i = 7; i < num; i += 7) {
    if (i % 7 === 0) {
      multiples.push(i)
    }
  }

  for (let i = 11; i < num; i += 11) {
    if (!multiples.includes(i) && i % 11 === 0) {
      multiples.push(i)
    }
  }

  return multiples.reduce((a, b) => a + b, 0)
}

p(sevenEleven(10) === 7);
p(sevenEleven(11) === 7);
p(sevenEleven(12) === 18);
p(sevenEleven(25) === 75);
p(sevenEleven(100) === 1153);
p(sevenEleven(0) === 0);
p(sevenEleven(-100) === 0);
