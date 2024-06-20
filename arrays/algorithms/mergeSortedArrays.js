// way 1 => O(n * m)
function mergeSortedArrays(arr1, arr2) {
  const mergedArr = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] <= arr2[j]) break;

      mergedArr.push(arr2[j]);
    }

    mergedArr.push(arr1[i]);
  }

  return mergedArr;
}

// way 2 => O(n + m)
function mergeSortedArrays2(arr1, arr2) {
  const mergedArr = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }

  return mergedArr;
}

console.log(mergeSortedArrays([0, 3, 4, 33], [4, 6, 30]));
console.log(mergeSortedArrays2([0, 3, 4, 33], [4, 6, 30]));
