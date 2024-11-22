function nonSpecialCount( l: number, r: number ): number {
    const N = Math.sqrt( r ) | 0;
    const prime = Array( N + 1 ).fill( true );

    let ret = r - l + 1;
    for ( let i = 2; i <= N; ++i ) {
        if ( !prime[i] ) continue;
        if ( i * i >= l && i * i <= r ) ret--;
        for ( let j = i * 2; j <= N; j += i ) {
            prime[j] = false;
        }
    }
    return ret;
}

describe( '3233.find-the-count-of-numbers-which-are-not-special', () => {
    it( 'case 1', () => {
        expect( nonSpecialCount( 5, 7 ) ).toBe( 3 );
    } );

    it( 'case 2', () => {
        expect( nonSpecialCount( 4, 16 ) ).toBe( 11 );
    } );
} );
