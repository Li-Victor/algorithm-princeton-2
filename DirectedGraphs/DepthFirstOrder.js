// Data type for determining depth-first search
// ordering of the vertices in a digraph or edge-weighted digraph,
// including preorder, postorder, and reverse postorder]

const Queue = require('./Queue');

// Determines a depth-first order for the digraph G
function DepthFirstOrder(G) {
  var marked = Array(G.getVertices()).fill(false); // marked[v] = has v been makred in dfs?
  var pre = Array(G.getVertices()).fill(0); // pre[v] = preorder number of v
  var post = Array(G.getVertices()).fill(0); // post[v] = postorder number of v
  var preorder = Queue(); // vertices in preorder
  var postorder = Queue(); // vertices in postorder
  var preCounter = 0; // counter for preorder numbering
  var postCounter = 0; // counter for postorder numbering

  for (var v = 0; v < G.getVertices(); v++) {
    if (!marked[v]) dfs(G, v);
  }

  // run DFS in digraph G from vertex v and compute preorder/postorder
  function dfs(G, v) {
    marked[v] = true;
    pre[v] = preCounter++;
    preorder.enqueue(v);
    for (var w of G.getAdjValues(v)) {
      if (!marked[w]) {
        dfs(G, w);
      }
    }
    postorder.enqueue(v);
    post[v] = postCounter++;
  }

  // returns the vertices in postorder in an array
  function printPost() {
    return postorder.printArr();
  }

  // returns the vertices in preorder in an array
  function printPre() {
    return preorder.printArr();
  }

  // returns the vertices in reverse postorder in an array
  function printReversePost() {
    return postorder.printArr().reverse();
  }

  return {
    printPost,
    printPre,
    printReversePost
  };
}

module.exports = DepthFirstOrder;
