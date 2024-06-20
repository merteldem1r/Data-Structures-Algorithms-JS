class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    if (index === 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);
    let temp = this.head;
    let k = 0;

    while (temp != null) {
      if (k === index - 1) {
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;

        break;
      }

      temp = temp.next;
      k++;
    }

    return null;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;

      return;
    }

    if (index >= this.length) {
      console.log("Invalid index");
      return;
    }

    let temp = this.head;
    let k = 0;

    while (temp != null) {
      if (k === index - 1) {
        if (temp.next.next === null) {
          this.tail = temp;
          this.tail.next = null;
          this.length--;

          break;
        }

        temp.next = temp.next.next;
        this.length--;

        break;
      }

      temp = temp.next;
      k++;
    }

    return null;
  }

  values() {
    let temp = this.head;
    const valuesArr = [];

    while (temp != null) {
      valuesArr.push(temp.value);
      temp = temp.next;
    }

    return valuesArr;
  }
}

const myLinkedList = new LinkedList(2); // 2
myLinkedList.append(5); // 2 -> 5
myLinkedList.prepend(1); // 1 -> 2 -> 5
myLinkedList.insert(2, 3); // 1 -> 2 -> 3 -> 5
myLinkedList.insert(3, 4); // 1 -> 2 -> 3 -> 4 -> 5
myLinkedList.remove(4); // 1 -> 2 -> 3 -> 4
console.log(myLinkedList);
console.log(myLinkedList.values()); // [1, 2, 3, 4];
