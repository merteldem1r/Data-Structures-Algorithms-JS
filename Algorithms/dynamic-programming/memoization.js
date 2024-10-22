// Memoization is an optimization technique primarily used to enhance the performance of algorithms by storing the results of expensive function calls and reusing them when the same inputs occur again.

function addTo80(n) {
  return n + 50;
}

// console.log(addTo80(5));
// console.log(addTo80(5));
// console.log(addTo80(5));

let cache = {};

function addTo5(n) {
  if (!(n in cache)) {
    cache[n] = n + 5;
  }

  return cache[n];
}

console.log(addTo5(50));
console.log(addTo5(50));
console.log(addTo5(50));

// Fibonacci without & with Memoization
// 0 1 1 2 3 5 8

// Fibonacci Recursion
function fibonacciRec(step) {
  if (step <= 2) {
    return step - 1;
  }

  return fibonacciRec(step - 1) + fibonacciRec(step - 2);
}

console.log("Fibonacci Recursion: ", fibonacciRec(1));

// Fibonacci Loop Memoization
function fibonacciLoopMemo(step) {
  const fibMap = [0, 1];

  for (let i = 2; i <= step; i++) {
    fibMap[i] = fibMap[i - 1] + fibMap[i - 2];
  }

  return fibMap[step - 1];
}

console.log("Fibonacci Loop Memoization: ", fibonacciLoopMemo(7));

// Fibonacci Recursion Memoization

const fibMap = {};

function fibonacciRecMemo(step) {
  if (step in fibMap) {
    return fibMap[step];
  }

  if (step <= 2) return step - 1;

  return (fibMap[step] =
    fibonacciRecMemo(step - 1) + fibonacciRecMemo(step - 2));
}

console.log(fibonacciRecMemo(3));
