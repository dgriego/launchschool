function rotateRightmostDigits(number, count) {
  const numStr = String(number)
  const strStart = numStr.slice(0, -count)
  const strEnd = numStr.slice(-count)
  const rotated = strEnd.slice(1).concat(strEnd[0])

  return Number(strStart + rotated);
}
  
  
  // max rotation
  // I will be rotating subsections of a string until the end has been
  // met
  // first by rotating whole value
  // 123
  // 231
  // then I fix index 0
  // then it's 213
  // then finished
  // I begin by rotation idx 0 to end
  // then idx 1 to end
  // then length is reached
  // I could see this as a ===============
  
  // I could start by converting the num to string, loop through the string
  // and derive my substrings based on the starting index
  // I grab the result of the rotation and glue it back to the string
  // and start again
  // I could start at the length of the strength then decrement
  //
  // 735291 is length 6
  // I pass the string into prev func and it should rotate the 
  
function maxRotation(num) {
  const numStr = String(num)
  let preVal = num
  
  for (let i = numStr.length; i > 0; i--) {
    preVal = rotateRightmostDigits(preVal, i)
  }
  
  return preVal
}
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
  // rotateRightmostDigits(735291, 6);      // 352917