function sumOfSums(arr) {
    // for each num
    // collect every sum for each element in the array
    // then add all of those up

    return arr.slice().map((_, idx) => {
        return arr.slice(0, idx + 1)
    })
}
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35