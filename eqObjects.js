const eqArrays = require('./eqArrays');

const eqObjects = (obj1, obj2) => {
  //check length of key, value pairs in both objects
  if (Object.entries(obj1).length !== Object.entries(obj2).length)
    //if not the same return false
    return false;
  //loop through keys and see if they are arrays
  for (let key of Object.keys(obj1)) {
    if (Array.isArray(obj1[key]) !== Array.isArray(obj2[key])) return false;
    //if they are Arrays check to see if they are the same.
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      //If not return false.
      if (!eqArrays(obj1[key], obj2[key])) return false;
    }
    //loop through the keys and values of one of the objects
    for (const [key, value] of Object.entries(obj1)) {
      //check to see if any of those values are objects
      if (typeof value === "object") {
        //if a value is an object, recall the eqObjects function again and start again
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

module.exports = eqObjects;