const assert = require("chai").assert;
const expect = require("chai").expect;
const AddNum = require("../utils.js");

describe("it should add two numbers", () => {
  it("Add two number", () => {
    expect(AddNum(3, 4)).equal(7);
  });
});
