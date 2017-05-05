const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  // my own test

  it('return true if any element is a number', () => {
    const val = ['steven', 'leung', 31, 'male', true];
    expect(_.some(val, el => el === Number(el))).toBe(true);
  });

});