const DepthFirstPaths = require('./DepthFirstPaths');
const Graph = require('./Graph');

describe('Directed Graphs', () => {
  test('dfs', () => {
    var g = Graph(13);

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

    var paths = DepthFirstPaths(g, 0);
    expect(paths.hasPathTo(1)).toBe(true);
    expect(paths.hasPathTo(3)).toBe(true);
    expect(paths.hasPathTo(4)).toBe(true);
    expect(paths.hasPathTo(11)).toBe(false);
    expect(paths.pathTo(3)).toEqual([0, 6, 4, 5, 3]);
    expect(paths.pathTo(9)).toBe(null);
  });
});
