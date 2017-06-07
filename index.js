/**
 * Turns an array of strings into a friendly delimited
 * string separated by commas and an "and".
 *
 * @param  {Array} [items=[]] An array of strings
 * @param  {String} [separator=', '] Text to put between each element
 * @param  {String} [and=' and '] Text to put between the next-to-last element and the last element
 * @return {String} The constructed string
 */
module.exports = function (items = [], separator = ', ', and = ' and ') {
  const arr = [].concat(items);
  const last = arr.pop();

  if (arr.length === 0) {
    return last;
  }

  return [arr.join(separator), last].join(and);
};
