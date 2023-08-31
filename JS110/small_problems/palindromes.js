function leadingSubstrings(str) {
    const strArr = str.split('')
    
    return strArr.map((_, idx, arr) => arr.slice(0, idx + 1).join(''))
  }
  
  function substrings(str) {
    const strArr = str.split('')
    const substrings = []
    
    strArr.forEach((char, idx) => {
      substrings.push(
        leadingSubstrings(strArr.slice(idx).join(''))
      )
    })
    
    return substrings.flat()
  }
  
  function palindromes(str) {
    const allSubstrings = substrings(str)
    
    return allSubstrings.filter(word => {
      if (word.length === 1) return false
      
      return word === word.split('').reverse().join('')
    })
  }
  
  palindromes('hello-madam-did-madam-goodbye');
  palindromes('madam');  
  palindromes('knitting cassettes');