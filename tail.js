const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const tail = (array) => {
  return array.slice(1);
};

// Test Case: Check the original array
const words = ['Yo Yo', 'Lighthouse', 'Labs'];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case: Check the original array
const words2 = [];
tail(words2); // no need to capture the return value since we are not checking it
assertEqual(words2.length, 3); // original array should still have 3 elements!

// Test Case: Check the original array
const words3 = ['Yo Yo'];
tail(words3); // no need to capture the return value since we are not checking it
assertEqual(words3.length, 3); // original array should still have 3 elements!

const newArray = tail([1, 2, 3, 4]);
console.log(newArray);

const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], 'Lighthouse'); // ensure first element is "Lighthouse"
assertEqual(result[1], 'Labs'); // ensure second element is "Labs"
