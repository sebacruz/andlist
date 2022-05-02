/**
 * Turns an array of strings into a friendly delimited
 * string separated by commas and an "and".
 *
 * @param  {Array} [items=[]] An array of strings
 * @param  {String} [separator=', '] Text to put between each element
 * @param  {String} [and=' and '] Text to put between the next-to-last element and the last element
 * @return {String} The constructed string
 */
const andlist = (items = [], separator = ', ', and = ' and ') => {
  const itemsCopy = [...items];
  const last = itemsCopy.pop();

  if (itemsCopy.length === 0) {
    return last;
  }

  return [itemsCopy.join(separator), last].join(and);
};

export default andlist;
