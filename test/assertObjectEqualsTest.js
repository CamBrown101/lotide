const assertObjectsEqual = require('../assertObjectsEqual');
const assert = require('chai').assert;

describe("#assertObjectsEqual", () => {
  it("returns true for { c: '1', d: ['2', 3] }, { d: ['2', 3], c: '1' }", () => {
    assert.strictEqual(assertObjectsEqual({ c: '1', d: ['2', 3] }, { d: ['2', 3], c: '1' }), true);
  });

});



