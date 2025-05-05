function shortestToChar( s: string, c: string ): number[] {
    const N = s.length;
    const answer = Array( N ).fill( 0 );
    let idx = -Infinity;
    for ( let i = 0; i < N; ++i ) {
        if ( s[i] === c ) {
            idx = i;
        }
        answer[i] = i - idx;
    }
    idx = Infinity;

    for ( let i = N - 1; i >= 0; --i ) {
        if ( s[i] === c ) {
            idx = i;
        }
        answer[i] = Math.min( answer[i], idx - i );
    }
    return answer;
}

describe( '821.shortest-distance-to-a-character', () => {
    it( 'case 1', () => {
        expect( shortestToChar( 'loveleetcode', 'e' ) ).toEqual( [
            3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0,
        ] );
    } );

    it( 'case 2', () => {
        expect( shortestToChar( 'aaab', 'b' ) ).toEqual( [3, 2, 1, 0] );
    } );
} );
