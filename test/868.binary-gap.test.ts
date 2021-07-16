import { binaryGap } from '../src/868.binary-gap';

describe('Binary Gap', () => {

  it('22', () => {
    expect(binaryGap(22)).toBe(2);
  });

  it('5', () => {
    expect(binaryGap(5)).toBe(2);
  });

  it('6', () => {
    expect(binaryGap(6)).toBe(1);
  });

  it('8', () => {
    expect(binaryGap(8)).toBe(0);
  });

  it('1', () => {
    expect(binaryGap(1)).toBe(0);
  });

});
