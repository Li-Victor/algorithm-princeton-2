const EdgeWeightedGraph = require('./EdgeWeightedGraph');
const Edge = require('./Edge');

describe('Edge Weighted Graph', () => {
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

  test('implementation', () => {
    expect(g.getAdjEdges(0)).toEqual([
      '6-0: 0.58',
      '0-2: 0.26',
      '0-4: 0.38',
      '0-7: 0.16'
    ]);

    expect(g.getAdjEdges(1)).toEqual([
      '1-3: 0.29',
      '1-2: 0.36',
      '1-7: 0.19',
      '1-5: 0.32'
    ]);
    expect(g.getAdjEdges(2)).toEqual([
      '6-2: 0.4',
      '2-7: 0.34',
      '1-2: 0.36',
      '0-2: 0.26',
      '2-3: 0.17'
    ]);
    expect(g.getAdjEdges(3)).toEqual(['3-6: 0.52', '1-3: 0.29', '2-3: 0.17']);

    expect(g.getAdjEdges(4)).toEqual([
      '6-4: 0.93',
      '0-4: 0.38',
      '4-7: 0.37',
      '4-5: 0.35'
    ]);
    expect(g.getAdjEdges(5)).toEqual(['1-5: 0.32', '5-7: 0.28', '4-5: 0.35']);

    expect(g.getAdjEdges(6)).toEqual([
      '6-4: 0.93',
      '6-0: 0.58',
      '3-6: 0.52',
      '6-2: 0.4'
    ]);

    expect(g.getAdjEdges(7)).toEqual([
      '2-7: 0.34',
      '1-7: 0.19',
      '0-7: 0.16',
      '5-7: 0.28',
      '4-7: 0.37'
    ]);
  });

  test('All edges', () => {
    var e = g.edges();
    expect(e.length).toBe(16);
  });
});
