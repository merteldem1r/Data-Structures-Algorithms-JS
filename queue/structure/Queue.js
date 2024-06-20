class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
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

const MyQueue = new Queue();
MyQueue.enqueue("Google");
MyQueue.enqueue("Discord");
MyQueue.enqueue("YouTube");
MyQueue.dequeue();
MyQueue.dequeue();
console.log("peek(): ", MyQueue.peek());
console.log("isEmpty(): ", MyQueue.isEmpty());
console.log(MyQueue);
