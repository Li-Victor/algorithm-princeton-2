const Bag = require('./Bag');

function Graph(V) {
  var V = V; // number of vertices
  var E = 0; // number of edges
  var adj = [];
  for (var v = 0; v < V; v++) {
    adj.push(Bag());
  }

  // returns the number of vertices in this graph.
  function getVertices() {
    return V;
  }

  // retusn the number of edges in this graph.
  function getEdges() {
    return E;
  }

  // adds the undirected edge v-w to this graph.
  function addEdge(v, w) {
    E++;
    adj[v].add(w);
    adj[w].add(v);
  }

  // returns the vertices adjacent to vertex v
  function getAdj(v) {
    return adj[v];
  }

  function getAdjValues(v) {
    return adj[v].values();
  }

  // returns the degree of vertex v
  function degree(v) {
    return adj[v].size();
  }

  return {
    getVertices,
    getEdges,
    addEdge,
    getAdj,
    degree,
    getAdjValues
  };
}

module.exports = Graph;
