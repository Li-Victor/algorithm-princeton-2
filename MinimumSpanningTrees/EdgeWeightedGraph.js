// Represents an edge-weighted graph of vertices named 0 throught V - 1,
// This implementation uses an adjacency list representation, which is a vertex-indexed array of Bag Objects

const Bag = require('./Bag');

// Initializes an empty edge-weighted graph with V vertices and 0 edges
function EdgeWeightedGraph(V) {
  var V = V;
  var E = 0;
  var adj = [];
  for (var i = 0; i < V; i++) {
    adj.push(Bag());
  }

  // returns the number of vertices in this edge-weighted graph.
  function getVertices() {
    return V;
  }

  // returns the number of edges in this edge-weighted graph.
  function getEdge() {
    return E;
  }

  // Adds the undirected edge e to this edge-weighted graph.
  function addEdge(e) {
    var v = e.either();
    var w = e.other(v);
    adj[v].add(e);
    adj[w].add(e);
    E++;
  }

  // get array of the edges incident on vertex v
  function getAdjEdges(v) {
    var v = adj[v].values();
    return v.map(edge => {
      return edge.printEdge();
    });
  }

  // returns the degree of vertex v
  function degree(v) {
    return adj[v].size();
  }

  return {
    getVertices,
    getEdge,
    addEdge,
    getAdjEdges,
    degree
  };
}

module.exports = EdgeWeightedGraph;
