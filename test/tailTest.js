const tail = require('../tail')
const assertEqual = require('../assertEqual')

// Test Case: Check the original array
const words = ['Yo Yo', 'Lighthouse', 'Labs'];
tail(words);
assertEqual(words.length, 3);

// Test Case: Check the original array
const words2 = [];
tail(words2);
assertEqual(words2.length, 3);

// Test Case: Check the original array
const words3 = ['Yo Yo'];
tail(words3);
assertEqual(words3.length, 3);

const newArray = tail([1, 2, 3, 4]);
const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result.length, 2);
assertEqual(result[0], 'Lighthouse');
assertEqual(result[1], 'Labs');
