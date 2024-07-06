/*
    Example Graph (Undirected, unweighted, cycled graph)

          2 --- 0
        /   \       
       1 --- 3 

*/

// * Representing Graphs *

// * EDGE LIST (arrays is the simply connections between nodes)

const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// * ADJACENT LIST (where index = is the node, values = is the node neighbors)

// the index of the array is the value of the actual Grapth node
// we can use arrays, objects or linked lists

const graph2 = [[2], [2, 3], [1, 3, 0], [1, 2]]; // 0: [2], 1: [2,3] 2: [1,3,0], 3: [1,2]

// * ADJACENT MATRIX

// the index of the array is the value of the actual Grapth node
// 1 = connected, 0 = unconnected

const graph3 = [
  [0, 0, 1, 0], // node 0 is conneted to 2
  [0, 0, 1, 1], // node 1 is connected to 2 and 3
  [1, 1, 0, 1], // node 2 is connected to 0, 1 and 3
  [0, 1, 1, 0], // node 3 is conneted to 1 and 2
];
