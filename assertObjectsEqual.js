const eqArrays = require('./eqArrays');

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

module.exports = assertObjectsEqual;