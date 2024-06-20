// function containCommonItems2(arr1, arr2) {
//   for (let chr of arr1) {
//     for (let chr2 of arr2) {
//       if (chr === chr2) return true;
//     }
//   }

//   return false;
// }

// O(a*b) ==> O(n^2)

// *********************************************************

function containCommonItems(arr1, arr2) {
  const map = {};

  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      map[arr1[i]] = true;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }

  return false;
}

// O(a+b) => O(n) cause for loops is not nested

console.log(
  containCommonItems(["a", "b", "c", "x", "a", "x"], ["z", "y", "i"]) // false
);
console.log(containCommonItems(["a", "b", "c", "x"], ["z", "y", "c"])); // true
