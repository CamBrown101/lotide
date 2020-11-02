const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays(["1", 2, [3, 2, [2, 1]]], [1, 2, [3, 2, [2, 1]]]), false); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true); // => true
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [2, 3, 3]), false); // => fail
