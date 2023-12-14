const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  const result = [];
  for (let i = 0; i < rows; i += 1) {
    const resultRow = [];
    for (let j = 0; j < cols; j += 1) {
      let num = 0;
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          let rowInd = i + y;
          let colInd = j + x;
          if (rowInd === i && colInd === j) {
            continue;
          }
          let checkingVal;
          if (matrix[rowInd] !== undefined && matrix[rowInd][colInd] !== undefined) {
            checkingVal = matrix[rowInd][colInd];
          }
          if (checkingVal) {
            num += 1;
          }
        }
      }
      resultRow.push(num);
    }
    result.push(resultRow);
  }
  console.debug(result);
  return result;
}

module.exports = {
  minesweeper
};
