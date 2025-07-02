function oddCells( m: number, n: number, indices: number[][] ): number {
    const rows = Array( m ).fill( 0 );
    const cols = Array( n ).fill( 0 );

    for ( const [r, c] of indices ) {
        rows[r]++;
        cols[c]++;
    }

    let oddX = 0;
    for ( let i = 0; i < m; ++i ) {
        oddX += rows[i] & 1;
    }
    let oddY = 0;

    for ( let j = 0; j < n; ++j ) {
        oddY += cols[j] & 1;
    }
    return oddX * ( n - oddY ) + oddY * ( m - oddX );
}

describe( '1252. Cells with Odd Values in a Matrix', () => {
    it( 'case 1', () => {
        expect(
            oddCells( 2, 3, [
                [0, 1],
                [1, 1],
            ] ),
        ).toBe( 6 );
    } );
    it( 'case 2', () => {
        expect(
            oddCells( 2, 2, [
                [1, 1],
                [0, 0],
            ] ),
        ).toBe( 0 );
    } );
} );
