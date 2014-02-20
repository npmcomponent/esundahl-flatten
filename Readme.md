*This repository is a mirror of the [component](http://component.io) module [esundahl/flatten](http://github.com/esundahl/flatten). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/esundahl-flatten`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
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
flatten(arr, true); // => [1,2,3,[4,5],6,7,[8],[9,10]]
```

## License

  MIT
