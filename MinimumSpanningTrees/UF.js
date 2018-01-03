// The UF class represents a union-find data type
// This implementation uses weighted quick union by rank with path compression by havling.

function UF(N) {
  var parent = new Array(N);
  var rank = new Array(N);
  for (var i = 0; i < N; i++) {
    parent[i] = i;
    rank[i] = 0;
  }
  var count = N;

  // returns the component identifier for the component containing site p
  function find(p) {
    while (p != parent[p]) {
      parent[p] = parent[parent[p]]; // path compression by halving
      p = parent[p];
    }
    return p;
  }

  // returns the component identifier for the component containing site p
  function count() {
    return count;
  }

  // returns true if the two sites are in the same component
  function connected(p, q) {
    return find(p) === find(q);
  }

  // Merges the component containing site p with the component containing site q
  function union(p, q) {
    var rootP = find(p);
    var rootQ = find(q);
    if (rootP === rootQ) return;

    // make root of smaller rank point to root of larger rank
    if (rank[rootP] < rank[rootQ]) {
      parent[rootP] = rootQ;
    } else if (rank[rootP] > rank[rootQ]) {
      parent[rootQ] = rootP;
    } else {
      parent[rootQ] = rootP;
      rank[rootP]++;
    }
    count--;
  }

  return {
    count,
    find,
    connected,
    union
  };
}

module.exports = UF;
