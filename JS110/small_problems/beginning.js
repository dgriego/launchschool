const beginnings = function (s) {
    let continueSeqCheck = true
    let newArr = []
    let seqLength = 1
    let beginning = null

    while (continueSeqCheck) {
        let changeSeqLength = false

        for (let i = 0; i < s.length; i += seqLength) {
            const currentNum = s[i]
            const hasNine = currentNum[currentNum.length - 1] === '9'
            const nextNumberPastNine = s.slice((i + 1), i + currentNum.length + 2)

            if (changeSeqLength) {
                seqLength += 1
            }

            if (seqLength === 1) {
                newArr.push(currentNum)
            } else {
                newArr.push(s.slice(i, i + seqLength))
            }

            if (hasNine && nextNumberPastNine.length > currentNum.length) {
                changeSeqLength = true
            }
        }

        if (seqLength === 10) {
            beginning = newArr[0]
            break
        }

        for (let i = 0; i < newArr.length; i++) {
            const firstNumber = Number(newArr[i])
            const secondNumber = Number(newArr[i + 1])

            if (firstNumber + 1 !== secondNumber) {
                break
            } else {
                continueSeqCheck = false
                beginning = newArr[0]
            }
        }

        if (!changeSeqLength) seqLength += 1
        newArr = []
    }

    return beginning
}

beginnings('1234567891011')
beginnings('1011121314151617181920')
beginnings('1000000010000001')