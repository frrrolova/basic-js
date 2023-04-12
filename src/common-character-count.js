const { NotImplementedError } = require('../extensions/index.js');

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
function getCommonCharacterCount(str1, str2) {

  if (str1.length === 0 || str2.length === 0) {
    return 0;
  }
  let count = 0;
  let map = new Map();
  for (let i = 0; i < str1.length; i++) {
    if (map.has(str1[i])) {
      map.set(str1[i], map.get(str1[i]) + 1);
    } else {
      map.set(str1[i], 1);
    }
  }

  for (let i = 0; i < str2.length; i++) {

    if (map.has(str2[i])) {
      count = count + 1;
      map.set(str2[i], map.get(str2[i]) - 1);
    }
    if (map.get(str2[i]) === 0) {
      map.delete(str2[i])
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
