// const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 *
 */
function countCats(arr) {
  // console.log(arr);
  // throw new NotImplementedError('Not implemented');
  return arr.reduce((acc, item) => {
    return item.filter((el) => el === '^^').length + acc;
  }, 0);
}

// console.log(
//   countCats([
//     ['##', 'dd', '00'],
//     ['^^', '..', 'ss'],
//     ['AA', 'dd', 'Oo'],
//   ])
// );

module.exports = {
  countCats,
};
