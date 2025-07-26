function reverseDegree( s: string ): number {
    let ret = 0;

    for ( let i = 0; i < s.length; i++ ) {
        ret += ( i + 1 ) * getReversedIndex( s[i] );
    }

    return ret;

    function getReversedIndex( c: string ) {
        const v = c.charCodeAt( 0 ) - 96;
        return 27 - v;
    }
}

describe( '3498. reverse-degree-of-a-string', () => {
    it( 'case 1', () => {
        expect( reverseDegree( 'abc' ) ).toBe( 148 );
    } );

    it( 'case 2', () => {
        expect( reverseDegree( 'zaza' ) ).toBe( 160 );
    } );
} );
