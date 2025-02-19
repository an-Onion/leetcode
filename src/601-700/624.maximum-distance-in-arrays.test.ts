function maxDistance( arrays: number[][] ): number {
    let ret = 0,
        min = arrays[0].at( -1 ),
        max = arrays[0].at( 0 );

    for ( const arr of arrays ) {
        ret = Math.max(
            ret,
            Math.abs( arr.at( -1 ) - min ),
            Math.abs( max - arr.at( 0 ) ),
        );
        min = Math.min( min, arr.at( 0 ) );
        max = Math.max( max, arr.at( -1 ) );
    }
    return ret;
}

describe( '624.maximum-distance-in-arrays', () => {
    it( 'case 1', () => {
        expect(
            maxDistance( [
                [1, 2, 3],
                [4, 5],
                [1, 2, 3],
            ] ),
        ).toEqual( 4 );
    } );

    it( 'case 2', () => {
        expect( maxDistance( [[1], [1]] ) ).toEqual( 0 );
    } );
} );
