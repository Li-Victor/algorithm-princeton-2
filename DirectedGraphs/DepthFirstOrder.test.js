const DepthFirstOrder = require('./DepthFirstOrder');
const DiGraph = require('./DiGraph');
describe('Depth First Order of Digraph', () => {
  var g = DiGraph(13);

  g.addEdge(2, 3);
  g.addEdge(0, 6);
  g.addEdge(0, 1);
  g.addEdge(2, 0);
  g.addEdge(11, 12);
  g.addEdge(9, 12);
  g.addEdge(9, 10);
  g.addEdge(9, 11);
  g.addEdge(3, 5);
  g.addEdge(8, 7);
  g.addEdge(5, 4);
  g.addEdge(0, 5);
  g.addEdge(6, 4);
  g.addEdge(6, 9);
  g.addEdge(7, 6);
  var dfo = DepthFirstOrder(g);

  test('Preorder', () => {
    expect(dfo.printPre()).toEqual([0, 5, 4, 1, 6, 9, 11, 12, 10, 2, 3, 7, 8]);
  });

  test('Postorder', () => {
    expect(dfo.printPost()).toEqual([4, 5, 1, 12, 11, 10, 9, 6, 0, 3, 2, 7, 8]);
  });

  test('Reverse Postorder', () => {
    expect(dfo.printReversePost()).toEqual([
      8,
      7,
      2,
      3,
      0,
      6,
      9,
      10,
      11,
      12,
      1,
      5,
      4
    ]);
  });
});
