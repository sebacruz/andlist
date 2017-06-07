# andlist

Turns an array of strings into a friendly delimited string separated by commas and an "and".

## Install

```
$ npm install andlist
```

## Example

``` js
const andlist = require('andlist');
const arr = ['one', 'two', 'three', 'four'];

console.log(andlist(arr, ', ', ' and '));
```

```
$ node example/basic.js
one, two, three and four
```
