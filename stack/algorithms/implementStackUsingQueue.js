class MyStack {
  constructor() {
    this.q = [];
  }

  push(x) {
    this.q.push(x);
    let qSize = this.q.length;

    for (let i = 0; i < qSize - 1; ++i) {
      this.q.push(this.q.shift());
    }
  }

  pop() {
    return this.q.shift();
  }

  top() {
    return this.q[0];
  }

  empty() {
    return this.q.length === 0;
  }
}

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
