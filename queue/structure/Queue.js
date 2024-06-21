class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  get front() {
    return this.first;
  }

  get back() {
    return this.last;
  }

  get len() {
    return this.length;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);

    this.length++;

    if (this.first == null) {
      this.first = newNode;
      this.last = newNode;

      return newNode;
    }

    this.last.next = newNode;
    this.last = newNode;

    return newNode;
  }

  dequeue() {
    if (this.first == null) {
      return null;
    }

    if (this.first == this.last) {
      this.last = null;
    }

    const tempFirst = this.first;
    this.first = this.first.next;

    this.length--;

    return tempFirst;
  }

  isEmpty() {
    return this.length == 0;
  }
}
