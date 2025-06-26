function longestSubsequence( s: string, k: number ): number {
    let ret = 0,
        sum = 0;
    const N = s.length;
    const bits = Math.log2( k ) + 1;
    for ( let i = 0; i < s.length; ++i ) {
        if ( s[N - 1 - i] === '0' ) {
            ret++;
            continue;
        }
        if ( i < bits && sum + ( 1 << i ) <= k ) {
            ret++;
            sum += 1 << i;
        }
    }
    return ret;
}

describe( '2311. longest-binary-subsequence-less-than-or-equal-to-k', () => {
    it( 'case 1', () => {
        expect( longestSubsequence( '1001010', 5 ) ).toBe( 5 );
    } );
    it( 'case 2', () => {
        expect( longestSubsequence( '00101001', 1 ) ).toBe( 6 );
    } );

    it( 'case 3', () => {
        const s =
            '111100010000011101001110001111000000001011101111111110111000011111011000010101110100110110001111001001011001010011010000011111101001101000000101101001110110000111101011000101';
        const k = 11713332;
        expect( longestSubsequence( s, k ) ).toBe( 96 );
    } );
} );
