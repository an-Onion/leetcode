import { soupServings } from '../src/808.soup-servings';

describe('Soup Servings', () => {

  it('50', () => {
    expect(soupServings(50)).toBe(0.62500);
  });

  it('100', () => {
    expect(soupServings(100)).toBe(0.71875);
  });

});
