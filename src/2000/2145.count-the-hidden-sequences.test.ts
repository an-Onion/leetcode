function numberOfArrays(
    differences: number[],
    lower: number,
    upper: number,
): number {
    let l = lower,
        u = upper,
        sum = 0;
    for ( const diff of differences ) {
        sum += diff;
        l = Math.max( l, lower - sum );
        u = Math.min( u, upper - sum );
        if ( l > u ) {
            return 0;
        }
    }
    return u - l + 1;
}

describe( '2145. Count the Hidden Sequences', () => {
    it( 'case 1', () => {
        expect( numberOfArrays( [1, -3, 4], 1, 6 ) ).toBe( 2 );
    } );

    it( 'case 2', () => {
        expect( numberOfArrays( [3, -4, 5, 1, -2], -4, 5 ) ).toBe( 4 );
    } );

    it( 'case 3', () => {
        expect( numberOfArrays( [4, -7, 2], 3, 6 ) ).toBe( 0 );
    } );
} );
