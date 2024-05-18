function getHint( secret: string, guess: string ): string {

    const s = Array( 10 ).fill( 0 );
    const t = Array( 10 ).fill( 0 );
    let bulls = 0, cows = 0;

    for ( let i = 0; i < secret.length; i++ ) {
        if ( secret[i] === guess[i] ) {
            bulls++; continue;
        }
        s[+secret[i]]++;
        t[+guess[i]]++;
    }

    for ( let i = 0; i < 10; i++ ) {
        cows += Math.min( s[i], t[i] );
    }

    return `${bulls}A${cows}B`;
}

describe( '299. bulls and cows', () => {

    it( 'case 1', () => {
        expect( getHint( '1807', '7810' ) ).toEqual( '1A3B' );
    } );

    it( 'case 2', () => {
        expect( getHint( '1123', '0111' ) ).toEqual( '1A1B' );
    } );

    it( 'case 3', () => {
        expect( getHint( '1122', '1222' ) ).toEqual( '3A0B' );
    } );
} );