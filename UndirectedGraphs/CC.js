// Data type for determining the connected components in an undirected graph.
// This implementation uses depth-first search approach.

// computes the connected components of the undirected graph G
function CC(G) {
  var marked = new Array(G.getVertices()); // marked[v] = has vertex v been marked?
  var id = new Array(G.getVertices()); // id[v] = id of connected component containing v
  var size = new Array(G.getVertices()); // size[id] = number of vertices in given component
  var count = 0; // number of connected components

  for (var i = 0; i < G.getVertices(); i++) {
    if (!marked[i]) {
      dfs(G, i);
      count++;
    }
  }

  // depth-first search for a Graph
  function dfs(G, v) {
    marked[v] = true;
    id[v] = count;
    size[count]++;
    for (var w of G.getAdjValues(v)) {
      if (!marked[w]) {
        dfs(G, w);
      }
    }
  }

  // returns the number of connected components in the graph.
  function numberOfComponents() {
    return count;
  }

  // returns the component id of the connected component containing vertex v
  function idOfComponent(v) {
    return id[v];
  }

  // returns true if vertices v and w are in the same
  // connected component.
  function connected(v, w) {
    return id(v) === id(w);
  }

  function componentInId(v) {
    var arr = [];
    for (var i = 0; i < id.length; i++) {
      if (id[i] === v) arr.push(i);
    }
    return arr;
  }

  return {
    connected,
    numberOfComponents,
    idOfComponent,
    componentInId
  };
}

module.exports = CC;
