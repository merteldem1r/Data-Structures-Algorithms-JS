const arr = [12, 5, 1, 15, 3, 8, 4, 2, 1, 7, 10, 6];

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    let minIdx = i;

    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }

    if (minIdx != i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }

  return arr;
}

selectionSort(arr);
console.log(arr);
