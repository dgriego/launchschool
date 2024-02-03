/*
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

stress

s, but there are s's later in the string
t, but no other t's
s, essentially I'm finding the first unique value

loop through each value, perform a match?
check the length, if length is one, return that character?
*/

const first_non_repeating_letter = (str) => {
    let letter = null

    str.split('').forEach((char) => {
        const regex = new RegExp(char, 'gi')

        if (str.match(regex).length === 1) {
            letter = char
            return
        }
    })

    return letter
}

first_non_repeating_letter('stress')