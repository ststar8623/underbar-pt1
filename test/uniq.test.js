const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  // my own test
  it('de-dups a list of strings and numbers', () => {
    const strNum = ['steve', 'steven', 'steven', 'leung', 'steve', 3, 4, 5, 3];
    expect(_.uniq(strNum)).toEqual(["steve", "steven", "leung", 3, 4, 5]);
  });
});