import { fib } from '../src/509.fibonacci-number';

describe('Fibonacci Number', () => {
  it('2', () => {
    expect(fib(2)).toBe(1);
  });

  it('3', () => {
    expect(fib(3)).toBe(2);
  });

  it('4', () => {
    expect(fib(4)).toBe(3);
  });
});
