function findMaxK( nums: number[] ): number {
    const set = new Set<number>();
    let ret = -1;

    for ( const num of nums ) {
        if ( set.has( -num ) ) {
            ret = Math.max( ret, Math.abs( num ) );
        }
        set.add( num );
    }

    return ret;
}

describe( '2441. Largest Positive Integer That Exists With Its Negative', () => {
    it( '[-1,2,-3,3]', () => {
        expect( findMaxK( [-1, 2, -3, 3] ) ).toBe( 3 );
    } );

    it( '[-1,10,6,7,-7,1]', () => {
        expect( findMaxK( [-1, 10, 6, 7, -7, 1] ) ).toBe( 7 );
    } );

    it( '[-10,8,6,7,-2,-3]', () => {
        expect( findMaxK( [-10, 8, 6, 7, -2, -3] ) ).toBe( -1 );
    } );
} );
