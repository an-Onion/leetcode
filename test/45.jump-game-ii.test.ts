import { jump } from '../src/45.jump-game-ii';

describe('Jump Game II', () => {

  it('[2,3,1,1,4]', () => {
    expect(jump([2,3,1,1,4])).toBe(2);
  });

  it('[2,3,0,1,4]', () => {
    expect(jump([2,3,0,1,4])).toBe(2);
  });
});


