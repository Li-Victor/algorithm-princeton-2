// Priority Queue using the implementation of a binary heap.
// It supports the usual insert and delete-theminimum operations
// along with methods for peeking at the mimimum key,
// testing if the priority queue is empty, and iterating through the keys

function MinPQ() {
  var pq = new Array(1); // store items at indices 1 to n
  var n = 0; // number of items on priority queue

  // retusn true if this priority queue is empty
  function isEmpty() {
    return n === 0;
  }

  // returns the number of keys on this priority queue.
  function size() {
    return n;
  }

  // returns a smallest key on this priority queue.
  function min() {
    if (isEmpty()) return null;
    return pq[1];
  }

  // helper function to doulbe the size of the heap array
  function resize(capacity) {
    var temp = new Array(capacity);
    for (var i = 1; i <= n; i++) {
      temp[i] = pq[i];
    }
    pq = temp;
  }

  // adds a new key to this priority queue.
  function insert(x) {
    // double size of array if necessary
    if (n === pq.length - 1) resize(2 * pq.length);

    // adds x, and percolate it up to matintain heap invariant
    pq[++n] = x;
    swim(n);
  }

  // removes and returns a smallest key on this priority queue.
  function delMin() {
    var min = pq[1];
    exch(1, n--);
    sink(1);
    pq[n + 1] = null;
    if (n > 0 && n === Math.floor((pq.length - 1) / 4)) resize(pq.length / 2);
    return min;
  }

  // exchange key in child with key in parent
  // repeat until heap order restored
  function swim(k) {
    // parent of node at k is at k / 2
    while (k > 1 && compare(pq[Math.floor(k / 2)], pq[k]) > 0) {
      exch(k, Math.floor(k / 2));
      k = Math.floor(k / 2);
    }
  }

  // exchange key in parent with key in larger child
  // repeat until heap order restored
  function sink(k) {
    while (2 * k <= n) {
      var j = 2 * k;
      // children of node at k are 2k and 2k + 1
      if (j < n && compare(pq[j], pq[j + 1]) > 0) j++;
      if (!(compare(pq[k], pq[j]) > 0)) break;
      exch(k, j);
      k = j;
    }
  }

  // change compare function if sorting different data types of array
  // comparing two edges
  function compare(x, y) {
    return x.compare(y);
  }

  function exch(i, j) {
    var temp = pq[i];
    pq[i] = pq[j];
    pq[j] = temp;
  }

  return {
    isEmpty,
    insert,
    delMin,
    min
  };
}

module.exports = MinPQ;
