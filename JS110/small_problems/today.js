/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the
original string by deleting some (can be none) of the characters
without disturbing the relative positions of the remaining characters. 
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false

Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.

if I loop through first word

a

then through the second
 I can track by index? if the the next index is greater than we good?
*/

function isSubsequence(s, t) {
  const sub = []

  for (let i = 0; i < s.length; i++) {
    const currLetter = s[i]
    
    for (let x = 0; x < t.length; x++) {
      if (t[x] === currLetter && sub.length < s.length && !sub.includes(x)) {
        let idxToStore = x

        for (let m = 0; m < sub.length; m++) {
          const lastIndex = t.lastIndexOf(t[x])
          if (x < sub[m] && lastIndex < sub[m]) {
            return false
          } else if (x < sub[m] && lastIndex > sub[m]) {
            idxToStore = lastIndex
          }
        }

        sub.push(idxToStore)
        break
      }
    }
  }

  return sub.length === s.length
}


