function sumIndicesWithKSetBits( nums: number[], k: number ): number {
    let res = 0;
    for ( let i = 0; i < nums.length; ++i ) {
        if ( getSetBits( i ) === k ) {
            res += nums[i];
        }
    }
    return res;

    function getSetBits( n: number ): number {
        let count = 0;
        while ( n ) {
            n &= n - 1;
            count++;
        }
        return count;
    }
}

describe( '2859. Sum of Values at Indices With K Set Bits', () => {
    it( 'case 1', () => {
        const nums = [5, 10, 1, 5, 2],
            k = 1;
        const res = sumIndicesWithKSetBits( nums, k );
        expect( res ).toBe( 13 );
    } );

    it( 'case 2', () => {
        const nums = [4, 3, 2, 1],
            k = 2;
        const res = sumIndicesWithKSetBits( nums, k );
        expect( res ).toBe( 1 );
    } );
} );
