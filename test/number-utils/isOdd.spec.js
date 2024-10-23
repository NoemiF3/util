const { expect } = require('chai');

const { isOdd } = require('../../src');

const EXPECTED_VALUES = [
  { number: 5, result: 'Odd' },
  { number: 4, result: 'Even' },
];
describe('Validate numbers', () => {
  EXPECTED_VALUES.forEach(({ number, result }) => {
    it(`Should return ${number} is ${result}`, () => {
      expect(isOdd(number)).to.equal(result);
    });
  });
});
