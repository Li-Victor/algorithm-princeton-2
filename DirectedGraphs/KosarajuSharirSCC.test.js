const KosarajuSharirSCC = require('./KosarajuSharirSCC');
const DiGraph = require('./DiGraph');

describe('Strong Components', () => {
  var g = DiGraph(13);

  g.addEdge(4, 2);
  g.addEdge(2, 3);
  g.addEdge(3, 2);
  g.addEdge(6, 0);
  g.addEdge(0, 1);
  g.addEdge(2, 0);
  g.addEdge(11, 12);
  g.addEdge(12, 9);
  g.addEdge(9, 10);
  g.addEdge(9, 11);
  g.addEdge(7, 9);
  g.addEdge(10, 12);
  g.addEdge(11, 4);
  g.addEdge(4, 3);
  g.addEdge(3, 5);
  g.addEdge(6, 8);
  g.addEdge(8, 6);
  g.addEdge(5, 4);
  g.addEdge(0, 5);
  g.addEdge(6, 4);
  g.addEdge(6, 9);
  g.addEdge(7, 6);

  test('Kosaraju-Sharir implementation', () => {
    var SCC = KosarajuSharirSCC(g);
    expect(SCC.countNumber()).toBe(5);

    // compute list of vertices in each strong component
    var arr = []; // Array of # of count numbers of Arrays
    for (var i = 0; i < SCC.countNumber(); i++) {
      arr.push([]);
    }

    for (var v = 0; v < g.getVertices(); v++) {
      arr[SCC.idComponent(v)].push(v);
    }

    expect(arr[0]).toEqual([1]);
    expect(arr[1]).toEqual([0, 2, 3, 4, 5]);
    expect(arr[2]).toEqual([9, 10, 11, 12]);
    expect(arr[3]).toEqual([6, 8]);
    expect(arr[4]).toEqual([7]);
  });
});
