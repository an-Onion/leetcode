function minimumSubstringsInPartition( s: string ): number {
    const dp = Array( s.length + 1 ).fill( Infinity );

    dp[0] = 0;
    for ( let i = 1; i <= s.length; i++ ) {
        const map = new Map<string, number>();
        let maxCount = 0;

        for ( let j = i; j >= 1; j-- ) {
            const char = s[j - 1];
            const count = map.get( char ) ?? 0;
            map.set( char, count + 1 );
            maxCount = Math.max( maxCount, count + 1 );
            if ( maxCount * map.size === i - j + 1 && dp[j - 1] !== Infinity ) {
                dp[i] = Math.min( dp[i], dp[j - 1] + 1 );
            }
        }
    }

    return dp.at( -1 );
}

describe( '3144. minimum-substring-partition-of-equal-character-frequency', () => {
    it( 'should return 2', () => {
        expect( minimumSubstringsInPartition( 'abababaccddb' ) ).toBe( 2 );
    } );
    it( 'should return 3', () => {
        expect( minimumSubstringsInPartition( 'fabccddg' ) ).toBe( 3 );
    } );
} );
