import { numRescueBoats } from '../src/881.boats-to-save-people';

describe('Boats to Save People', () => {

  it('people = [1,2], limit = 3', () => {
    const people = [1,2], limit = 3;
    expect(numRescueBoats(people, limit)).toEqual(1);
  });

  it('people = [3,2,2,1], limit = 3', () => {
    const people = [3,2,2,1], limit = 3;
    expect(numRescueBoats(people, limit)).toEqual(3);
  });

  it('people = [3,5,3,4], limit = 5', () => {
    const people = [3,5,3,4], limit = 5;
    expect(numRescueBoats(people, limit)).toEqual(4);
  });

});

