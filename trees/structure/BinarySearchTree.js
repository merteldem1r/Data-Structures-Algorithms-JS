class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;

    while (true) {
      if (value < temp.value) {
        if (!temp.left) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (!temp.right) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  lookup(value) {
    let temp = this.root;

    while (temp) {
      if (value > temp.value) {
        temp = temp.right;
      } else if (value < temp.value) {
        temp = temp.left;
      } else {
        return temp;
      }
    }

    return -1;
  }

  remove(value) {
    if (!this.root) {
      return -1;
    }

    let temp = this.root;
    let prevTemp = null;

    while (temp) {
      if (value > temp.value) {
        prevTemp = temp;
        temp = temp.right;
      } else if (value < temp.value) {
        prevTemp = temp;
        temp = temp.left;
      } else {
        if (!temp.left && !temp.right) {
          if (prevTemp === null) {
            this.root = null;
          } else if (prevTemp.left === temp) {
            prevTemp.left = null;
          } else {
            prevTemp.right = null;
          }
          return this;
        } else if (!temp.left) {
          if (prevTemp === null) {
            this.root = temp.right;
          } else if (prevTemp.left === temp) {
            prevTemp.left = temp.right;
          } else {
            prevTemp.right = temp.right;
          }
          return this;
        } else if (!temp.right) {
          if (prevTemp === null) {
            this.root = temp.left;
          } else if (prevTemp.left === temp) {
            prevTemp.left = temp.left;
          } else {
            prevTemp.right = temp.left;
          }
          return this;
        } else {
          let least = temp.right;
          let prevLeast = temp;

          while (least.left) {
            prevLeast = least;
            least = least.left;
          }

          if (prevLeast !== temp) {
            prevLeast.left = least.right;
            least.right = temp.right;
          }
          least.left = temp.left;

          if (prevTemp === null) {
            this.root = least;
          } else if (prevTemp.left === temp) {
            prevTemp.left = least;
          } else {
            prevTemp.right = least;
          }
          return this;
        }
      }
    }

    return -1;
  }
}

const MyTree = new BinarySearchTree();

MyTree.insert(9);
MyTree.insert(4);
MyTree.insert(6);
MyTree.insert(20);
MyTree.insert(170);
MyTree.insert(15);
MyTree.insert(1);
MyTree.insert(5);
MyTree.insert(3);
MyTree.insert(7);

MyTree.remove(9);
console.log("MyTree.lookup(): ", MyTree.lookup(15));

/*
                9
        4               20
    1       6       15      170
      3   5   7       
*/
