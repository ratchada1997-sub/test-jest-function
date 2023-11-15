const invertValue = require('../src/invertValue');
//npx jest tests/invertValue.test.js

describe('invertValue function', () => {
  test('generates correct invertValue for a given input string', () => {
    const inputString = 'abc';
    const expectedOutput = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];

    const generatedinvertValue = invertValue(inputString).sort();

    expect(generatedinvertValue).toEqual(expectedOutput);
  });


});