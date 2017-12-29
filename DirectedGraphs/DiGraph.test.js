const DiGraph = require('./DiGraph');

describe('Directed Graph', () => {
  test('implementation', () => {
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

    expect(g.getVertices()).toBe(13);
    expect(g.getEdges()).toBe(22);

    expect(g.numberDegreeTo(0)).toBe(2);
    expect(g.numberDegreeTo(1)).toBe(1);
    expect(g.numberDegreeTo(2)).toBe(2);
    expect(g.numberDegreeTo(3)).toBe(2);
    expect(g.numberDegreeTo(4)).toBe(3);
    expect(g.numberDegreeTo(5)).toBe(2);
    expect(g.numberDegreeTo(6)).toBe(2);
    expect(g.numberDegreeTo(7)).toBe(0);
    expect(g.numberDegreeTo(8)).toBe(1);
    expect(g.numberDegreeTo(9)).toBe(3);
    expect(g.numberDegreeTo(10)).toBe(1);
    expect(g.numberDegreeTo(11)).toBe(1);
    expect(g.numberDegreeTo(12)).toBe(2);

    expect(g.numberDegreeOut(0)).toBe(2);
    expect(g.numberDegreeOut(1)).toBe(0);
    expect(g.numberDegreeOut(2)).toBe(2);
    expect(g.numberDegreeOut(3)).toBe(2);
    expect(g.numberDegreeOut(4)).toBe(2);
    expect(g.numberDegreeOut(5)).toBe(1);
    expect(g.numberDegreeOut(6)).toBe(4);
    expect(g.numberDegreeOut(7)).toBe(2);
    expect(g.numberDegreeOut(8)).toBe(1);
    expect(g.numberDegreeOut(9)).toBe(2);
    expect(g.numberDegreeOut(10)).toBe(1);
    expect(g.numberDegreeOut(11)).toBe(2);
    expect(g.numberDegreeOut(12)).toBe(1);

    expect(g.getAdjValues(0)).toEqual(expect.arrayContaining([5, 1]));
    expect(g.getAdjValues(1)).toEqual(expect.arrayContaining([]));
    expect(g.getAdjValues(2)).toEqual(expect.arrayContaining([0, 3]));
    expect(g.getAdjValues(3)).toEqual(expect.arrayContaining([5, 2]));
    expect(g.getAdjValues(4)).toEqual(expect.arrayContaining([3, 2]));
    expect(g.getAdjValues(5)).toEqual(expect.arrayContaining([4]));
    expect(g.getAdjValues(6)).toEqual(expect.arrayContaining([9, 4, 8, 0]));
    expect(g.getAdjValues(7)).toEqual(expect.arrayContaining([6, 9]));
    expect(g.getAdjValues(8)).toEqual(expect.arrayContaining([6]));
    expect(g.getAdjValues(9)).toEqual(expect.arrayContaining([11, 10]));
    expect(g.getAdjValues(10)).toEqual(expect.arrayContaining([12]));
    expect(g.getAdjValues(11)).toEqual(expect.arrayContaining([4, 12]));
    expect(g.getAdjValues(12)).toEqual(expect.arrayContaining([9]));

    // reverse
    var r = g.reverse();
    expect(r.getVertices()).toBe(13);
    expect(r.getEdges()).toBe(22);

    expect(r.numberDegreeTo(0)).toBe(2);
    expect(r.numberDegreeTo(1)).toBe(0);
    expect(r.numberDegreeTo(2)).toBe(2);
    expect(r.numberDegreeTo(3)).toBe(2);
    expect(r.numberDegreeTo(4)).toBe(2);
    expect(r.numberDegreeTo(5)).toBe(1);
    expect(r.numberDegreeTo(6)).toBe(4);
    expect(r.numberDegreeTo(7)).toBe(2);
    expect(r.numberDegreeTo(8)).toBe(1);
    expect(r.numberDegreeTo(9)).toBe(2);
    expect(r.numberDegreeTo(10)).toBe(1);
    expect(r.numberDegreeTo(11)).toBe(2);
    expect(r.numberDegreeTo(12)).toBe(1);

    expect(r.numberDegreeOut(0)).toBe(2);
    expect(r.numberDegreeOut(1)).toBe(1);
    expect(r.numberDegreeOut(2)).toBe(2);
    expect(r.numberDegreeOut(3)).toBe(2);
    expect(r.numberDegreeOut(4)).toBe(3);
    expect(r.numberDegreeOut(5)).toBe(2);
    expect(r.numberDegreeOut(6)).toBe(2);
    expect(r.numberDegreeOut(7)).toBe(0);
    expect(r.numberDegreeOut(8)).toBe(1);
    expect(r.numberDegreeOut(9)).toBe(3);
    expect(r.numberDegreeOut(10)).toBe(1);
    expect(r.numberDegreeOut(11)).toBe(1);
    expect(r.numberDegreeOut(12)).toBe(2);

    expect(r.getAdjValues(0)).toEqual(expect.arrayContaining([2, 6]));
    expect(r.getAdjValues(1)).toEqual(expect.arrayContaining([0]));
    expect(r.getAdjValues(2)).toEqual(expect.arrayContaining([3, 4]));
    expect(r.getAdjValues(3)).toEqual(expect.arrayContaining([2, 4]));
    expect(r.getAdjValues(4)).toEqual(expect.arrayContaining([6, 5, 11]));
    expect(r.getAdjValues(5)).toEqual(expect.arrayContaining([0, 3]));
    expect(r.getAdjValues(6)).toEqual(expect.arrayContaining([7, 8]));
    expect(r.getAdjValues(7)).toEqual(expect.arrayContaining([]));
    expect(r.getAdjValues(8)).toEqual(expect.arrayContaining([6]));
    expect(r.getAdjValues(9)).toEqual(expect.arrayContaining([6, 7, 12]));
    expect(r.getAdjValues(10)).toEqual(expect.arrayContaining([9]));
    expect(r.getAdjValues(11)).toEqual(expect.arrayContaining([9]));
    expect(r.getAdjValues(12)).toEqual(expect.arrayContaining([10, 11]));
  });
});
