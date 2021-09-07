import { loudAndRich } from '../src/851.loud-and-rich';

describe('Loud and Rich', () => {

  it('e.g. 1', () => {
    const richer = [[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]], quiet = [3,2,5,4,6,1,7,0];
    expect(loudAndRich(richer, quiet)).toStrictEqual([5,5,2,5,4,5,6,7]);
  });


  it('e.g. 2', () => {
    const richer = [], quiet = [0];
    expect(loudAndRich(richer, quiet)).toStrictEqual([0]);
  });

});
