function isInterleave( s1: string, s2: string, s3: string ): boolean {

    if( s1.length + s2.length !== s3.length ) return false;

    const dp = Array( s2.length + 1 ).fill( false );

    dp[0] = true;


    for( let i = 0; i <= s1.length; i++ ){
     for( let j = 0; j <= s2.length; j++ ){
        const p = i + j - 1;
        if ( i > 0 ) {
            dp[j] &&= s1[i - 1]  == s3[p];
        }
        if ( j > 0 ) {
            dp[j] ||=  dp[j - 1] && s2[j - 1] == s3[p];
        }
     }
    }
    return dp[s2.length];
}

describe( '97. Interleaving String', () => {

    it( 'Test case 1', () => {
        expect( isInterleave( 'aabcc', 'dbbca', 'aadbbcbcac' ) ).toBe( true );
    } );

    it( 'Test case 2', () => {
        expect( isInterleave( 'aabcc', 'dbbca', 'aadbbbaccc' ) ).toBe( false );
    } );


    it( 'Test case 3', () => {
        expect( isInterleave( '', '', '' ) ).toBe( true );
    } );

    it( 'Test case 4', () => {
        expect( isInterleave( 'db', 'b', 'cbb' ) ).toBe( false );
    } );
} );