// Data type for determining the strong components in a digraph.
// This implementation uses the Kosaraju-Sharir algorithm.

const DepthFirstOrder = require('./DepthFirstOrder');

// computes the strong components of the digraph
function KosarajuSharirSCC(G) {
  var marked = Array(G.getVertices()).fill(false); // marked[v] = has vertex v been visited?
  var id = Array(G.getVertices()).fill(0); // id[v] = id of stong component containing v
  var count = 0; // number of strongly-connected components

  var dfo = DepthFirstOrder(G.reverse());
  for (var v of dfo.printReversePost()) {
    if (!marked[v]) {
      dfs(G, v);
      count++;
    }
  }

  // DFS on graph G
  function dfs(G, v) {
    marked[v] = true;
    id[v] = count;
    for (var w of G.getAdjValues(v)) {
      if (!marked[w]) dfs(G, w);
    }
  }

  // returns the number of strong components
  function countNumber() {
    return count;
  }

  // are verteices v and w in the same strong component?
  function stronglyConnected(v, w) {
    return id[v] === id[w];
  }

  // returns the component id of the strong component containing vertex v
  function idComponent(v) {
    return id[v];
  }

  return {
    countNumber,
    idComponent,
    stronglyConnected
  };
}

module.exports = KosarajuSharirSCC;
