// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  return members
    .filter((person) => typeof person === 'string')
    .map((el) => el.trim().toUpperCase()[0])
    .sort()
    .join('');
}

// console.log(createDreamTeam(['Amelia', 'Grace', 'Lily', 'Ruby']));

module.exports = {
  createDreamTeam,
};
