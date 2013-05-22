
function flatten(array, isShallow, callback, thisArg) {
  var index = -1,
      length = array ? array.length : 0,
      result = [];

  if (typeof isShallow != 'boolean' && isShallow != null) {
    thisArg = callback;
    callback = !(thisArg && thisArg[isShallow] === array) ? isShallow : undefined;
    isShallow = false;
  }
  if (callback != null) {
    callback = lodash.createCallback(callback, thisArg);
  }
  while (++index < length) {
    var value = array[index];
    if (callback) {
      value = callback(value, index, array);
    }
    if (isArray(value)) {
      push.apply(result, isShallow ? value : flatten(value));
    } else {
      result.push(value);
    }
  }
  return result;
}