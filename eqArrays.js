const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
  }
};


const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      return eqArrays(arr1[i], arr2[i])
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays(["1", 2, [3, 2, [2, 1]]], [1, 2, [3, 2, [2, 1]]]), false); // => true
// //loop through the keys and values of one of the objects
// for (const [key, value] of Object.entries(obj1)) {
//   //check to see if any of those values are objects
//   if (typeof value === "object") {
//     //if a value is an object, recall the eqObjects function again and start again
//     if (!eqObjects(obj1[key], obj2[key])) return false;
//   } else {
//     // if not an object check to see if the keys from the two objects match
//     if (obj1[key] !== obj2[key]) return false;
//   }

// }


// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true); // => true
// assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false); // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [2, 3, 3]), false); // => fail
