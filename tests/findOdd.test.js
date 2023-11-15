const findOdd = require("../src/findOdd");

//npx jest tests/findOdd.test.js
describe("findOdd function", () => {
  test("returns the integer occurring an odd number of times", () => {
    const array = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1, 4, 4];
    const expectedResult = 4;

    const result = findOdd(array);

    expect(result).toBe(expectedResult);
  });

    test('returns the correct odd occurring integer for a different array', () => {
      const array = [5, 5, 2, 2, 3, 3, 3, 3, 7, 7, 7];
      const expectedResult = 7;

      const result = findOdd(array);

      expect(result).toBe(expectedResult);
    });
});
