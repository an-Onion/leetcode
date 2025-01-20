function findClosestNumber( nums: number[] ): number {
    let ret = nums[0];
    for ( const num of nums ) {
        if ( Math.abs( num ) > Math.abs( ret ) ) continue;

        if ( Math.abs( num ) < Math.abs( ret ) ) {
            ret = num;
            continue;
        }

        // ( Math.abs( num ) === Math.abs( ret )
        ret = Math.max( ret, num );
    }
    return ret;
}

describe( '2239. Find the Closest Number', () => {
    it( 'case 1', () => {
        expect( findClosestNumber( [-4, -2, 1, 4, 8] ) ).toBe( 1 );
    } );

    it( 'case 2', () => {
        expect( findClosestNumber( [2, -1, 1] ) ).toBe( 1 );
    } );
} );
