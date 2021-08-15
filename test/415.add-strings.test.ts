import { addStrings } from '../src/415.add-strings';

describe('Add Strings', () => {

  it('11 + 123', () => {
    const num1 = '11', num2 = '123';
    expect(addStrings(num1, num2)).toBe('134');
  });

  it('0 + 0', () => {
    const num1 = '0', num2 = '0';
    expect(addStrings(num1, num2)).toBe('0');
  });

  it('456 + 77', () => {
    const num1 = '456', num2 = '77';
    expect(addStrings(num1, num2)).toBe('533');
  });

});

