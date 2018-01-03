// A weighted edge in an EdgeWeightedDigraph.
// Each edge consists of two numbers (naming the two vertices) and a real-value weight.
// The data type provides methods for accessing the two endpoints of the directed edge and the weight

function DirectedEdge(v, w, weight) {
  var v = v;
  var w = w;
  var weight = weight;

  // returns the tail vertex of the directed edge.
  function from() {
    return v;
  }

  // returns the head vertex of the directed edge.
  function to() {
    return w;
  }

  // returns the weight of the directed edge.
  function getWeight() {
    return weight;
  }

  function printEdge() {
    return `${v}->${w} ${weight}`;
  }

  return {
    from,
    to,
    printEdge
  };
}

module.exports = DirectedEdge;
