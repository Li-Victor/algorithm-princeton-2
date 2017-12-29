// Directed graph of vertices named 0 through V - 1

const Bag = require('./Bag');

// initializes an empty digraph with V vertices
function DiGraph(V) {
  var V = V; // number of vertices in this digraph
  var E = 0; // number of edges in this digraph
  var adj = []; // adj[v] = adjacency list for vertex v
  for (var v = 0; v < V; v++) {
    adj.push(Bag());
  }
  var indegree = new Array(V); // indegree[v] = indegree of verte v
  indegree.fill(0);

  // returns the number of vertices in this digraph.
  function getVertices() {
    return V;
  }

  // returns the number of edges in this digraph.
  function getEdges() {
    return E;
  }

  // adds the directed edge v->w to this digraph.
  function addEdge(v, w) {
    adj[v].add(w);
    indegree[w]++;
    E++;
  }

  // returns the vertices adjacent from vertex v in this digraph.
  function getAdj() {
    return adj[v];
  }

  // get array of adjacent values
  function getAdjValues(v) {
    return adj[v].values();
  }

  // returns the reverse of the digraph
  function reverse() {
    return reverseDiGraph(V, getAdjValues);
  }

  // returns the number of directed edges incident to vertex v
  function numberDegreeTo(v) {
    return indegree[v];
  }

  // returns the number of directed edges incident from vertex v
  function numberDegreeOut(v) {
    return adj[v].size();
  }

  return {
    getVertices,
    getEdges,
    addEdge,
    getAdj,
    getAdjValues,
    reverse,
    numberDegreeTo,
    numberDegreeOut
  };
}

function reverseDiGraph(V, getAdjValues) {
  var reverse = DiGraph(V);
  for (var i = 0; i < V; i++) {
    for (var w of getAdjValues(i)) {
      reverse.addEdge(w, i);
    }
  }
  return reverse;
}

module.exports = DiGraph;
