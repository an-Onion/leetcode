function maxDifference( s: string ): number {
    const map = Array( 26 ).fill( 0 );
    for ( let i = 0; i < s.length; i++ ) {
        map[s.charCodeAt( i ) - 97] += 1;
    }
    let a1 = 1,
        a2 = 1000;

    for ( let i = 0; i < 26; i++ ) {
        if ( map[i] === 0 ) {
            continue;
        }
        if ( map[i] % 2 === 1 ) {
            a1 = Math.max( a1, map[i] );
            continue;
        }
        a2 = Math.min( a2, map[i] );
    }

    return a1 - a2;
}

describe( '3442. maximum difference between even and odd frequency i', () => {
    it( 'case 1', () => {
        expect( maxDifference( 'aaaaabbc' ) ).toBe( 3 );
    } );
    it( 'case 2', () => {
        expect( maxDifference( 'abcabcab' ) ).toBe( 1 );
    } );
} );
