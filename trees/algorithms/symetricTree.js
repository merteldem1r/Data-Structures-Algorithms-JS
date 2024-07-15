// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

function isMirror(left, right) {
  if (left === null && right === null) return true;
  if (left === null || right === null) return false;

  const child1 = isMirror(left.left, right.right);
  const child2 = isMirror(left.right, right.left);
  return left.val === right.val && child1 && child2;
}

function isSymmetric(root) {
  if (root === null) return true;

  return isMirror(root.left, root.right);
}
