// Naive approach
function hasPairWithSum(arr, sum) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }

  return false;
}

// Better approach
function hasPairWithSum2(arr, sum) {
  const set = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      return true;
    }
    set.add(sum - arr[i]);
  }

  return false;
}

console.log(hasPairWithSum2([1, 2, 6, 4, 4], 8));
