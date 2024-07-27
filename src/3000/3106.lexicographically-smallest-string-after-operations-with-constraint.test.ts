function getSmallestString( s: string, k: number ): string {
    const minDistance = ( c: string ) => {
        const code = c.charCodeAt( 0 );
        return Math.min( code - 97, 123 - code );
    };

    const arr = s.split( '' );

    for ( let i = 0; i < s.length; i++ ) {
        const min = minDistance( arr[i] );

        if ( k < min ) {
            arr[i] = String.fromCharCode( arr[i].charCodeAt( 0 ) - k );
            break;
        }

        arr[i] = 'a';
        k -= min;
    }
    return arr.join( '' );
}

describe( '3106. Lexicographically Smallest String After Operations With Constraint', () => {
    it( 'x', () => {
        const s = 'y',
            k = 1;
        expect( getSmallestString( s, k ) ).toBe( 'x' );
    } );

    it( 'aaaz', () => {
        const s = 'zbbz',
            k = 3;
        expect( getSmallestString( s, k ) ).toBe( 'aaaz' );
    } );

    it( 'aawcd', () => {
        const s = 'xaxcd',
            k = 4;
        expect( getSmallestString( s, k ) ).toBe( 'aawcd' );
    } );

    it( 'lol', () => {
        const s = 'lol',
            k = 0;
        expect( getSmallestString( s, k ) ).toBe( 'lol' );
    } );
} );
