function shiftingLetters( s: string, shifts: number[] ): string {
    const ret = [];

    let shift = 0;
    for ( let i = s.length - 1; i >= 0; i-- ) {
        shift = ( shift + shifts[i] ) % 26;
        ret.push( convert( s[i], shift ) );
    }

    return ret.reverse().join( '' );

    function convert( c: string, shift: number ) {
        const code = c.charCodeAt( 0 );
        const base = 97;
        return String.fromCharCode( ( ( code - base + shift ) % 26 ) + base );
    }
}

describe( '848. Shifting Letters', () => {
    it( 'example 1', () => {
        const s = 'abc',
            shifts = [3, 5, 9];
        expect( shiftingLetters( s, shifts ) ).toEqual( 'rpl' );
    } );

    it( 'example 2', () => {
        const s = 'aaa',
            shifts = [1, 2, 3];
        expect( shiftingLetters( s, shifts ) ).toEqual( 'gfd' );
    } );
} );
