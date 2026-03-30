function checkStrings( s1: string, s2: string ): boolean {
    const count = new Int32Array( 256 );

    for ( let i = 0; i < s1.length; i++ ) {
        const offset = ( i & 1 ) << 7;
        count[s1.charCodeAt( i ) + offset]++;
        count[s2.charCodeAt( i ) + offset]--;
    }

    for ( let i = 0; i < 256; i++ ) {
        if ( count[i] !== 0 ) {
            return false;
        }
    }

    return true;
}

describe( '2840. Check if Strings Can be Made Equal with Operations II', () => {
    it( 'case 1', () => {
        expect( checkStrings( 'abcdba', 'cabdab' ) ).toBe( true );
    } );

    it( 'case 2', () => {
        expect( checkStrings( 'abe', 'bea' ) ).toBe( false );
    } );
} );
