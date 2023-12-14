const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const newArr = [];
  for (let i = 0; i < names.length; i += 1) {
    if (!newArr.includes(names[i])) {
      newArr.push(names[i]);
    } else {
      for (let j = 0; j < newArr.length; j++) {
        const newFile = `${names[i]}(${j + 1})`
        if (!newArr.includes(newFile)) {
            newArr.push(newFile)
            break
        }
      }
    }
  }
  // const map = new Map();
  // const result = [];
  // names.forEach((item) => {
  //   if (map.has(item)) {
  //     map.set(item, map.get(item) + 1);
  //   } else {
  //     map.set(item, 0);
  //   }
  // })
  // map.forEach((key, val) => {
    
  // })
  return newArr;
}

module.exports = {
  renameFiles
};
