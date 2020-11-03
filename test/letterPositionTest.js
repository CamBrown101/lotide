const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPosition", () => {
  it("returns [1] for ('hello').e", () => {
    assert.deepStrictEqual(letterPositions('hello').e, [1]);
  });
  it("returns [2, 3] for ('hello').l", () => {
    assert.deepStrictEqual(letterPositions('hello').l, [2, 3]);
  });
  it("returns [4] for ('hello').o", () => {
    assert.deepStrictEqual(letterPositions('hello').o, [4]);
  });
  it("returns [4, 7] for ('hello world').o", () => {
    assert.deepStrictEqual(letterPositions('hello world').o, [4, 7]);
  });
});