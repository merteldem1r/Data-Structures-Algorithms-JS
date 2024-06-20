/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const closeBrack = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const bStack = [];

  for (const chr of s) {
    if (closeBrack.hasOwnProperty(chr)) {
      if (bStack.length > 0 && bStack[bStack.length - 1] === closeBrack[chr]) {
        bStack.pop();
      } else {
        return false;
      }
    } else {
      bStack.push(chr);
    }
  }

  return bStack.length === 0;
}
