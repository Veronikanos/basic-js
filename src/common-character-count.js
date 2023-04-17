// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr = s2.split('');
  const res = [];
  s1.split('').forEach((item) => {
    if (arr.includes(item)) {
      res.push(item);
      // console.log(res);
      arr.splice(arr.indexOf(item), 1);
    }
    // console.log(arr);
  });
  return res.length;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// console.log(getCommonCharacterCount('aabcc', 'adcaa'));

module.exports = {
  getCommonCharacterCount,
};
