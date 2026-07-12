function arrayRankTransform( arr: number[] ): number[] {
    const sorted = arr.toSorted( ( a, b ) => a - b );

    const rankMap = new Map();
    for ( let i = 0; i < sorted.length; i++ ) {
        if ( !rankMap.has( sorted[i] ) ) {
            rankMap.set( sorted[i], rankMap.size + 1 );
        }
    }

    return arr.map( ( num ) => rankMap.get( num )! );
}

describe( '1331. Array Rank Transform', () => {
    it( 'case 1', () => {
        expect( arrayRankTransform( [40, 10, 20, 30] ) ).toEqual( [4, 1, 2, 3] );
    } );

    it( 'case 2', () => {
        expect( arrayRankTransform( [100, 100, 100, 100] ) ).toEqual( [1, 1, 1, 1] );
    } );

    it( 'case 3', () => {
        expect( arrayRankTransform( [37, 12, 28, 9, 100, 56, 80, 5, 12] ) ).toEqual(
            [5, 3, 4, 2, 8, 6, 7, 1, 3],
        );
    } );
} );
