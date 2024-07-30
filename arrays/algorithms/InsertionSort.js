const arr = [6, 5, 3, 1, 8, 7, 2, 4];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; ++i) {
    let insertIdx = i;

    for (let j = 0; j < i; ++j) {
      if (arr[i] <= arr[j]) {
        insertIdx = j;
        break;
      }
    }

    if (insertIdx != i) {
      let carryTemp = arr[i];

      for (let k = insertIdx; k < i + 1; ++k) {
        const temp = arr[k];
        arr[k] = carryTemp;
        carryTemp = temp;
      }
    }
  }

  return arr;
}

insertionSort(arr);
console.log(arr);
