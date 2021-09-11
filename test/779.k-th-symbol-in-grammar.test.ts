import { kthGrammar } from '../src/779.k-th-symbol-in-grammar';

describe('K-th Symbol in Grammar', () => {

  it('e.g. 1', () => {
    const n = 1, k = 1;
    expect(kthGrammar(n,k)).toBe(0);
  });

  it('e.g. 2', () => {
    const n = 2, k = 1;
    expect(kthGrammar(n,k)).toBe(0);
  });

  it('e.g. 3', () => {
    const n = 2, k = 2;
    expect(kthGrammar(n,k)).toBe(1);
  });

  it('e.g. 4', () => {
    const n = 3, k = 1;
    expect(kthGrammar(n,k)).toBe(0);
  });
});
