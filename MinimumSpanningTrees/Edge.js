// Represents a weighted edge in an EdgeWeightedGraph.
// Each edge consists of two integers (naming the two vertices) and a real-value weight.

// initializes an edge between vertices v and w of the given weight
function Edge(v, w, weight) {
  var v = v;
  var w = w;
  var weight = weight;

  // returns the weight of this edge.
  function getWeight() {
    return weight;
  }

  // returns either endpoint of this edge.
  function either() {
    return v;
  }

  // returns the endpoint of this edge that is different from the given vertex
  function other(vertex) {
    if (vertex === v) return w;
    return v;
  }

  // compares two edges by weight
  function compare(that) {
    return getWeight() - that.getWeight();
  }

  function printEdge() {
    return `${v}-${w}: ${weight}`;
  }

  return {
    getWeight,
    either,
    other,
    compare,
    printEdge
  };
}

module.exports = Edge;
