# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cambrown101/lotide`

**Require it:**

`const _ = require('@cambrown101/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*`head()`: return the first element in an array.
*`tail()`: removes the first element in an array.
*`middle()`: returns the middle variable in an array, if numbers even returns 2 values.
*`assertArraysEqual()`: assertion test for comparing 2 arrays.
*`assertEqual()`: assertion test for comparing 2 values, returns a boolean.
*`assertObjectsEqual()`: compares 2 objects
*`countLetters()`: returns the length of a string.
*`eqArrays()`: compares 2 arrays, including arrays inside arrays, returns a boolean.
*`eqObjects()`: compares 2 objects, including objects inside objects, returns a boolean.
*`findKey()`: takes in an array and a callback, returns the first value where the callback is true.
*`findKeyByValue()`: searches an array and returns the key of the first value in the parameters.
*`flatten()`: takes nested arrays and returns them as one array.
*`letterPositions()`: returns all the positions where a charactar is found.
*`map()`: iterates through an array and does something to the elements, returns an array.
*`takeUntil()`: takes in an array and a callback, returns the original up until the callback is true.
*`without()`: takes in a word and an Array, removes unwanted elements from an array.
*`countOnly()`: takes in an object and an array and return an object with counts of each thing in the input object.