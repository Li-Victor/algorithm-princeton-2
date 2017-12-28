const DepthFirstPaths = require('./DepthFirstPaths');
const Graph = require('./Graph');
const BreadthFirstPaths = require('./BreadthFirstPaths');
const CC = require('./CC');

describe('Directed Graphs', () => {
  var g;
  beforeEach(() => {
    g = Graph(13);

    g.addEdge(0, 5);
    g.addEdge(4, 3);
    g.addEdge(0, 1);
    g.addEdge(9, 12);
    g.addEdge(6, 4);
    g.addEdge(5, 4);
    g.addEdge(0, 2);
    g.addEdge(11, 12);
    g.addEdge(9, 10);
    g.addEdge(0, 6);
    g.addEdge(7, 8);
    g.addEdge(9, 11);
    g.addEdge(5, 3);
  });

  function testHasPathTo(path) {
    expect(path.hasPathTo(1)).toBe(true);
    expect(path.hasPathTo(3)).toBe(true);
    expect(path.hasPathTo(4)).toBe(true);
    expect(path.hasPathTo(11)).toBe(false);
  }

  test('dfs', () => {
    var path = DepthFirstPaths(g, 0);
    testHasPathTo(path);
    expect(path.pathTo(3)).toEqual([0, 6, 4, 5, 3]);
    expect(path.pathTo(9)).toBe(null);
  });

  test('bfs', () => {
    var path = BreadthFirstPaths(g, 0);
    testHasPathTo(path);
    expect(path.pathTo(3)).toEqual([0, 5, 3]);
    expect(path.pathTo(4)).toEqual([0, 6, 4]);
    expect(path.pathTo(9)).toBe(null);
  });

  test('connected components', () => {
    var ConnectedComponents = CC(g);
    expect(ConnectedComponents.numberOfComponents()).toEqual(3);
    expect(ConnectedComponents.componentInId(0)).toEqual(
      expect.arrayContaining([0, 1, 2, 3, 4, 5, 6])
    );

    expect(ConnectedComponents.componentInId(1)).toEqual(
      expect.arrayContaining([7, 8])
    );

    expect(ConnectedComponents.componentInId(2)).toEqual(
      expect.arrayContaining([9, 10, 11, 12])
    );
  });
});
