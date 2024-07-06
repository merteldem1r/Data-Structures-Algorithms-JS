class MyQueue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  push(x) {
    this.s1.push(x);
  }

  pop() {
    let temp;

    while (this.s1.length != 0) {
      temp = this.s1[this.s1.length - 1];
      this.s2.push(temp);
      this.s1.pop();
    }

    this.s2.pop();

    let lastTemp = temp;
    while (this.s2.length != 0) {
      temp = this.s2[this.s2.length - 1];
      this.s2.pop();
      this.s1.push(temp);
    }

    return lastTemp;
  }

  peek() {
    let temp;

    while (this.s1.length != 0) {
      temp = this.s1.top();
      this.s2.push(temp);
      this.s1.pop();
    }

    let peekTemp = temp;

    while (this.s2.length != 0) {
      temp = this.s2.top();
      this.s1.push(temp);
      this.s2.pop();
    }

    return peekTemp;
  }

  empty() {
    return this.s1.length == 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
