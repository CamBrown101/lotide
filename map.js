const assertArraysEqual = require('./assertArraysEqual');

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
// const words = ['ground', 'control', 'to', 'major', 'tom'];
// const arrOfArr = [
//   [1, 2],
//   [1, 2],
// ];
// assertArraysEqual(
//   map(words, (word) => word[0]),
//   ['g', 'c', 't', 'm', 't']
// );
// assertArraysEqual(
//   map(words, (word) => word[1]),
//   ['r', 'o', 'o', 'a', 'o']
// );
// assertArraysEqual(
//   map(words, (word) => word[2]),
//   ['o', 'n', undefined, 'j', 'm']
// );
// assertArraysEqual(
//   map(arrOfArr, (word) => word[0]),
//   [1, 1]
// );


module.exports = map;