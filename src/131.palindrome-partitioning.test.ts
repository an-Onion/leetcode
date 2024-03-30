function partition( s: string ): string[][] {

    const dp = Array.from( Array( s.length ), () => Array( s.length ).fill( false ) );

    function DP ( i, j ){
        if( i >= j ) return true;
        return dp[i][j];
    }

    for( let len = 0; len < s.length; len++ ) {
        for( let i = 0; i < s.length - len; i++ ) {
            const j = i + len;
            if( s[i] !== s[j] ) continue;
            dp[i][j] = DP( i + 1, j - 1 );
        }
    }

    const ret: Array<string[]> = [];

    function DFS( start: number, path: string[] ){
        if( start === s.length ) {
            return ret.push( [...path] );
        }
        for( let i = start; i < s.length; i++ ) {
            if( dp[start][i] ){
                DFS( i + 1, [...path, s.substring( start, i + 1 )] );
            }
        }
    }
    DFS( 0, [] );

    return ret;
}

describe( '131. partition', () => {
    it( 'aab', () => {
        expect( partition( 'aab' ).sort() ).toEqual( [ [ 'aa', 'b' ], [ 'a', 'a', 'b' ] ].sort() );
    } );

    it( 'a', () => {
        expect( partition( 'a' ) ).toEqual( [ [ 'a' ] ] );
    } );
} );