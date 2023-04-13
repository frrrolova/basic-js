const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
  let arrCopy = arr.map((x) => x);

  if (arr.length === 0) {
    return [];
  }

  for (let i = 0; i < arrCopy.length; i++) {
    if (arrCopy[i] === '--discard-next') {
      if (i === arrCopy.length - 1) {
        arrCopy.splice(i);
      } else {
        delete arrCopy[i + 1];
        arrCopy.splice(i, 1);
      }
    } else if (arrCopy[i] === '--discard-prev') {
      if (i === 0) {
        arrCopy.splice(i, 1);
      } else {
        arrCopy.splice(i - 1, 2);
      }
    } else if (arrCopy[i] === '--double-next') {
      if (i === arrCopy.length - 1) {
        arrCopy.splice(i);
      } else {
        arrCopy.splice(i, 1, arrCopy[i + 1]);
      }
    } else if (arrCopy[i] === '--double-prev') {
      if (i === 0) {
        arrCopy.splice(i, 1);
      } else {
        arrCopy.splice(i, 1, arrCopy[i - 1]);
      }
    }
  }

  let result = arrCopy.filter((item) => item);

  return result;
}


module.exports = {
  transform
};
