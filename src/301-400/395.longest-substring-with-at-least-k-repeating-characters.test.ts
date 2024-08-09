function longestSubstring( s: string, k: number ): number {
    const N = s.length;
    let ret = 0;

    for ( let i = 1; i <= 26; i++ ) {
        const cnt = new Array( 26 ).fill( 0 );
        let l = 0,
            r = 0;

        let total = 0,
            inValid = 0;

        while ( r < N ) {
            cnt[getCode( r )]++;
            if ( cnt[getCode( r )] === 1 ) {
                total++;
                inValid++; // invalid char
            }
            if ( cnt[getCode( r )] === k ) {
                inValid--; // valid char
            }

            while ( total > i ) {
                cnt[getCode( l )]--;
                if ( cnt[getCode( l )] === k - 1 ) {
                    inValid++; // invalid char
                }
                if ( cnt[getCode( l )] === 0 ) {
                    inValid--; // valid char
                    total--;
                }
                l++;
            }

            if ( inValid === 0 ) {
                ret = Math.max( ret, r - l + 1 );
            }

            r++;
        }
    }

    return ret;

    function getCode( idx: number ) {
        return s.charCodeAt( idx ) - 97;
    }
}

describe( '395. Longest Substring with At Least K Repeating Characters', () => {
    it( 'should return 5', () => {
        expect( longestSubstring( 'aaabb', 3 ) ).toEqual( 3 );
    } );
    it( 'should return 5', () => {
        expect( longestSubstring( 'ababbc', 2 ) ).toEqual( 5 );
    } );
} );
