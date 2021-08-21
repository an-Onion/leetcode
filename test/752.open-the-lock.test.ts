import { openLock } from '../src/752.open-the-lock';

describe('Open the Lock', () => {

  it('e.g. 1',() => {
    const deadends = ['0201','0101','0102','1212','2002'], target = '0202';
    expect(openLock(deadends, target)).toBe(6);
  });

  it('e.g. 2',() => {
    const deadends = ['8888'], target = '0009';
    expect(openLock(deadends, target)).toBe(1);
  });

  it('e.g. 3',() => {
    const deadends = ['8887','8889','8878','8898','8788','8988','7888','9888'], target = '8888';
    expect(openLock(deadends, target)).toBe(-1);
  });

  it('e.g. 4',() => {
    const deadends = ['0000'], target = '8888';
    expect(openLock(deadends, target)).toBe(-1);
  });

});
