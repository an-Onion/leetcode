function uniquePaths( m: number, n: number ): number {
    let ret = 1;

    for ( let x = n, y = 1; y < m; x++, y++ ) {
        ret = ( ret * x ) / y;
    }

    return ret;
}

describe( '62. Unique Paths', () => {
    it( 'm = 3, n = 7', () => {
        expect( uniquePaths( 3, 7 ) ).toBe( 28 );
    } );

    it( 'm = 3, n = 2', () => {
        expect( uniquePaths( 3, 2 ) ).toBe( 3 );
    } );
} );
