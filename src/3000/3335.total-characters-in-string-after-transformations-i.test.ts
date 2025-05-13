function lengthAfterTransformations( s: string, t: number ): number {
    const MOD = 1e9 + 7;
    const freq: number[] = new Array( 26 ).fill( 0 );
    for ( const ch of s ) {
        freq[ch.charCodeAt( 0 ) - 97]++;
    }
    while ( t-- ) {
        const t0 = freq[25];
        const t1 = ( freq[25] + freq[0] ) % MOD;
        for ( let i = 25; i > 1; i-- ) {
            freq[i] = freq[i - 1];
        }
        freq[0] = t0;
        freq[1] = t1;
    }
    return freq.reduce( ( a, b ) => ( a + b ) % MOD, 0 );
}

describe( '3335. total characters in string after transformations i', () => {
    it( 'case 1', () => {
        const s = 'abcyy',
            t = 2;
        expect( lengthAfterTransformations( s, t ) ).toEqual( 7 );
    } );

    it( 'case 2', () => {
        const s = 'azbk',
            t = 1;
        expect( lengthAfterTransformations( s, t ) ).toEqual( 5 );
    } );

    it( 'case 3', () => {
        const s = 'jqktcurgdvlibczdsvnsg',
            t = 7517;
        expect( lengthAfterTransformations( s, t ) ).toEqual( 79033769 );
    } );
} );
