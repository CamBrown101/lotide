const assertArraysEqual = require('./assertArraysEqual')

const middle = (arr) => {
  let returnArr = [];
  if (arr.length <= 2) {
    returnArr = [];
  } else if (arr.length % 2 === 0) {
    returnArr.push(arr[arr.length / 2 - 1]);
    returnArr.push(arr[arr.length / 2]);
  } else if (arr.length % 2 !== 0) {
    returnArr.push(arr[Math.floor(arr.length / 2)]);
  }
  return returnArr;
};

module.exports = middle;