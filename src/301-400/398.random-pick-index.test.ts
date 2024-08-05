export class Solution {
    map: Map<number, number[]>;
    constructor( nums: number[] ) {
        this.map = new Map();
        for ( let i = 0; i < nums.length; ++i ) {
            if ( !this.map.has( nums[i] ) ) {
                this.map.set( nums[i], [] );
            }
            this.map.get( nums[i] )!.push( i );
        }
    }

    pick( target: number ): number {
        const indices = this.map.get( target );
        return indices[Math.floor( Math.random() * indices.length )];
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

describe( '398. Random Pick Index', () => {
    it( 'should return correct result', () => {
        const solution = new Solution( [1, 2, 3, 3, 3] );
        expect( solution.pick( 3 ) ).toBeGreaterThanOrEqual( 2 );
        expect( solution.pick( 1 ) ).toBe( 0 );
        expect( solution.pick( 3 ) ).toBeLessThanOrEqual( 4 );
    } );
} );
