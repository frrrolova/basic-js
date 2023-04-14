const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  let obj = {};
  for (let i = 0; i < domains.length; i++) {
    let item = '';
    let index = domains[i].length;
    for (let j = domains[i].length - 1; j >= 0; j--) {
      if (domains[i][j] === '.' || j === 0) {
        if (j === 0) {
          item = item + '.';
        }
        item = item + domains[i].slice(j, index);
        index = j;

        if (obj.hasOwnProperty(item)) {
          obj[item]= obj[item] + 1;
        } else {
          obj[item] = 1;
        }
      }
    }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
