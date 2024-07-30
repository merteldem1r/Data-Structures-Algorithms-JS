const arr = [5, 3, 8, 4, 2, 1, 7, 10, 6];

function bubbleSort(arr) {
  let swapped = false;

  for (let i = 0; i < arr.length - 1; ++i) {
    swapped = false;

    for (let j = 0; j < arr.length - i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
}

bubbleSort(arr);
console.log(arr);
