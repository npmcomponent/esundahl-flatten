# flatten

  Flattens a nested array. If isShallow is truthy, array will only be flattened a single level.

## Installation

    $ component install esundahl/flatten

## API

```javascript
var flatten = require('flatten');
var obj = [[1,2],[3,[4,5]],6,7,[[8],[9,10]]];
   
flatten(obj) // => [1,2,3,4,5,6,7,8,9,10]
flatten(obj, false); // => [1,2,3,[4,5],6,7,[8],[9,10]]
```

## License

  MIT
