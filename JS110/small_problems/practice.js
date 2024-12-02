/*
 *
 * - min int value that can be added to an array, where the SUM of that
 *   array equals the closest prime number that is greater than the current sum
 *
 *   sum of the array, we find the closest prime from that sum,
 *   we can subtract from the sum to the prime to determine the value
 *
 *   prime is divisible only by 1 and itself
 *   not divisible by 2 or 3
 *
 *   1. sum of array
 *   2. from that sum, loop until we find the nearest prime
 *   3. once prime is located, subtract from sum to find min int
 *
 *
 *   start
 *     reduce array
 *
 *     loop starting at sum
 *        if val % 2 !== 0 and val % 3 !== 0
 *           break
 *
 *     min num = found prime - sum
 */

const p = console.log;

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function nearestPrimeSum(nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  let inc = 1;
  let prime = 1;

  while (true) {
    prime = sum + inc;

    if (isPrime(prime)) {
      break;
    }

    inc++;
  }

  return prime - sum;
}

p(nearestPrimeSum([1, 2, 3]) === 1); // Nearest prime to 6 is 7
p(nearestPrimeSum([5, 2]) === 4); // Nearest prime to 7 is 11
p(nearestPrimeSum([1, 1, 1]) === 2); // Nearest prime to 3 is 5
p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37
//
// // Nearest prime to 163 is 167
p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);
