function partition( s: string ): string[][] {
    const dp = Array.from( { length: s.length }, () =>
        Array( s.length ).fill( false ),
    );

    for ( let len = 0; len < s.length; len++ ) {
        for ( let i = 0; i < s.length - len; i++ ) {
            const j = i + len;
            if ( s[i] !== s[j] ) continue;
            dp[i][j] = DP( i + 1, j - 1 );
        }
    }

    return DFS( 0, [] );

    function DFS( start: number, path: string[] ) {
        if ( start === s.length ) {
            return [[...path]];
        }
        const ret: Array<string[]> = [];
        for ( let i = start; i < s.length; i++ ) {
            if ( !dp[start][i] ) continue;
            ret.push( ...DFS( i + 1, [...path, s.substring( start, i + 1 )] ) );
        }
        return ret;
    }

    function DP( i: number, j: number ) {
        return i >= j ? true : dp[i][j];
    }
}

describe( '131. partition', () => {
    it( 'aab', () => {
        expect( partition( 'aab' ).sort() ).toEqual(
            [
                ['aa', 'b'],
                ['a', 'a', 'b'],
            ].sort(),
        );
    } );

    it( 'aa', () => {
        expect( partition( 'aa' ) ).toEqual( [['a', 'a'], ['aa']] );
    } );

    it( 'a', () => {
        expect( partition( 'a' ) ).toEqual( [['a']] );
    } );
} );
