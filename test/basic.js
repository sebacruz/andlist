import tap from 'tap';
import andlist from '../index.js'

const arr = ['one', 'two', 'three', 'four'];

tap.equal(andlist(arr), 'one, two, three and four');
tap.equal(andlist(arr, ' - '), 'one - two - three and four');
tap.equal(andlist(arr, ' - ', ' = '), 'one - two - three = four');
tap.equal(andlist(arr, undefined, ' = '), 'one, two, three = four');
tap.equal(andlist(arr, ', ', undefined), 'one, two, three and four');
tap.equal(andlist(arr, undefined, undefined), 'one, two, three and four');
