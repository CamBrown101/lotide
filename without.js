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

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const without = (source, itemsToRemove) => {
  const newArray = [...source];
  let indexToRemove;
  for (i = 0; i < itemsToRemove.length; i++) {
    indexToRemove = newArray.indexOf(itemsToRemove[i]);
    if (indexToRemove > -1) {
      newArray.splice(indexToRemove, 1);
    }
  }
  return newArray;
};

const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ['hello', 'world', 'lighthouse']);

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(['1', '2', '3'], [1, 2, '3'])); // => ["1", "2"]
