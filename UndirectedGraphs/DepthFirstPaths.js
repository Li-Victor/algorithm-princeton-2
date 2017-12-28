// Data type for finding paths from a source vertex
// to every other vertex in an undirected graph.

// computes a path between source vertex s and every other vertex in graph G
function DepthFirstPaths(G, s) {
  var s = s; // source vertex
  var marked = new Array(G.getVertices()); //marked [v] = is there an s-v path?
  var edgeTo = new Array(G.getVertices()); // edgeTo[v] = last edge on s-v path
  dfs(G, s);

  // depth first search from v
  function dfs(G, v) {
    marked[v] = true;
    for (var w of G.getAdjValues(v)) {
      if (!marked[w]) {
        edgeTo[w] = v;
        dfs(G, w);
      }
    }
  }

  // is there a path between the source vertex s and vertex v
  function hasPathTo(v) {
    return !!marked[v];
  }

  // returns a path between the source vertex s and vertex v, or null if no such path
  function pathTo(v) {
    if (!hasPathTo(v)) return null;
    var path = [];
    for (var x = v; x != s; x = edgeTo[x]) {
      path.push(x);
    }
    path.push(s);
    return path.reverse();
  }

  return {
    hasPathTo,
    pathTo
  };
}

module.exports = DepthFirstPaths;
