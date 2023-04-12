const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) {
    return '';
  }

  let lastLetter = '';
  let counter = 1;
  let result = '';

  for (let i = 0; i < str.length; i++) {

    if (str[i] === lastLetter) {
      counter = counter + 1;
      if (i === str.length - 1) {
        result = result + (counter > 1 ? counter : '') + lastLetter;
      }
    } else {
      if ((i === str.length - 1)) {
        result = result + (counter > 1 ? counter : '') + lastLetter + str[i];
      } else {
      result = result + (counter > 1 ? counter : '') + lastLetter;
      lastLetter = str[i];
      counter = 1;
      }
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
