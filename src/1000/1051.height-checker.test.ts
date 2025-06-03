function heightChecker( heights: number[] ): number {
    const cnt = Array( 101 ).fill( 0 );

    for ( const h of heights ) {
        cnt[h]++;
    }

    let idx = 0,
        ret = 0;

    for ( let i = 1; i < 101; i++ ) {
        for ( let j = 1; j <= cnt[i]; j++ ) {
            if ( heights[idx++] !== i ) {
                ret++;
            }
        }
    }
    return ret;
}

describe( '1051. Height Checker', () => {
    it( 'case 1', () => {
        expect( heightChecker( [1, 1, 4, 2, 1, 3] ) ).toBe( 3 );
    } );

    it( 'case 2', () => {
        expect( heightChecker( [5, 1, 2, 3, 4] ) ).toBe( 5 );
    } );
    it( 'case 3', () => {
        expect( heightChecker( [1, 2, 3, 4, 5] ) ).toBe( 0 );
    } );
} );
