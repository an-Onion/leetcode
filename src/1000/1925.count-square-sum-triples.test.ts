function countTriples( n: number ): number {
    let ret = 0;

    for ( let a = 1; a <= n; a++ ) {
        for ( let b = 1; b <= n; b++ ) {
            const c = Math.floor( Math.sqrt( a * a + b * b + 1 ) );
            if ( c <= n && c * c === a * a + b * b ) {
                ret++;
            }
        }
    }
    return ret;
}

describe( '1925. count-square-sum-triples', () => {
    it( 'case 1', () => {
        expect( countTriples( 5 ) ).toBe( 2 );
    } );

    it( 'case 2', () => {
        expect( countTriples( 10 ) ).toBe( 4 );
    } );
} );
