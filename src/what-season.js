const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (typeof date !== 'object') {
    throw new Error('Invalid date!');
  }

  try {
    date.valueOf()
  } catch (e) {
    throw new Error('Invalid date!');
  }

  let month = date.getMonth?.();

  if (isNaN(month) || typeof month !== 'number') {
    throw new Error('Invalid date!');
  }

  if (month < 2 || month > 10) {
    return 'winter';
  } else if (month >= 2 && month < 5) {
    return 'spring';
  } else if (month >= 5 && month < 8) {
    return 'summer';
  } else {
    return 'autumn';
  }

}

module.exports = {
  getSeason
};
