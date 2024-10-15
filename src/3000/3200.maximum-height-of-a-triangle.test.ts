function maxHeightOfTriangle( red: number, blue: number ): number {
    return Math.max( maxHeight( blue, red ), maxHeight( red, blue ) );

    function maxHeight( x: number, y: number ): number {
        const odd = 2 * Math.floor( Math.sqrt( x ) ) - 1;
        const even = 2 * Math.floor( ( -1 + Math.sqrt( 1 + 4 * y ) ) / 2 );
        return Math.min( odd, even ) + 1;
    }
}

describe( '3200. Maximum Height of a Triangle', () => {
    it( 'red = 1, blue = 1', () => {
        expect( maxHeightOfTriangle( 1, 1 ) ).toBe( 1 );
    } );

    it( 'red = 2, blue = 1', () => {
        expect( maxHeightOfTriangle( 2, 1 ) ).toBe( 2 );
    } );

    it( 'red = 2, blue = 4', () => {
        expect( maxHeightOfTriangle( 2, 4 ) ).toBe( 3 );
    } );
} );
