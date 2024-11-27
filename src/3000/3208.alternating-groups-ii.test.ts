function numberOfAlternatingGroups( colors: number[], k: number ): number {
    const N = colors.length;
    let ret = 0,
        cnt = 1;

    const Colors = ( idx: number ) => colors[( idx + N ) % N];

    for ( let i = 2 - k; i < N; i++ ) {
        cnt = Colors( i ) === Colors( i - 1 ) ? 1 : cnt + 1;
        if ( cnt >= k ) ret++;
    }

    return ret;
}

describe( '3208.alternating-groups-ii', () => {
    it( 'case 1', () => {
        const colors = [0, 1, 0, 1, 0],
            k = 3;
        expect( numberOfAlternatingGroups( colors, k ) ).toBe( 3 );
    } );

    it( 'case 2', () => {
        const colors = [0, 1, 0, 0, 1, 0, 1],
            k = 6;
        expect( numberOfAlternatingGroups( colors, k ) ).toBe( 2 );
    } );

    it( 'case 3', () => {
        const colors = [1, 1, 0, 1],
            k = 4;
        expect( numberOfAlternatingGroups( colors, k ) ).toBe( 0 );
    } );

    it( 'case 4', () => {
        const colors = [0, 1, 0, 1, 0],
            k = 3;
        expect( numberOfAlternatingGroups( colors, k ) ).toBe( 3 );
    } );

    it( 'case 5', () => {
        const colors = [0, 0, 1],
            k = 3;
        expect( numberOfAlternatingGroups( colors, k ) ).toBe( 1 );
    } );
} );
