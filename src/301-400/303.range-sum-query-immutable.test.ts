class NumArray {

    sum: number[];
    constructor( nums: number[] ) {

        this.sum = Array( nums.length+1 ).fill( 0 );

        for( let i = 0; i < nums.length; ++i ){
            this.sum[i+1] += this.sum[i] + nums[i];
        }
    }

    sumRange( left: number, right: number ): number {
        return this.sum[right+1] - this.sum[left];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

describe( '303. range-sum-query-immutable', () => {
    it( 'case 1', () => {
        const nums = [-2, 0, 3, -5, 2, -1];
        const obj = new NumArray( nums );
        expect( obj.sumRange( 0, 2 ) ).toBe( 1 );
        expect( obj.sumRange( 2, 5 ) ).toBe( -1 );
        expect( obj.sumRange( 0, 5 ) ).toBe( -3 );
    } );
} );