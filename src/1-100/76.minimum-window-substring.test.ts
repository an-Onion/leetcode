function minWindow( s: string, t: string ): string {

    const target: number[] = Array( 128 ).fill( 0 );
    const window: number[] = Array( 128 ).fill( 0 );

    for( let i = 0; i < t.length; i++ ){
        target[t.charCodeAt( i )]++;
    }

    let start=0, length = 0;

    let res = '';

    for( let i = 0; i < s.length; i++ ){
        const c = s.charCodeAt( i );
        window[c]++;

        if( target[c] >= window[c] ) length++;

        if ( length < t.length ) continue;
            
        for( let j = start; j <= i; j++ ) {
            const b = s.charCodeAt( j );
            if( window[b] <= target[b] ) break;
            window[b]--;
            start++;
        }

        if( !res || i - start + 1 < res.length ){
            res = s.substring( start, i + 1 );
        }
    }
    return res;
}

describe( '76. Minimum Window Substring', () => {
    it( 's = "CODEBANC", t = "ABC"', () => {
        expect( minWindow( 'CODEBANC', 'ABC' ) ).toBe( 'BANC' );
    } );

    it( 's = "ADOBECODEBANC", t = "ABC"', () => {
        expect( minWindow( 'ADOBECODEBANC', 'ABC' ) ).toBe( 'BANC' );
    } );

    it( 's = "a", t = "a"', () => {
        expect( minWindow( 'a', 'a' ) ).toBe( 'a' );
    } );

    it( 's = "a", t = "aa"', () => {
        expect( minWindow( 'a', 'aa' ) ).toBe( '' );
    } );
} );