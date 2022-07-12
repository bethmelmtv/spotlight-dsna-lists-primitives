const {
  reverseWords,
  capitalizeWords,
  oddishOrEvenish,
  at,
  fizzBuzz,
  anagrams,
} = require(".");

describe("reverseWords", () => {
  it("should reverse the words of a sentence", () => {
    expect(reverseWords("alchemy rocks gold")).toBe("ymehcla skcor dlog");
  });
});
describe("capitalizeWords", () => {
  it("it should capitalize the first letter of each word", () => {
    expect(capitalizeWords("alchemy ROCKS goLD")).toBe("Alchemy Rocks Gold");
  });
});

describe("oddishOrEvenish", () => {
  it("it should take a number and see if it is evenish or oddish", () => {
    expect(oddishOrEvenish(1234)).toBe("Evenish");
  });
});

describe("at", () => {
  it("it should take an array and an index and return the item at corresponding index", () => {
    expect(at(["a", "b", "c", "d", "e"], 2)).toBe("c");
  });
});

describe("fizzBuzz", (at) => {
  it("it should take a number and return fizz if div by 3 and buzz if div by 5 or fizzbuzz if div by both", () => {
    expect(fizzBuzz(35)).toBe("Buzz");
  });
});

describe('anagrams', () => {
  it('should check if all letters in both strings match', () => {
    expect(anagrams('superintended', 'unpredestined')).toBe(true);
  });
});
