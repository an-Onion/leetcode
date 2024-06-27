function firstUniqChar( s: string ): number {
    const map = Array( 26 ).fill( 0 );

    for ( let i = 0; i < s.length; ++i ) {
        const code = s.charCodeAt( i ) - 97;
        map[code]++;
    }

    for ( let i = 0; i < s.length; ++i ) {
        const code = s.charCodeAt( i ) - 97;
        if ( map[code] === 1 ) return i;
    }

    return -1;
}

describe( '387. first-unique-character-in-a-string', () => {
    it( 'leetcode', () => {
        expect( firstUniqChar( 'leetcode' ) ).toEqual( 0 );
    } );
} );
