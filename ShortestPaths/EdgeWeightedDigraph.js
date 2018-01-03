// A edge-weighted digraph of vertices named 0 through V - 1,
// where each directed edge is of type DirectedEdge and has a real-valued weight.
// This implementation uses an adjacency-list representation, which is a vertex-indexed array of Bag objects.

const Bag = require('./Bag');

// Initializes an empty edge-weighted digraph with V vertices and 0 edges
function EdgeWeightedDigraph(V) {
  var V = V;
  var E = 0;
  var adj = [];
  var indegree = [];
  for (var v = 0; v < V; v++) {
    adj.push(Bag());
    indegree.push(0);
  }

  // returns the number of vertices in this edge-weighted digraph.
  function getVertices() {
    return V;
  }

  // returns the number of edges in this edge-weighted digraph
  function getEdges() {
    return E;
  }

  // adds the directed edge e to this edge-weighted digraph.
  function addEdge(e) {
    var v = e.from();
    var w = e.to();
    adj[v].add(e);
    indegree[w]++;
    E++;
  }

  /// returns the number of directed edges incident to vertex v
  function getIndegree(v) {
    return indegree[v];
  }

  // returns the number of directed edges incident from vertex v
  function getOutdegree(v) {
    return adj[v].size();
  }

  function getAdj(v) {
    return adj[v].values();
  }

  // returns array of the directed edges incident from vertex v
  function getAdjValues(v) {
    return getAdj(v).map(directedEdge => {
      return directedEdge.printEdge();
    });
  }

  // return array of all directed edges in this edge-weighted digraph.
  function edges() {
    var list = [];
    for (var v = 0; v < V; v++) {
      for (var DirectedEdge of getAdj(v)) {
        list.push(DirectedEdge.printEdge());
      }
    }
    return list;
  }

  return {
    getVertices,
    getEdges,
    addEdge,
    getIndegree,
    getOutdegree,
    getAdjValues,
    edges
  };
}

module.exports = EdgeWeightedDigraph;
