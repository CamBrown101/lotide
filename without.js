const without = (source, itemsToRemove) => {
  const newArray = [...source];
  let indexToRemove;
  for (let i = 0; i < itemsToRemove.length; i++) {
    indexToRemove = newArray.indexOf(itemsToRemove[i]);
    if (indexToRemove > -1) {
      newArray.splice(indexToRemove, 1);
    }
  }
  return newArray;
};

module.exports = without;