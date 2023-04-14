const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let string = str + '';
  let repeatTimes = options['repeatTimes'] || 1;
  let separator = options['separator'] || '+';
  let additionStr = options['addition'] === undefined ? '' : (options['addition'] + '');
  let additionRepeatTimes = options['additionRepeatTimes'] || 1;
  let additionSeparator = options['additionSeparator'] || '|';

  let result = '';

  for (let i = 1; i <= repeatTimes; i++) {
    result = result + string;

    for (let j = 1; j <= additionRepeatTimes; j++) {
      result = result + additionStr;

      if (j < additionRepeatTimes) {
        result = result + additionSeparator;
      }
    }

    if (i < repeatTimes) {
      result = result + separator;
    }
  }

  return result;

}

module.exports = {
  repeater
};
