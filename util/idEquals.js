var isObjectId = require('./isObjectId');

module.exports = function idEquals(str1, str2) {
  if (typeof str1 === 'object' && isObjectId(str1)) {
    return str1.equals(str2);
  }

  if (typeof str2 === 'object' && isObjectId(str2)) {
    return str2.equals(str1);
  }

  return str1 === str2;
};
