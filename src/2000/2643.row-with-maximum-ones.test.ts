function rowAndMaximumOnes( mat: number[][] ): number[] {
    let maxCount = 0,
        maxIdx = 0;
    for ( let i = 0; i < mat.length; i++ ) {
        const count = mat[i].reduce( ( acc, cur ) => acc + cur, 0 );
        if ( count > maxCount ) {
            maxCount = count;
            maxIdx = i;
        }
    }
    return [maxIdx, maxCount];
}

describe( '2643. row-with-maximum-ones', () => {
    it( 'case 1', () => {
        const mat = [
            [0, 1],
            [1, 0],
        ];
        expect( rowAndMaximumOnes( mat ) ).toEqual( [0, 1] );
    } );

    it( 'case 2', () => {
        const mat = [
            [0, 0, 0],
            [0, 1, 1],
        ];
        expect( rowAndMaximumOnes( mat ) ).toEqual( [1, 2] );
    } );
} );
