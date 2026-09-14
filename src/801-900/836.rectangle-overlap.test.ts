function isRectangleOverlap( rec1: number[], rec2: number[] ): boolean {
    return (
        Math.min( rec1[2], rec2[2] ) > Math.max( rec1[0], rec2[0] ) &&
        Math.min( rec1[3], rec2[3] ) > Math.max( rec1[1], rec2[1] )
    );
}

describe( '836. Rectangle Overlap', () => {
    it( 'case 1', () => {
        expect( isRectangleOverlap( [0, 0, 2, 2], [1, 1, 3, 3] ) ).toBe( true );
    } );

    it( 'case 2', () => {
        expect( isRectangleOverlap( [0, 0, 1, 1], [1, 0, 2, 1] ) ).toBe( false );
    } );

    it( 'case 3', () => {
        expect( isRectangleOverlap( [0, 0, 1, 1], [2, 2, 3, 3] ) ).toBe( false );
    } );
} );
