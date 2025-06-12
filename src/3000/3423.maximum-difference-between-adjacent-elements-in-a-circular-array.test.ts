function maxAdjacentDistance( nums: number[] ): number {
    let ret = 0;
    for ( let i = 0; i < nums.length; ++i ) {
        ret = Math.max( ret, Math.abs( nums[i] - nums.at( i - 1 ) ) );
    }
    return ret;
}

describe( '3423. Maximum Difference Between Adjacent Elements in a Circular Array', () => {
    it( 'case 1', () => {
        expect( maxAdjacentDistance( [1, 2, 4] ) ).toBe( 3 );
    } );
    it( 'case 2', () => {
        expect( maxAdjacentDistance( [-5, -10, -5] ) ).toBe( 5 );
    } );
} );
