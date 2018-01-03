const KruskalMST = require('./KruskalMST');
const EdgeWeightedGraph = require('./EdgeWeightedGraph');
const Edge = require('./Edge');

describe('Find Minimum Spanning Tree', () => {
  var g = EdgeWeightedGraph(8);

  g.addEdge(Edge(4, 5, 0.35));
  g.addEdge(Edge(4, 7, 0.37));
  g.addEdge(Edge(5, 7, 0.28));
  g.addEdge(Edge(0, 7, 0.16));
  g.addEdge(Edge(1, 5, 0.32));
  g.addEdge(Edge(0, 4, 0.38));
  g.addEdge(Edge(2, 3, 0.17));
  g.addEdge(Edge(1, 7, 0.19));
  g.addEdge(Edge(0, 2, 0.26));
  g.addEdge(Edge(1, 2, 0.36));
  g.addEdge(Edge(1, 3, 0.29));
  g.addEdge(Edge(2, 7, 0.34));
  g.addEdge(Edge(6, 2, 0.4));
  g.addEdge(Edge(3, 6, 0.52));
  g.addEdge(Edge(6, 0, 0.58));
  g.addEdge(Edge(6, 4, 0.93));

  test('Kruskal implementation', () => {
    var mst = KruskalMST(g);
    expect(mst.getWeight()).toBe(1.81);

    expect(mst.edges()).toEqual(
      expect.arrayContaining([
        '0-7: 0.16',
        '2-3: 0.17',
        '1-7: 0.19',
        '0-2: 0.26',
        '5-7: 0.28',
        '4-5: 0.35',
        '6-2: 0.4'
      ])
    );
  });
});
