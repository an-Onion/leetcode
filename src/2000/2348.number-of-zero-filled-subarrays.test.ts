function zeroFilledSubarray( nums: number[] ): number {
    let ret = 0,
        last = -1;

    for ( let i = 0; i < nums.length; i++ ) {
        if ( nums[i] !== 0 ) {
            last = i;
            continue;
        }
        ret += i - last;
    }
    return ret;
}

describe( '2348. number-of-zero-filled-subarrays', () => {
    it( 'case 1', () => {
        expect( zeroFilledSubarray( [1, 3, 0, 0, 2, 0, 0, 4] ) ).toBe( 6 );
    } );

    it( 'case 2', () => {
        expect( zeroFilledSubarray( [0, 0, 0, 2, 0, 0] ) ).toBe( 9 );
    } );

    it( 'case 3', () => {
        expect( zeroFilledSubarray( [2, 10, 2019] ) ).toBe( 0 );
    } );
} );
