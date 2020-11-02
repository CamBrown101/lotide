const assertArraysEqual = (arr1, arr2) => {
  let results = arr1.length === arr2.length;
  if (results === false) {
    console.log(`🛑🛑🛑Assertion Failed: [${arr1}] !== [${arr2}]`);
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      results === true ? (results = arr1[i] === arr2[i]) : (results = false);
    }
  }
  results
    ? console.log(`✅✅✅Assertion Passed: [${arr1}] === [${arr2}]`)
    : console.log(`🛑🛑🛑Assertion Failed: [${arr1}] !== [${arr2}]`);
  return results;
};

const takeUntil = (array, callback) => {
  ans = [];
  for (let item of array) {
    if (!callback(item)) {
      ans.push(item);
    } else {
      return ans;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);

console.log('---');

const data2 = [
  "I've",
  'been',
  'to',
  'Hollywood',
  ',',
  "I've",
  'been',
  'to',
  'Redwood',
];
// const results2 = takeUntil(data2, (x) => x === ',');

// const data3 = [
//   [1, 2],
//   [1, 2],
// ];

// assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']);
// assertArraysEqual(results1, [1, 2, 5, 7, 2]);


module.exports = takeUntil;