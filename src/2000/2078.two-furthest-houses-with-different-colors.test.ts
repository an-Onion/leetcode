export function maxDistance( colors: number[] ): number {
    const n = colors.length;

    let ret = 0;

    for ( let i = 0; i < n; i++ ) {
        if ( colors[i] !== colors[0] || colors[i] !== colors[n - 1] ) {
            ret = Math.max( ret, i, n - 1 - i );
        }
    }

    return ret;
}

describe( '2078. two-furthest-houses-with-different-colors', () => {
    it( 'case 1', () => {
        expect( maxDistance( [1, 1, 1, 6, 1, 1] ) ).toBe( 3 );
    } );

    it( 'case 2', () => {
        expect( maxDistance( [1, 8, 3, 8, 3] ) ).toBe( 4 );
    } );

    it( 'case 3', () => {
        expect( maxDistance( [0, 1] ) ).toBe( 1 );
    } );
} );
