import { shiftingLetters } from '../src/848.shifting-letters';

describe('Shifting Letters', () => {

  it('e.g. 1', () => {
    const s = 'abc', shifts = [3,5,9];
    expect(shiftingLetters(s, shifts)).toEqual('rpl');
  });

  it('e.g. 2', () => {
    const s = 'aaa', shifts = [1,2,3];
    expect(shiftingLetters(s, shifts)).toEqual('gfd');
  });

});
