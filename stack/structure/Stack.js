class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.top == null) {
      this.bottom = newNode;
    }

    newNode.next = this.top;
    this.top = newNode;
    this.length++;

    return this.top;
  }

  pop() {
    if (this.top == null) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    const tempTop = this.top;
    this.top = this.top.next;
    this.length--;

    return tempTop;
  }

  isEmpty() {
    return this.length == 0;
  }
}
