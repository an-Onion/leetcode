function robotWithString( s: string ): string {
    const n = s.length;
    const sufMin: string[] = Array( n );
    sufMin[n - 1] = String.fromCharCode( 'z'.charCodeAt( 0 ) + 1 );

    for ( let i = n - 2; i >= 0; i-- ) {
        sufMin[i] = s[i + 1] < sufMin[i + 1] ? s[i + 1] : sufMin[i + 1];
    }

    const ret: string[] = [];
    const stack: string[] = [];

    for ( let i = 0; i < n; i++ ) {
        stack.push( s[i] );
        while ( sufMin[i] >= stack.at( -1 ) ) {
            ret.push( stack.pop()! );
        }
    }

    while ( stack.length ) {
        ret.push( stack.pop()! );
    }

    return ret.join( '' );
}

describe( '2334. using a robot to print the lexicographically smallest string', () => {
    it( 'case 1', () => {
        expect( robotWithString( 'zza' ) ).toBe( 'azz' );
    } );
    it( 'case 2', () => {
        expect( robotWithString( 'bac' ) ).toBe( 'abc' );
    } );
    it( 'case 3', () => {
        expect( robotWithString( 'bdda' ) ).toBe( 'addb' );
    } );
} );
