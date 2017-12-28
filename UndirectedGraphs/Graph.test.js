const Graph = require('./Graph');

describe('Undirected Graph', () => {
  test('implementation', () => {
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

    expect(g.getVertices()).toBe(13);
    expect(g.getEdges()).toBe(13);

    expect(g.degree(0)).toBe(4);
    expect(g.degree(1)).toBe(1);
    expect(g.degree(2)).toBe(1);
    expect(g.degree(3)).toBe(2);
    expect(g.degree(4)).toBe(3);
    expect(g.degree(5)).toBe(3);
    expect(g.degree(6)).toBe(2);
    expect(g.degree(7)).toBe(1);
    expect(g.degree(8)).toBe(1);
    expect(g.degree(9)).toBe(3);
    expect(g.degree(10)).toBe(1);
    expect(g.degree(11)).toBe(2);
    expect(g.degree(12)).toBe(2);

    expect(g.getAdjValues(0)).toEqual(expect.arrayContaining([6, 2, 1, 5]));
    expect(g.getAdjValues(1)).toEqual(expect.arrayContaining([0]));
    expect(g.getAdjValues(2)).toEqual(expect.arrayContaining([0]));
    expect(g.getAdjValues(3)).toEqual(expect.arrayContaining([5, 4]));
    expect(g.getAdjValues(4)).toEqual(expect.arrayContaining([5, 6, 3]));
    expect(g.getAdjValues(5)).toEqual(expect.arrayContaining([3, 4, 0]));
    expect(g.getAdjValues(6)).toEqual(expect.arrayContaining([0, 4]));
    expect(g.getAdjValues(7)).toEqual(expect.arrayContaining([8]));
    expect(g.getAdjValues(8)).toEqual(expect.arrayContaining([7]));
    expect(g.getAdjValues(9)).toEqual(expect.arrayContaining([11, 10, 12]));
    expect(g.getAdjValues(10)).toEqual(expect.arrayContaining([9]));
    expect(g.getAdjValues(11)).toEqual(expect.arrayContaining([9, 12]));
    expect(g.getAdjValues(12)).toEqual(expect.arrayContaining([11, 9]));
  });
});
