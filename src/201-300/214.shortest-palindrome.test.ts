function shortestPalindrome( s: string ): string {

    function KMP( t: string, p: string ) {

        const next = getNext( p );

        let i = 0, j = 0;

        while ( i < t.length ) {
            if( t[i] === p[j] ) {
                i++, j++;
                continue;
            }
            if ( j === 0 ) {
                i++; continue;
            }
            j = next[ j - 1 ];
        }

        return j;

        function getNext( p: string ) {
            const next = new Array( p.length ).fill( 0 );
            let i = 1, j = 0;
            while ( i < p.length ) {
                if ( p[ i ] === p[ j ] ) {
                    next[ i++ ] = ++j;
                    continue;
                } 
                if ( j === 0 ) {
                    i++; continue;
                }
                j = next[ j - 1 ];
            }
            return next;
        }
    }

    const t = s.split( '' ).reverse().join( '' );

    const prefix = KMP( t, s );

    const tail = s.substring( prefix );
    return tail.split( '' ).reverse().join( '' ) + s;
}

describe( '214. shortest-palindrome', () => {
    
    it( 'aacecaaa', () => {
        expect( shortestPalindrome( 'aacecaaa' ) ).toEqual( 'aaacecaaa' );
    } );

    it( 'abcd', () => {
        expect( shortestPalindrome( 'abcd' ) ).toEqual( 'dcbabcd' );
    } );

    it( 'a', () => {
        expect( shortestPalindrome( 'a' ) ).toEqual( 'a' );
    } );

} );