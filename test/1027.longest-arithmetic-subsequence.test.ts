import { longestArithSeqLength } from '../src/1027.longest-arithmetic-subsequence';

describe('Longest Arithmetic Subsequence', () => {

  it('[3,6,9,12]', ()=>{
    expect(longestArithSeqLength([3,6,9,12])).toBe(4);
  });

  it('[9,4,7,2,10]', ()=>{
    expect(longestArithSeqLength([9,4,7,2,10])).toBe(3);
  });

  it('[20,1,15,3,10,5,8]', ()=>{
    expect(longestArithSeqLength([20,1,15,3,10,5,8])).toBe(4);
  });

});
