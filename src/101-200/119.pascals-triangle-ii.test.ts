function getRow( rowIndex: number ): number[] {
    const ret = Array( rowIndex + 1 ).fill( 1 );
    for ( let i = 1; i <= rowIndex; i++ ) {
        for ( let j = i - 1; j > 0; j-- ) {
            ret[j] = ret[j] + ret[j - 1];
        }
    }
    return ret;
}

describe( 'Pascal’s Triangle II', () => {
    it( '3', () => {
        expect( getRow( 3 ) ).toEqual( [1, 3, 3, 1] );
    } );

    it( '0', () => {
        expect( getRow( 0 ) ).toEqual( [1] );
    } );

    it( '3', () => {
        expect( getRow( 1 ) ).toEqual( [1, 1] );
    } );
} );
