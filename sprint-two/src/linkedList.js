var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail === null) {
      list.tail = Node(value);
      list.head = list.tail;
    }
    list.tail = Node(value);
    list.head.next = list.tail;



  };

  list.removeHead = function() {
    var result = list.head.value;
    list.head = list.tail;
    return result;
    // var result = value;
    // delete value;
    // return result;
  };

  list.contains = function(target) {
    // for (var key in list) {
    //   return list[key]['value'] === target;
    // }

    return (list.head.value === target || list.tail.value === target);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
