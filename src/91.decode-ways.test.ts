function numDecodings( s: string ): number {
    if( s[0] === '0' ) return 0;

    const dp = new Array( s.length ).fill( 0 );
    dp[0] = 1;

    for( let i = 1; i < s.length; i++ ){
        if( s[i] !== '0' ){
            dp[i] = dp[i - 1];
        }
        const digit = parseInt( s.substring( i - 1, i+1 ) );

        if( digit >= 10 && digit <= 26 ){
            dp[i] += dp[i-2] ?? 1;
        }
    }
    return dp[s.length - 1];
}

describe( '91. Decode ways', () => {
    it( '12', () => {
        expect( numDecodings( '12' ) ).toEqual( 2 );    
    } );

    it( '226', () => {
        expect( numDecodings( '226' ) ).toEqual( 3 );
    } );

    it( '0', () => {
        expect( numDecodings( '0' ) ).toEqual( 0 );
    } );

    it( '06', () => {
        expect( numDecodings( '06' ) ).toEqual( 0 );
    } );
} );