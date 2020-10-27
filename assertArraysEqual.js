const assertArraysequal = (arr1, arr2) => {
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

assertArraysequal([1, 2, 3], [1, 2, 3]); // => true
assertArraysequal([1, 2, 3], [3, 2, 1]); // => false
assertArraysequal(['1', '2', '3'], ['1', '2', '3']); // => true
assertArraysequal(['1', '2', '3'], ['1', '2', 3]); // => false
assertArraysequal([1, 2, 3, 4], [2, 3, 3, 5, 5.4]); // => fail
