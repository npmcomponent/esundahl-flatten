/**
 * Dependencies
 */

var isArray = require('isArray');


module.exports = function (array, isShallow) {
  var index = -1,
      length = array ? array.length : 0,
      result = [];

  while (++index < length) {
    var value = array[index];

    if (isArray(value)) {
      Array.prototype.push.apply(result, isShallow ? value : flatten(value));
    }

    else {
      result.push(value);
    }
  }

  return result;
}
