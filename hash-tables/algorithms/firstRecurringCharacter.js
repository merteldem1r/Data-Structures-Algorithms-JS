// Google Question

// [2,5,1,2,3,5,1,2,4] should return 2
// [2,5,1,3] should undefined

function firstRecurringChar(nums) {
  const map = {};

  for (let num of nums) {
    if (!map[num]) {
      map[num] = true;
    } else {
      return num;
    }
  }

  return undefined;
}

console.log(firstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringChar([2, 5, 1, 3]));
