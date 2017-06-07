const tap = require('tap');
const andlist = require('../');

const arr = ['one', 'two', 'three', 'four'];

tap.equal(andlist(arr), 'one, two, three and four');
tap.equal(andlist(arr, ' - '), 'one - two - three and four');
tap.equal(andlist(arr, ' - ', ' = '), 'one - two - three = four');
tap.equal(andlist(arr, undefined, ' = '), 'one, two, three = four');
tap.equal(andlist(arr, ', ', undefined), 'one, two, three and four');
tap.equal(andlist(arr, undefined, undefined), 'one, two, three and four');
