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

    expect(g.getAdj(0).values()).toEqual(expect.arrayContaining([6, 2, 1, 5]));
    expect(g.getAdj(1).values()).toEqual(expect.arrayContaining([0]));
    expect(g.getAdj(2).values()).toEqual(expect.arrayContaining([0]));
    expect(g.getAdj(3).values()).toEqual(expect.arrayContaining([5, 4]));
    expect(g.getAdj(4).values()).toEqual(expect.arrayContaining([5, 6, 3]));
    expect(g.getAdj(5).values()).toEqual(expect.arrayContaining([3, 4, 0]));
    expect(g.getAdj(6).values()).toEqual(expect.arrayContaining([0, 4]));
    expect(g.getAdj(7).values()).toEqual(expect.arrayContaining([8]));
    expect(g.getAdj(8).values()).toEqual(expect.arrayContaining([7]));
    expect(g.getAdj(9).values()).toEqual(expect.arrayContaining([11, 10, 12]));
    expect(g.getAdj(10).values()).toEqual(expect.arrayContaining([9]));
    expect(g.getAdj(11).values()).toEqual(expect.arrayContaining([9, 12]));
    expect(g.getAdj(12).values()).toEqual(expect.arrayContaining([11, 9]));
  });
});
