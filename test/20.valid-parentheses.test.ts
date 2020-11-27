import { isValid } from '../src/20.valid-parentheses';

describe('Valid Parentheses', () => {
  it('()', () => {
    expect(isValid('()')).toBeTruthy();
  });


  it('()[]{}', () => {
    expect(isValid('()[]{}')).toBeTruthy();
  });

  it('(]', () => {
    expect(isValid('(]')).toBeFalsy();
  });


  it('([)]', () => {
    expect(isValid('([)]')).toBeFalsy();
  });

  it('{[]}', () => {
    expect(isValid('{[]}')).toBeTruthy();
  });

});

