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

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    console.log(
      `🛑🛑🛑Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`
    );
    return false;
  }
  for (let key of Object.keys(actual)) {
    if (Array.isArray(actual[key]) && Array.isArray(expected[key])) {
      if (!eqArrays(actual[key], expected[key])) {
        console.log(
          `🛑🛑🛑Assertion Failed: [${inspect(actual)}] !== [${inspect(
            expected
          )}]`
        );
        return false;
      }
    } else if (actual[key] !== expected[key]) {
      console.log(
        `🛑🛑🛑Assertion Failed: [${inspect(actual)}] !== [${inspect(
          expected
        )}]`
      );
      return false;
    }
  }
  console.log(
    `✅✅✅Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`
  );
  return true;
};

const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: '1', d: ['2', 3, 4] };
assertObjectsEqual(cd, cd2); // => false

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
assertObjectsEqual(ab, ba); // => true

const abc = { a: '1', b: '2', c: '3' };
assertObjectsEqual(ab, abc); // => false

module.exports = assertObjectsEqual;