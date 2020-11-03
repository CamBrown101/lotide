const flatten = require('../flatten');
const assert = require('chai').assert;

describe("#flatten", () => {
  it("returns [1, 1, 2] for [1, [1, 2]]", () => {
    assert.deepStrictEqual(flatten([1, [1, 2]]), [1, 1, 2]);
  });
});