// Create a function that takes two strings as arguments and returns true if some 
// portion of the characters in the first string can be rearranged to match the 
// characters in the second. Otherwise, the function should return false.

// You may assume that both string arguments only contain lowercase alphabetic 
// characters. Neither string will be empty.
/*
* P-
*   - input: two strings
*   - output: boolean
*   so they just have to have the same letters essentially
* . also same letter counts
* . need a mechanism for making sure it's total is the asme
* . 
* 
* . letter counts, match the numbers from both
* . loop through the valid one requires that I make sure I don't recheck values
*   I could have a tracked array that includes only valid or matched indexes
*
* E-
*   - unscramble('ansucchlohlo', 'launchschool') === true
*   - unscramble('phyarunstole', 'pythonrules') === true
*   - unscramble('phyarunstola', 'pythonrules') === false
*   - unscramble('boldface', 'coal') === true
* . - 'aabbcc' 'abc'
* D-
*   - array
*
* A-
*   tracked indexes arr
    count = 0
* .  
* .  loop (idx)
        second string char
        inner loop
           first string char
          if 2nd === first
             track index
             count++
*/
const p = console.log;

function unscramble(str1, str2) {
  const trackedIdx = []
  let count = 0

  for (let i = 0; i < str2.length; i++) {
    const charA = str2[i]

    for (let x = 0; x < str1.length; x++) {
      const charB = str1[x]

      if (!trackedIdx.includes(x) && charA === charB) {
        trackedIdx.push(x)
        count++
      }
    }
  }

  return count === str2.length
}

p(unscramble('ansucchlohlo', 'launchschool') === true);
p(unscramble('phyarunstole', 'pythonrules') === true);
p(unscramble('phyarunstola', 'pythonrules') === false);
p(unscramble('boldface', 'coal') === true);