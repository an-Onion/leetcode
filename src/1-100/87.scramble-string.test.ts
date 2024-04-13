function isScramble( s1: string, s2: string ): boolean {

    if( s1.length !== s2.length ) return false;
    const N = s1.length;
    // dp[i][j][len]
    const dp = Array.from( { length: N },() => Array.from( { length: N }, () => Array( N + 1 ).fill( false ) ) );

    for( let i = 0; i < N; i++ ){
        for( let j = 0; j < N; j++ ){
            dp[i][j][1] = s1[i] === s2[j];
        }
    }

    for( let len = 2; len <= N; len++ ){
        for( let i = 0; i <= N - len; i++ ){
            for( let j = 0; j <= N - len; j++ ){
                for( let k = 1; k < len; k++ ){
                    if( dp[i][j][k] && dp[i + k][j + k][len - k] ){
                        dp[i][j][len] = true;
                        break;
                    }
                    if( dp[i][j + len - k][k] && dp[i + k][j][len - k] )
                    {
                        dp[i][j][len] = true;
                        break;
                    }
                }
            }
        }
    }
    return dp[0][0][N];
}

describe( ' 87. Scramble string', () => {
    it( 'Test case 1', () => {
        const s1 = 'great', s2 = 'rgeat';
        expect( isScramble( s1, s2 ) ).toBe( true );
    } );

    it( 'Test case 2', () => {
        const s1 = 'abcde', s2 = 'caebd';
        expect( isScramble( s1, s2 ) ).toBe( false );
    } );

    it( 'Test case 3', () => {
        const s1 = 'a', s2 = 'a';
        expect( isScramble( s1, s2 ) ).toBe( true );
    } );
} );