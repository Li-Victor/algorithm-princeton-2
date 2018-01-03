// Bag implemnetation using a singly linked list

function Bag() {
  var first = null; // beginning of bag
  var n = 0; // number of elements in bag

  function Node(item) {
    var item = item;
    var next = null;

    return {
      item,
      next
    };
  }

  // returns true if this bag is empty.
  function isEmpty() {
    return first === null;
  }

  // returns the number of items in this bag
  function size() {
    return n;
  }

  // adds the item to this bag
  function add(item) {
    var oldFirst = first;
    first = Node(item);
    first.next = oldFirst;
    n++;
  }

  // returns an array for all values held in this bag
  function values() {
    var current = first;
    var arr = [];
    while (current !== null) {
      arr.push(current.item);
      current = current.next;
    }
    return arr;
  }

  return {
    isEmpty,
    size,
    add,
    values
  };
}

module.exports = Bag;
