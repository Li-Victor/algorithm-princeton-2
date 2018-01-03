// Data Type for computing a minimum spanning tree in an edge-weighted graph.
// This implementation uses a lazy version of Prim's algorithm with a binary heap of edges.

const MinPQ = require('./MinPQ');

function LazyPrimMST(G) {
  var weight = 0; // total weight of MST
  var mst = []; // edges in the MST
  var marked = Array(G.getVertices()).fill(false); // marked[v] = true if v on tree
  var pq = MinPQ();

  // run Prim from all vertices to
  for (var v = 0; v < G.getVertices(); v++) {
    if (!marked[v]) prim(G, v); // get a minimum spanning tree
  }

  // run Prim's algorithm
  function prim(G, s) {
    scan(G, s);
    // stops when mst has length of V - 1 edges
    while (!pq.isEmpty() && mst.length < G.getVertices() - 1) {
      var edge = pq.delMin(); // smallest edge on pq
      var v = edge.either(); // two endpoints
      var w = edge.other(v);
      if (marked[v] && marked[w]) continue; // last, both v and w already scanned
      mst.push(edge);
      weight += edge.getWeight();
      if (!marked[v]) scan(G, v); // v becomes part of tree
      if (!marked[w]) scan(G, w); // w becomes part of tree
    }
  }

  // add all edges e incident to v onto pq if the other endpoint has not yet been scanned
  function scan(G, v) {
    marked[v] = true;
    for (var edge of G.getAdj(v)) if (!marked[edge.other(v)]) pq.insert(edge);
  }

  // returns the sum of the edge weights in a minimum spanning tree
  function getWeight() {
    return weight;
  }

  // returns array of edges in a minimum spanning tree
  function edges() {
    return mst.map(edge => {
      return edge.printEdge();
    });
  }

  return {
    getWeight,
    edges
  };
}

module.exports = LazyPrimMST;
