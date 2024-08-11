import * as testCase from '../largeData/132.json';

function minCut( s: string ) {
    const N = s.length;
    const dp = Array.from( { length: N }, () => new Array( N ).fill( true ) );

    for ( let i = N - 1; i >= 0; --i ) {
        for ( let j = i + 1; j < N; ++j ) {
            dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
        }
    }

    const ret = new Array( N ).fill( Infinity );

    for ( let i = 0; i < N; ++i ) {
        if ( dp[0][i] ) {
            ret[i] = 0;
            continue;
        }
        for ( let j = 0; j < i; ++j ) {
            if ( !dp[j + 1][i] ) continue;
            ret[i] = Math.min( ret[i], ret[j] + 1 );
        }
    }

    return ret[N - 1];
}

describe( '132. palindrome-partitioning-ii', () => {
    it( 'aab', () => {
        expect( minCut( 'aab' ) ).toBe( 1 );
    } );

    it( 'a', () => {
        expect( minCut( 'a' ) ).toBe( 0 );
    } );

    it( 'ab', () => {
        expect( minCut( 'ab' ) ).toBe( 1 );
    } );

    it( 'aabaccdb', () => {
        expect( minCut( 'aabaccdb' ) ).toBe( 4 );
    } );

    it( 'large 1', () => {
        const input = testCase[0];
        expect( minCut( input ) ).toBe( 1345 );
    } );
} );
