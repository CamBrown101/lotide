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

const words = ['ground', 'control', 'to', 'major', 'tom'];
const arrOfArr = [
  [1, 2],
  [1, 2],
];
const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

assertArraysEqual(
  map(words, (word) => word[0]),
  ['g', 'c', 't', 'm', 't']
);
assertArraysEqual(
  map(words, (word) => word[1]),
  ['r', 'o', 'o', 'a', 'o']
);
assertArraysEqual(
  map(words, (word) => word[2]),
  ['o', 'n', undefined, 'j', 'm']
);
assertArraysEqual(
  map(arrOfArr, (word) => word[0]),
  [1, 1]
);


module.exports = map;