// Data type for computing a minimum spanning tree in an edge-weighted graph.
// This implementation uses Kruskal's algorithm and the union-find data type.

const UF = require('./UF');
const MinPQ = require('./MinPQ');

// compute a minimum spanning tree of an edge-weighted graph.
function KruskalMST(G) {
  var mst = []; // edges in MST
  var weight = 0; // weight of MST
  var pq = MinPQ();
  for (var edge of G.edges()) {
    pq.insert(edge);
  }

  // run greedy algorithm
  var uf = UF(G.getVertices());
  while (!pq.isEmpty() && mst.length < G.getVertices() - 1) {
    var e = pq.delMin();
    var v = e.either();
    var w = e.other(v);

    // v-w does not create a cycle
    if (!uf.connected(v, w)) {
      uf.union(v, w); // merge v and w components
      mst.push(e); // add edge to mst
      weight += e.getWeight();
    }
  }

  // returns array of edges in a minimum spanning tree
  function edges() {
    return mst.map(edge => {
      return edge.printEdge();
    });
  }

  // returns the sum of the edge weights in a minimum spanning tree
  function getWeight() {
    return weight;
  }

  return {
    edges,
    getWeight
  };
}

module.exports = KruskalMST;
