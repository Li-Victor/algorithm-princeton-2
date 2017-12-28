// data type for finding shortest paths (number of edges) from a source vertex s
// (or a set of source vertices). This implementation uses breadth-first search

const Queue = require('./Queue');

// computes the shortest path between the source vertex s
// and every other vertex in the graph G
function BreadthFirstPaths(G, s) {
  var marked = new Array(G.getVertices()); // marked[v] = is there an s-v path
  var edgeTo = new Array(G.getVertices()); // edgeTo[v] = previos edge on shortest s-v path
  var distTo = new Array(G.getVertices()); // distTo[v] = number of edges shortest s-v path
  bfs(G, s);

  // breadth-first search from a single source
  function bfs(G, s) {
    var q = Queue();
    for (var v = 0; v < G.getVertices(); v++) {
      distTo[v] = Number.MAX_VALUE;
    }
    distTo[s] = 0;
    marked[s] = true;
    q.enqueue(s);

    while (!q.isEmpty()) {
      var v = q.dequeue();
      for (var w of G.getAdjValues(v)) {
        if (!marked[w]) {
          edgeTo[w] = v;
          distTo[w] = distTo[v] + 1;
          marked[w] = true;
          q.enqueue(w);
        }
      }
    }
  }

  // Is there a path between the source vertex s and vertex v
  function hasPathTo(v) {
    return !!marked[v];
  }

  // returns a shortest path between the source vertex s, or null if no such path.
  function pathTo(v) {
    if (!hasPathTo(v)) return null;
    var path = [];
    var x;
    for (x = v; distTo[x] != 0; x = edgeTo[x]) {
      path.push(x);
    }
    path.push(x);
    return path.reverse();
  }

  return {
    hasPathTo,
    pathTo
  };
}

module.exports = BreadthFirstPaths;
