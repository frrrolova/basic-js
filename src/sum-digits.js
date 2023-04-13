const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {

  function numSum(digit) {
    let result = 0;
    let strOfNums = digit.toString();

    for (let i = 0; i < strOfNums.length; i++) {
      result = result + parseInt(strOfNums[i]);
    }

    return result;
  }

  let temp = num;

  while (temp > 9) {
    temp = numSum(temp);
  }

  return temp;

}

module.exports = {
  getSumOfDigits
};
