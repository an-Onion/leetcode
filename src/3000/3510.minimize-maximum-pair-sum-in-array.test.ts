function minPairSum( nums: number[] ): number {
    nums.sort( ( a, b ) => a - b );
    let ret = 0;
    for ( let i = 0; i < nums.length / 2; ++i ) {
        ret = Math.max( ret, nums.at( i ) + nums.at( -i - 1 )! );
    }
    return ret;
}

describe( '3510.minimize-maximum-pair-sum-in-array', () => {
    it( 'case 1', () => {
        const nums = [3, 5, 2, 3];
        expect( minPairSum( nums ) ).toBe( 7 );
    } );

    it( 'case 2', () => {
        const nums = [3, 5, 4, 2, 4, 6];
        expect( minPairSum( nums ) ).toBe( 8 );
    } );
} );
