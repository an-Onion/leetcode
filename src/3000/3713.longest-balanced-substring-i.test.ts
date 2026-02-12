export function longestBalanced( s: string ): number {
    const n = s.length;
    let ret = 0;
    for ( let i = 0; i < n; i++ ) {
        const cnt = Array( 26 ).fill( 0 );
        let max = 0,
            diff = 0;
        for ( let j = i; j < n; j++ ) {
            const u = s.charCodeAt( j ) - 97;
            if ( cnt[u]++ === 0 ) diff++;
            max = Math.max( max, cnt[u] );
            if ( max * diff === j - i + 1 ) ret = Math.max( ret, j - i + 1 );
        }
    }
    return ret;
}

describe( '3713. longest-balanced-substring-i', () => {
    it( 'case 1', () => {
        expect( longestBalanced( 'abbac' ) ).toBe( 4 );
    } );

    it( 'case 2', () => {
        expect( longestBalanced( 'zzabccy' ) ).toBe( 4 );
    } );

    it( 'case 3', () => {
        expect( longestBalanced( 'aba' ) ).toBe( 2 );
    } );
} );
