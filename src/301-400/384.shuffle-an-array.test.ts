
export class Solution {
    original: number[];
    constructor( nums: number[] ) {
      this.original = nums;
    }

    reset(): number[] {
      return this.original;
    }

    shuffle(): number[] {

      const nums = this.original.slice();
      for( let i = 0; i < nums.length; i++ ){
        const rand = Math.floor( Math.random() * ( nums.length - i ) ) + i;
        [nums[i], nums[rand]] = [nums[rand], nums[i]];
      }
      return nums;
    }
  }

describe( '384.shuffle-an-array', () => {
    it( 'should work', () => {
        const solution = new Solution( [1,2,3] );
        solution.shuffle();
        expect( solution.reset() ).toEqual( [1,2,3] );
    } );
} );