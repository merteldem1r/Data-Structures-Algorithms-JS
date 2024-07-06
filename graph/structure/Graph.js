class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    if (node in this.adjacentList) return -1;
    else this.adjacentList[node] = new Set([]);

    return this.adjacentList[node];
  }

  addEdge(node1, node2) {
    if (!(node1 in this.adjacentList) || !(node2 in this.adjacentList)) {
      return -1;
    }

    this.adjacentList[node1].add(node2);
    this.adjacentList[node2].add(node1);

    return this.adjacentList;
  }

  showConnecyions() {
    const allNodes = Object.keys(this.adjacentList);

    for (let node of allNodes) {
      let nodeConnetions = this.adjacentList[node];
      let connections = "";

      for (let vertex of nodeConnetions) {
        connections += vertex + " ";
      }
      console.log(node + " --> " + connections);
    }
  }
}

const MyGraph = new Graph();
MyGraph.addVertex("0");
MyGraph.addVertex("1");
MyGraph.addVertex("2");
MyGraph.addVertex("3");
MyGraph.addVertex("4");
MyGraph.addVertex("5");
MyGraph.addVertex("6");

MyGraph.addEdge("3", "1");
MyGraph.addEdge("3", "4");
MyGraph.addEdge("4", "2");
MyGraph.addEdge("4", "5");
MyGraph.addEdge("1", "2");
MyGraph.addEdge("1", "0");
MyGraph.addEdge("0", "2");
MyGraph.addEdge("6", "5");

/*
      3 --- 4 --- 5
      |     |     |
      1 --- 2     6
       \   /
         0

*/

MyGraph.showConnecyions();
