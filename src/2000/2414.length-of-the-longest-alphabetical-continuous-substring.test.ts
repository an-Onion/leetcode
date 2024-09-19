function longestContinuousSubstring( s: string ): number {
    let [sofar, ret] = [1, 1];
    for ( let i = 1; i < s.length; ++i ) {
        if ( s.charCodeAt( i ) - s.charCodeAt( i - 1 ) !== 1 ) {
            sofar = 1;
            continue;
        }
        ret = Math.max( ret, ++sofar );
    }
    return ret;
}

describe( '2414. Length of the Longest Alphabetical Continuous Substring', () => {
    it( 'abacaba', () => {
        expect( longestContinuousSubstring( 'abacaba' ) ).toBe( 2 );
    } );

    it( 'abcde', () => {
        expect( longestContinuousSubstring( 'abcde' ) ).toBe( 5 );
    } );
} );
