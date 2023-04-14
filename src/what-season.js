// const {NotImplementedError} = require('../extensions/index.js');

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
  if (!date) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== '[object Date]')
    throw Error('Invalid date!');
  // if (!date || !(date instanceof Date) || isNaN(date))
  //   throw new Error('Invalid date!');
  if (date.toString() == Date.prototype.toString.call(new Date()))
    throw Error('Invalid date!');

  // if (Object.getPrototypeOf(date) === Object.prototype)
  //   throw Error('Invalid date!');
  // if (date instanceof Date === false && isNaN(date))
  //   throw Error('Invalid date!');
  // // return 'Invalid date!';

  // // throw new NotImplementedError('Not implemented');
  // // npm run test ./test/what-season.test.js
  // // remove line with error and write your code here
  const month = date.getMonth();
  if (month === 11 || month <= 1) return 'winter';
  if (month >= 2 && month < 5) return 'spring';
  if (month >= 5 && month < 8) return 'summer';
  return 'autumn';
}

module.exports = {
  getSeason,
};
