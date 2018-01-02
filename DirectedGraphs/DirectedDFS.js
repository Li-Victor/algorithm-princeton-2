// Represents a data type for determing the vertices
// reachable from a given source vertex s in a digraph

// computes the vertices in digraph G that are
// reachable from the source vertex s.
function DirectedDFS(G, s) {
  var count = 0; // number of vertices reachable from s
  var marked = Array(G.getVertices()).fill(false);
  dfs(G, s);

  function dfs(G, v) {
    count++;
    marked[v] = true;
    for (var w of G.getAdjValues(v)) {
      if (!marked[w]) dfs(G, w);
    }
  }

  // is there a directed path from the source vertex
  // (or any of the source vertices) and vertex v?
  function marked(v) {
    return marked[v];
  }

  // returns the number of verteices reachable from the source vertex
  // (or source vertices)
  function countVertices() {
    return count;
  }

  // prints out all the reachable vertices in an array
  function printReachableVertices() {
    var arr = [];
    marked.forEach((entry, index) => {
      if (entry) arr.push(index);
    });
    return arr;
  }

  return {
    marked,
    countVertices,
    printReachableVertices
  };
}

module.exports = DirectedDFS;
