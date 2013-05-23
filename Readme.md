# flatten

  Flattens a nested array. If isShallow is truthy, array will only be flattened a single level.

## Installation

    $ component install esundahl/flatten

## API

### flatten(arr, isShallow)

```javascript
var flatten = require('flatten');
var arr = [[1,2],[3,[4,5]],6,7,[[8],[9,10]]];
   
flatten(arr) // => [1,2,3,4,5,6,7,8,9,10]
flatten(arr, false); // => [1,2,3,[4,5],6,7,[8],[9,10]]
```

## License

  MIT
