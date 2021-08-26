import { canCross } from '../src/403.frog-jump';

describe('Frog Jump', () => {

  it('e.g. 1', () => {
    const stones = [0,1,3,5,6,8,12,17];
    expect(canCross(stones)).toBeTruthy();
  });

  it('e.g. 2', () => {
    const stones = [0,1,2,3,4,8,9,11];
    expect(canCross(stones)).toBeFalsy();
  });

  it('e.g. 3', () => {
    const stones = [0,1,5];
    expect(canCross(stones)).toBeFalsy();
  });

});
