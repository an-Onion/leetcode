function generate( numRows: number ): number[][] {
    const ret: number[][] = [];
    for ( let i = 0; i < numRows; i++ ) {
        ret.push( new Array( i + 1 ).fill( 1 ) );
        for ( let j = 1; j < i; j++ ) {
            ret[i][j] = ret[i - 1][j - 1] + ret[i - 1][j];
        }
    }
    return ret;
}

describe( 'Pascal\'s Triangle', () => {
    it( 'case 1', () => {
        expect( generate( 5 ) ).toStrictEqual( [
            [1],
            [1, 1],
            [1, 2, 1],
            [1, 3, 3, 1],
            [1, 4, 6, 4, 1],
        ] );
    } );

    it( 'case 2', () => {
        expect( generate( 1 ) ).toStrictEqual( [[1]] );
    } );

    it( 'case 3', () => {
        expect( generate( 2 ) ).toStrictEqual( [[1], [1, 1]] );
    } );
} );
