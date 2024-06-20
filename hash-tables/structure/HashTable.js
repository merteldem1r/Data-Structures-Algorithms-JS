class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key, value) {
    const address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    // hash collision
    this.data[address].push([key, value]);
  }

  get(key) {
    const address = this._hash(key);
    const addressLen = this.data[address]?.length || -1;

    // O(n)
    if (this.data[address]) {
      for (let i = 0; i < addressLen; i++) {
        if (this.data[address][i][0] === key) {
          return this.data[address][i][1];
        }
      }
    }

    return undefined;
  }

  keys() {
    const keysArr = [];

    // O(n^2)
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keysArr.push(this.data[i][j][0]);
        }
      }
    }

    return keysArr;
  }

  values() {
    const valuesArr = [];

    // O(n^2)
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          valuesArr.push(this.data[i][j][1]);
        }
      }
    }

    return valuesArr;
  }
}

const myHashTable = new HashTable(2);

myHashTable.set("one", 1);
myHashTable.set("two", 2);
myHashTable.set("three", 3);
myHashTable.set("four", 4);

console.log("data: ", myHashTable.data); // [ [ [ 'one', 1 ] ], [ [ 'two', 2 ], [ 'three', 3 ], [ 'four', 4 ] ] ]

console.log("one: ", myHashTable.get("one")); // 1
console.log("two: ", myHashTable.get("two")); // 2
console.log("three: ", myHashTable.get("three")); // 3

console.log("foo: ", myHashTable.get("foo")); // undefined

console.log("keys: ", myHashTable.keys()); // [ 'one', 'two', 'three', 'four' ]
console.log("values: ", myHashTable.values()); // [ 1, 2, 3, 4 ]
