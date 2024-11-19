const arr = [38, 27, 43, 3, 9, 82, 10];

// Example of l, mid, h, i, j:
//  l        mid             h
// [1, 2, 6, 12, 17, 25, 43, 52]
//  i              j

function merge(arr, l, mid, h) {
  const tempArr = new Array(h + 1);

  let i = l;
  let j = mid + 1;
  let k = l;

  while (i <= mid && j <= h) {
    if (arr[i] < arr[j]) tempArr[k++] = arr[i++];
    else tempArr[k++] = arr[j++];
  }

  for (; i <= mid; ++i) tempArr[k++] = arr[i];

  for (; j <= h; ++j) tempArr[k++] = arr[j];

  for (i = l; i <= h; ++i) {
    arr[i] = tempArr[i];
  }
}

function MergeSort(arr, l, h) {
  if (l >= h) return;

  const mid = l + Math.floor((h - l) / 2);

  MergeSort(arr, l, mid);
  MergeSort(arr, mid + 1, h);
  merge(arr, l, mid, h);
}

console.log("Before: ", arr);
console.log(MergeSort(arr, 0, arr.length - 1));
console.log("After: ", arr);
