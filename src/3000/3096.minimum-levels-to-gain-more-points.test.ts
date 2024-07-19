function minimumLevels( possible: number[] ): number {
    const sum = possible.reduce( ( acc, v ) => acc + ( v ? 1 : -1 ), 0 );


    let sofar = 0;
    for ( let i = 0; i < possible.length - 1; i++ ) {
        const v = possible[i] ? 1 : -1;
        if ( sofar + v > sum / 2 ) return i + 1;
        sofar += v;
    }

    return -1;
}

describe( '3096. Minimum Levels to Gain More Points', () => {
    it( 'should return 1', () => {
        expect( minimumLevels( [1, 0, 1, 0] ) ).toBe( 1 );
    } );

    it( 'should return 3', () => {
        expect( minimumLevels( [1, 1, 1, 1, 1] ) ).toBe( 3 );
    } );

    it( 'should return -1', () => {
        expect( minimumLevels( [0, 0] ) ).toBe( -1 );
    } );


    it( '[1,1]', () => {
        expect( minimumLevels( [1, 1] ) ).toBe( -1 );
    } );
} );
