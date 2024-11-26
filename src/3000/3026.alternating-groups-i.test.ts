function numberOfAlternatingGroups( colors: number[] ): number {
    const L = colors.length;
    let ret = 0;

    const getColor = ( i: number ) => colors[( i + L ) % L];

    for ( let i = 0; i < L; ++i ) {
        if ( getColor( i - 1 ) === getColor( i ) || getColor( i + 1 ) === getColor( i ) )
            continue;
        ret++;
    }

    return ret;
}

describe( '3026. alternating-groups-i', () => {
    it( 'case 1', () => {
        expect( numberOfAlternatingGroups( [1, 1, 1] ) ).toBe( 0 );
    } );

    it( 'case 1', () => {
        expect( numberOfAlternatingGroups( [0, 1, 0, 0, 1] ) ).toBe( 3 );
    } );
} );
