const findKeyByValue = (obj, searchValue) => {
  for (let value of Object.keys(obj)) {
    if (searchValue === obj[value]) {
      return value;
    }
  }
};

// const bestTVShowsByGenre = {
//   // sci_fi: 'The Expanse',
//   comedy: 'Brooklyn Nine-Nine',
//   drama: 'The Wire',
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, 'Brooklyn Nine-Nine'), 'comedy');
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// console.log(findKeyByValue(bestTVShowsByGenre, 'The Wire'));


module.exports = findKeyByValue;