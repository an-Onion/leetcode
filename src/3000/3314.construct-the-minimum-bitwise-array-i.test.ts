function minBitwiseArray( nums: number[] ): number[] {
    const ret: number[] = [];
    for ( const x of nums ) {
        let res = -1,
            d = 1;
        while ( ( x & d ) !== 0 ) {
            res = x - d;
            d <<= 1;
        }
        ret.push( res );
    }
    return ret;
}

describe( '3314. construct-the-minimum-bitwise-array-i', () => {
    it( 'case 1', () => {
        expect( minBitwiseArray( [2, 3, 5, 7] ) ).toEqual( [-1, 1, 4, 3] );
    } );

    it( 'case 2', () => {
        expect( minBitwiseArray( [11, 13, 31] ) ).toEqual( [9, 12, 15] );
    } );
} );
