const { reverseWords, capitalizeWords } = require(".");

describe("reverseWords", () => {
  it("should reverse the words of a sentence", () => {
    expect(reverseWords("alchemy rocks gold")).toBe("ymehcla skcor dlog");
  });
});
describe('capitalizeWords', () => {
  it('it should capitalize the first letter of each word', () => {
    expect(capitalizeWords('alchemy ROCKS goLD')).toBe('Alchemy Rocks Gold');
  })
});
