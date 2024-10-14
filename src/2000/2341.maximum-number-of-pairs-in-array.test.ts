function numberOfPairs( nums: number[] ): number[] {
    const counts = Array( 101 ).fill( 0 );
    for ( const num of nums ) {
        counts[num]++;
    }
    let remaining = 0;
    for ( const count of counts ) {
        if ( count % 2 === 0 ) continue;
        remaining++;
    }
    return [( nums.length - remaining ) >> 1, remaining];
}

describe( '2341.maximum-number-of-pairs-in-array', () => {
    it( 'e.g. 1', () => {
        expect( numberOfPairs( [1, 3, 2, 1, 3, 2, 2] ) ).toEqual( [3, 1] );
    } );

    it( 'e.g. 2', () => {
        expect( numberOfPairs( [1, 1] ) ).toEqual( [1, 0] );
    } );

    it( 'e.g. 3', () => {
        expect( numberOfPairs( [0] ) ).toEqual( [0, 1] );
    } );
} );
