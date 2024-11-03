const arr = [1, 0, 3, 1, 3, 1];

function countingSort(arr) {
  let range = 0;

  for (const num of arr) {
    if (num > range) {
      range = num;
    }
  }

  const countArr = new Array(range + 1).fill(0);

  for (const num of arr) {
    ++countArr[num];
  }

  //  0  1  2  3
  // [1, 3, 0, 2]

  for (let i = 0; i < countArr.length - 1; ++i) {
    countArr[i + 1] += countArr[i];
  }

  //  0  1  2  3
  // [1, 4, 4, 6]

  // shift the countArr to get indxArr

  const idxArr = new Array(range + 1);
  idxArr[0] = 0;

  for (let i = 1; i < countArr.length; ++i) {
    idxArr[i] = countArr[i - 1];
  }

  //  0  1  2  3
  // [0, 1, 4, 4]

  const resArr = new Array(arr.length);

  // [1, 0, 3, 1, 3, 1];

  for (const num of arr) {
    const startIdx = idxArr[num];
    resArr[startIdx] = num;
    ++idxArr[num];
  }

  return resArr;
}

console.log(countingSort(arr)); // [0, 1, 1, 1, 3, 3]
