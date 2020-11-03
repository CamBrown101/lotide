const takeUntil = (array, callback) => {
  const ans = [];
  for (let item of array) {
    if (!callback(item)) {
      ans.push(item);
    } else {
      return ans;
    }
  }
};

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, (x) => x < 0);

// console.log('---');

// const data2 = [
//   "I've",
//   'been',
//   'to',
//   'Hollywood',
//   ',',
//   "I've",
//   'been',
//   'to',
//   'Redwood',
// ];

module.exports = takeUntil;