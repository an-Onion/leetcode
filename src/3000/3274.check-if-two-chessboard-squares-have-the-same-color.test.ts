function checkTwoChessboards(
    coordinate1: string,
    coordinate2: string,
): boolean {
    return (
        ( coordinate1.charCodeAt( 0 ) +
            coordinate1.charCodeAt( 1 ) -
            coordinate2.charCodeAt( 0 ) -
            coordinate2.charCodeAt( 1 ) ) %
            2 ===
        0
    );
}

describe( '3274', () => {
    it( 'case 1', () => {
        expect( checkTwoChessboards( 'a1', 'c3' ) ).toBe( true );
    } );
    it( 'case 2', () => {
        expect( checkTwoChessboards( 'a1', 'h3' ) ).toBe( false );
    } );
} );
