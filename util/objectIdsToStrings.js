var RecursiveIterator = require('recursive-iterator');
var isObjectId = require('./isObjectId');

module.exports = function objectIdsToStrings(obj) {
  var iterator = new RecursiveIterator(obj, 0, true);
  var state, node;

  for (var item = iterator.next(); !item.done; item = iterator.next()) {
    state = item.value;
    node = state.node;

    var isObject = typeof node === 'object';
    var isNull = node === null;
    var isArray = node && typeof node.length === 'number';

    if (isObject && !isNull && !isArray && isObjectId(node)) {
      state.parent[state.key] = node.toString();
    }
  }
};
