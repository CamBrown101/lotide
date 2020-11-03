const countLetters = (sentance) => {
  const results = {};
  for (const letter of sentance) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

console.log(countLetters('lighthouse in the house'));


module.exports = countLetters;