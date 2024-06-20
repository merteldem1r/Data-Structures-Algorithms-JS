import { Stack } from "../../stack/structure/Stack.js";

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function NewNode(val) {
  return new TreeNode(val);
}

const Root = new TreeNode(1);
Root.left = NewNode(2);
Root.right = NewNode(3);
Root.left.left = NewNode(4);
Root.left.right = NewNode(5);

/*

ROOT TREE: 

        1
    2      3   
  4   5 

*/

// Depth First Traversal (DFS)

// * Preorder Traversal

const stack = new Stack(); // can also use simple array => []

function preOrder(root, stack) {
  if (root) {
    console.log(root.val);
    stack.push(root.val);
    preOrder(root.left, stack);
    preOrder(root.right, stack);
  }
}

// preOrder(Root, stack); // 1 2 4 5 3

// * Inorder Traversal *

function inOrder(root, stack) {
  if (root) {
    inOrder(root.left, stack);
    console.log(root.val);
    stack.push(root.val);
    inOrder(root.right, stack);
  }
}

// inOrder(Root, stack); // 4 2 5 1 3

// * Postorder Traversal *

function postOrder(root, stack) {
  if (root) {
    postOrder(root.left, stack);
    postOrder(root.right, stack);
    console.log(root.val);
    stack.push(root.val);
  }
}

postOrder(Root, stack); // 4 5 2 3 1
