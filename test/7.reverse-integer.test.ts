import { reverse }  from '../src/7.reverse-integer';

describe('Reverse Integer', () => {
  it('reverse 123', () => {
    expect(reverse(123)).toBe(321);
  });


  it('reverse -123', () => {
    expect(reverse(-123)).toBe(-321);
  });
});
