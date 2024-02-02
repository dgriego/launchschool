/*
I generated strings then performed comparisons to the original

so I start with the first number than generated a string that was +1

length = 1

then built up the string and compared it when it reaced the right length

s[0]

while(noMatchFound)
    length = 1
    strMatch = ''
    baseNum = Number(s.slice(0, length))

    while strMatch length != s.length continue building str
        if (!strMatch) strMatch = s.slice(0, length)
        baseNum += 1
        strMatch.concat(baseNum)
*/

const beginning = (s) => {
    let beginning = null
    let length = 1

    while (true) {
        if (length === s.length) {
            beginning = s
            break
        }
        strMatch = ''
        startingNum = Number(s.slice(0, length))
        icrementer = startingNum

        while (strMatch.length < s.length) {
            if (!strMatch) {
                strMatch = s.slice(0, length)
            }
            icrementer += 1
            strMatch = strMatch.concat(icrementer)
        }

        if (strMatch === s) {
            beginning = startingNum
            break
        }

        length += 1
    }

    return Number(beginning)
}

beginning('991001')
beginning("123456789101112131415")
beginning("17181920")
beginning("72637236")
beginning("1112")
beginning("91011")
beginning("99100")