function findClosest( x: number, y: number, z: number ): number {
    if ( Math.abs( x - z ) === Math.abs( y - z ) ) {
        return 0;
    }

    return Math.abs( x - z ) > Math.abs( y - z ) ? 2 : 1;
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
