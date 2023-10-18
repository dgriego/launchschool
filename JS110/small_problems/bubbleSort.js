function bubbleSort(arr) {
  let currentIndex = 0;
  let swapCount = 0;

  while (true) {
    const isEndOfArr = (currentIndex + 1) === arr.length;

    if (isEndOfArr) {
      currentIndex = 0;
      swapCount = 0;
    }

    let left = arr[currentIndex];
    let right = arr[currentIndex + 1];

    if (left > right) {
      [arr[currentIndex], arr[currentIndex + 1]] = [right, left];
      swapCount++;
    }

    if (isEndOfArr && !swapCount) break;

    currentIndex++;
  }
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);