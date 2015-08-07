var isObjectId = require('./isObjectId');

module.exports = function objectIdsToStrings(iterable) {
  var key, prop;

  for (key in iterable) {
    prop = iterable[key];
    if (typeof prop === 'object') {
      if (isObjectId(prop)) {
        iterable[key] = prop.toString();
      } else {
        objectIdsToStrings(prop);
      }
    }
  }
};
