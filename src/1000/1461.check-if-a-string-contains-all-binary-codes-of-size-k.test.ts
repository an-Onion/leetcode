function hasAllCodes( s: string, k: number ): boolean {
    let num = parseInt( s.substring( 0, k ), 2 );
    const set = new Set<number>( [num] );
    const offset = ( 1 << k ) - 1;
    for ( let i = 0; i + k <= s.length; ++i ) {
        num = ( ( num << 1 ) & offset ) | parseInt( s[i + k - 1], 2 );
        set.add( num );
    }
    return set.size === 1 << k;
}

describe( '1461. check-if-a-string-contains-all-binary-codes-of-size-k', () => {
    it( 'case 1', () => {
        expect( hasAllCodes( '00110110', 2 ) ).toBe( true );
    } );

    it( 'case 2', () => {
        expect( hasAllCodes( '0110', 1 ) ).toBe( true );
    } );

    it( 'case 3', () => {
        expect( hasAllCodes( '0110', 2 ) ).toBe( false );
    } );
} );
