// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }
    let maxDepth = 1;
    for (let item of arr) {
      if (Array.isArray(item)) {
        const depth = 1 + this.calculateDepth(item);
        if (depth > maxDepth) {
          maxDepth = depth;
        }
      }
    }
    return maxDepth;
  }
}

// console.log(
//   calculateDepth([
//     1,
//     [8, [[]]],
//     2,
//     3,
//     [8, []],
//     4,
//     5,
//     ['6575', ['adas', ['dfg', [0]]]],
//   ])
// );

module.exports = {
  DepthCalculator,
};
