function findTheDifference( s: string, t: string ): string {
    let ret = 0;
    for ( let i = 0; i < t.length; i++ ) {
        ret += t.charCodeAt( i );
    }
    for ( let i = 0; i < s.length; i++ ) {
        ret -= s.charCodeAt( i );
    }
    return String.fromCharCode( ret );
}

describe( '389. find the difference', () => {
    it( 'case 1', () => {
        const s = 'abcd',
            t = 'abcde';
        expect( findTheDifference( s, t ) ).toEqual( 'e' );
    } );

    it( 'case 2', () => {
        const s = '',
            t = 'y';
        expect( findTheDifference( s, t ) ).toEqual( 'y' );
    } );
} );
