// const assertEqual = (actual, expected) => {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
//   } else {
//     console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
//   }
// };

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

const eqObjects = (obj1, obj2) => {
  //loop through keys and see if they are arrays
  for (let key of Object.keys(obj1)) {
    if (Array.isArray(obj1[key]) !== Array.isArray(obj2[key])) return false;
    //if they are Arrays check to see if they are the same.
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      //If not return false.
      if (!eqArrays(obj1[key], obj2[key])) return false;
    }
    //check length of key, value pairs in both objects
    if (Object.entries(obj1).length !== Object.entries(obj2).length)
      //if not the same return false
      return false;
    //loop through the keys and values of one of the objects
    for (const [key, value] of Object.entries(obj1)) {
      //check to see if any of those values are objects
      if (typeof value === "object") {
        //if a value is an object call recall the eqObjects function again and start again
        if (!eqObjects(obj1[key], obj2[key])) return false;
      } else {
        // if not an object check to see if the keys from the two objects match
        if (obj1[key] !== obj2[key]) return false;
      }
    }
  }
  // if nothing returns false they are the same
  return true;
};
// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false
console.log(eqObjects({ a: 1, b: [2] }, { a: 1, b: { 0: 2 } })); // =>false

// function sumItems(arr) {
//   let total = 0;
//   arr.forEach((item) => {
//     Array.isArray(item) ? (total += sumItems(item)) : (total += item);
//   });
//   return total;
// }
// const ab = { a: "3", b: "4", c: "3" };
// const ba = { b: "4", a: "3" };
// const obj = { c: "7", a: "8" };

// console.log(eqObjects(ab, ba)); //false
// console.log(eqObjects(ab, ab)); //true
// console.log(eqObjects(ba, ba)); //true
// console.log(eqObjects(obj, ba)); //false

// const cd = { c: '1', d: ['2', 3] };
// const dc = { d: ['2', 3], c: '1' };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: '1', d: ['2', 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false
