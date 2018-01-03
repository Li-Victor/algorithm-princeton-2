const EdgeWeightedDigraph = require('./EdgeWeightedDigraph');
const DirectedEdge = require('./DirectedEdge');

describe('Edge Weighted Digraph', () => {
  var g = EdgeWeightedDigraph(8);
  g.addEdge(DirectedEdge(4, 5, 0.35));
  g.addEdge(DirectedEdge(5, 4, 0.35));
  g.addEdge(DirectedEdge(4, 7, 0.37));
  g.addEdge(DirectedEdge(5, 7, 0.28));
  g.addEdge(DirectedEdge(7, 5, 0.28));
  g.addEdge(DirectedEdge(5, 1, 0.32));
  g.addEdge(DirectedEdge(0, 4, 0.38));
  g.addEdge(DirectedEdge(0, 2, 0.26));
  g.addEdge(DirectedEdge(7, 3, 0.39));
  g.addEdge(DirectedEdge(1, 3, 0.29));
  g.addEdge(DirectedEdge(2, 7, 0.34));
  g.addEdge(DirectedEdge(6, 2, 0.4));
  g.addEdge(DirectedEdge(3, 6, 0.52));
  g.addEdge(DirectedEdge(6, 0, 0.58));
  g.addEdge(DirectedEdge(6, 4, 0.93));

  test('implementation', () => {
    expect(g.getAdjValues(0)).toEqual(['0->2 0.26', '0->4 0.38']);
    expect(g.getAdjValues(1)).toEqual(['1->3 0.29']);
    expect(g.getAdjValues(2)).toEqual(['2->7 0.34']);
    expect(g.getAdjValues(3)).toEqual(['3->6 0.52']);
    expect(g.getAdjValues(4)).toEqual(['4->7 0.37', '4->5 0.35']);
    expect(g.getAdjValues(5)).toEqual(['5->1 0.32', '5->7 0.28', '5->4 0.35']);
    expect(g.getAdjValues(6)).toEqual(['6->4 0.93', '6->0 0.58', '6->2 0.4']);
    expect(g.getAdjValues(7)).toEqual(['7->3 0.39', '7->5 0.28']);
  });

  test('All edges', () => {
    var e = g.edges();
    expect(e.length).toBe(15);
    expect(g.getEdges()).toBe(15);
  });
});
