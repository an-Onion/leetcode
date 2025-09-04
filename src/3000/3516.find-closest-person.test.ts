function findClosest( x: number, y: number, z: number ): number {
    const a = Math.abs( x - z ),
        b = Math.abs( y - z );
    if ( a === b ) {
        return 0;
    }
    return a > b ? 2 : 1;
}

describe( '3516. find-closest-person', () => {
    it( 'case 1', () => {
        expect( findClosest( 2, 7, 4 ) ).toBe( 1 );
    } );

    it( 'case 2', () => {
        expect( findClosest( 2, 5, 6 ) ).toBe( 2 );
    } );

    it( 'case 3', () => {
        expect( findClosest( 1, 5, 3 ) ).toBe( 0 );
    } );
} );
