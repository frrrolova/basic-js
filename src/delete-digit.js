const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {

  let str = String(num).split('');
  let arrOfNums = []
  for (let i = 0; i < str.length; i++) {
    arrOfNums.push(parseFloat(str[i]));
  }

  let max = Math.max(...arrOfNums);
  let min = Math.min(...arrOfNums);
  let iOfMax = arrOfNums.indexOf(max, 0);
  let iOfMin = arrOfNums.indexOf(min, 0);

  if (iOfMax > 0) {
    arrOfNums.splice(iOfMax - 1, 1);
  } else {
    arrOfNums.splice(iOfMin, 1);
  }



  return parseFloat(arrOfNums.join(''));
}

module.exports = {
  deleteDigit
};
