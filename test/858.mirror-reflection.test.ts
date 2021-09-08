import { mirrorReflection } from '../src/858.mirror-reflection';

describe('Mirror Reflection', () => {

  it('e.g. 1', () => {
    const p = 2, q = 1;
    expect(mirrorReflection(p, q)).toBe(2);
  });

  it('e.g. 2', () => {
    const p = 3, q = 1;
    expect(mirrorReflection(p, q)).toBe(1);
  });

  it('e.g. 3', () => {
    const p = 3, q = 2;
    expect(mirrorReflection(p, q)).toBe(0);
  });

});
