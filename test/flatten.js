
var assert = require('assert');
var flatten = require('../build/build.js');
var obj = [[1,2],[3,[4,5]],6,7,[[8],[9,10]]];

it('should deep flatten', function () {
  var flat = flatten(obj);
  assert.deepEqual(flat, [1,2,3,4,5,6,7,8,9,10]);
  assert.notDeepEqual(obj, flat);
});

it('should shallow flatten', function () {
  var flat = flatten(obj, true);
  assert.deepEqual(flat, [1,2,3,[4,5],6,7,[8],[9,10]]);
  assert.notDeepEqual(obj, flat);
  assert.notDeepEqual(flat, [1,2,3,4,5,6,7,8,9,10]);
});

