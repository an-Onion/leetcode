import { computeArea } from '../src/223.rectangle-area';

describe('Rectangle Area', () => {

  it('-3, 0, 3, 4, 0, -1, 9, 2', () => {
    expect(computeArea(-3, 0, 3, 4, 0, -1, 9, 2)).toBe(45);
  });

  it('-2, -2, 2, 2, -2, -2, 2, 2', () => {
    expect(computeArea(-2, -2, 2, 2, -2, -2, 2, 2)).toBe(16);
  });

});
