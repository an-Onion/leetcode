function squareIsWhite( coordinates: string ): boolean {
    return (
        ( coordinates.charCodeAt( 0 ) - 96 + coordinates.charCodeAt( 1 ) - 49 ) %
            2 ===
        0
    );
}

describe( '1812. determine-color-of-a-chessboard-square', () => {
    it( 'case 1', () => {
        expect( squareIsWhite( 'a1' ) ).toBeFalsy();
    } );
    it( 'case 2', () => {
        expect( squareIsWhite( 'h3' ) ).toBeTruthy();
    } );
} );
