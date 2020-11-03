const findKey = (object, callback) => {
  for (let [key, value] of Object.entries(object)) {
    if (callback(key, value)) {
      return key;
    }
  }
};

// console.log(
//   findKey(
//     {
//       'Blue Hill': { stars: 1 },
//       Akaleri: { stars: 3 },
//       noma: { stars: 2 },
//       elBulli: { stars: 3 },
//       Ora: { stars: 2 },
//       Akelarre: { stars: 3 },
//     },
//     (k, v) => v.stars === 2
//   )
// );

module.exports = findKey;
