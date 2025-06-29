function numSubseq( nums: number[], target: number ): number {
    const mod = 1e9 + 7;
    let ret = 0;
    nums.sort( ( a, b ) => a - b );

    // Precompute powers of 2 modulo mod
    const pow2 = new Array( nums.length ).fill( 1 );
    for ( let i = 1; i < nums.length; i++ ) {
        pow2[i] = ( pow2[i - 1] * 2 ) % mod;
    }

    let left = 0,
        right = nums.length - 1;

    while ( left <= right ) {
        if ( nums[left] + nums[right] <= target ) {
            ret = ( ret + pow2[right - left] ) % mod;
            left++;
        } else {
            right--;
        }
    }

    return ret;
}

describe( '1498. number-of-subsequences-that-satisfy-the-given-sum-condition', () => {
    it( 'case 1', () => {
        const nums = [3, 5, 6, 7],
            target = 9;
        expect( numSubseq( nums, target ) ).toBe( 4 );
    } );

    it( 'case 2', () => {
        const nums = [3, 3, 6, 8],
            target = 10;
        expect( numSubseq( nums, target ) ).toBe( 6 );
    } );

    it( 'case 3', () => {
        const nums = [2, 3, 3, 4, 6, 7],
            target = 12;
        expect( numSubseq( nums, target ) ).toBe( 61 );
    } );

    it( 'case 4', () => {
        const nums = [
                9, 25, 9, 28, 24, 12, 17, 8, 28, 7, 21, 25, 10, 2, 16, 19, 12,
                13, 15, 28, 14, 12, 24, 9, 6, 7, 2, 15, 19, 13, 30, 30, 23, 19,
                11, 3, 17, 2, 14, 20, 22, 30, 12, 1, 11, 2, 2, 20, 20, 27, 15,
                9, 10, 4, 12, 30, 13, 5, 2, 11, 29, 5, 3, 13, 22, 5, 16, 19, 7,
                19, 11, 16, 11, 25, 29, 21, 29, 3, 2, 9, 20, 15, 9,
            ],
            target = 32;
        expect( numSubseq( nums, target ) ).toBe( 91931447 );
    } );
} );
