import { buildArray } from '../src/1441.build-an-array-with-stack-operations';

describe('Build an Array With Stack Operations', () => {

  it('target = [1,3], n = 3', () => {
    const target = [1,3];
    const n = 3;
    const output = ['Push','Push','Pop','Push'];

    expect(buildArray(target, n)).toStrictEqual(output);
  });

  it('target = [1,2,3], n = 3', () => {
    const target = [1,2,3];
    const n = 3;
    const output = ['Push','Push','Push'];

    expect(buildArray(target, n)).toStrictEqual(output);
  });

  it('target = [1,2], n = 4', () => {
    const target = [1,2];
    const n = 4;
    const output = ['Push','Push'];

    expect(buildArray(target, n)).toStrictEqual(output);
  });

  it('target = [2,3,4], n = 4', () => {
    const target = [2,3,4], n = 4;
    const output = ['Push','Pop','Push','Push','Push'];

    expect(buildArray(target, n)).toStrictEqual(output);
  });

});
