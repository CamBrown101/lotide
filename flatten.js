// const assertArraysEqual = (arr1, arr2) => {
//     let results = arr1.length === arr2.length;
//     if (results === false) {
//       console.log(`🛑🛑🛑Assertion Failed: [${arr1}] !== [${arr2}]`);
//       return false;
//     } else {
//       for (let i = 0; i < arr1.length; i++) {
//         results === true ? (results = arr1[i] === arr2[i]) : (results = false);
//       }
//     }
//     results
//       ? console.log(`✅✅✅Assertion Passed: [${arr1}] === [${arr2}]`)
//       : console.log(`🛑🛑🛑Assertion Failed: [${arr1}] !== [${arr2}]`);
//     return results;
//   };

//   const eqArrays = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//       return false;
//     }
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {
//         return false;
//       }
//     }
//     return true;
//   };

const flatten = (arr) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        newArray.push(arr[i][j]);
      }
    } else {
      newArray.push(arr[i]);
    }
  }

  return newArray;
};

console.log(flatten([1, [1, 2]]));
