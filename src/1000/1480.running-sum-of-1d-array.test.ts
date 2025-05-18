function runningSum( nums: number[] ): number[] {
    const ret = [];
    for ( const num of nums ) {
        ret.push( num + ( ret.at( -1 ) ?? 0 ) );
    }

    return ret;
}

describe( '1480. Running Sum of 1D Array', () => {
    it( 'case 1', () => {
        expect( runningSum( [1, 2, 3, 4] ) ).toStrictEqual( [1, 3, 6, 10] );
    } );

    it( 'case 2', () => {
        expect( runningSum( [1, 1, 1, 1, 1] ) ).toStrictEqual( [1, 2, 3, 4, 5] );
    } );
} );
