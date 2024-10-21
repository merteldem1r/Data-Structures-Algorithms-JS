import { Queue } from "../../queue/structure/Queue.js";

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

// Breadth First Search (BFS);

function printLevelOrder(root) {
  const queue = new Queue();

  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const temp = queue.dequeue(); // Node from queue
    const treeTemp = temp.val; // TreeNode from queue Node;

    console.log(treeTemp.val, " ");

    if (treeTemp.left) {
      queue.enqueue(treeTemp.left);
    }

    if (treeTemp.right) {
      queue.enqueue(treeTemp.right);
    }
  }
}

printLevelOrder(Root);
