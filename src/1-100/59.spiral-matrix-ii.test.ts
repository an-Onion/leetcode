function generateMatrix( n: number ): number[][] {
    const matrix: number[][] = Array.from( { length: n }, () =>
        Array( n ).fill( 0 ),
    );

    let [top, right, bottom, left] = [0, n - 1, n - 1, 0];

    let count = 1;

    while ( count <= n * n ) {
        for ( let i = left; i <= right; i++ ) {
            matrix[top][i] = count++;
        }
        top++;

        for ( let i = top; i <= bottom; i++ ) {
            matrix[i][right] = count++;
        }
        right--;

        for ( let i = right; i >= left; i-- ) {
            matrix[bottom][i] = count++;
        }
        bottom--;

        for ( let i = bottom; i >= top; i-- ) {
            matrix[i][left] = count++;
        }
        left++;
    }

    return matrix;
}

describe( 'Spiral Matrix II', () => {
    it( '1', () => {
        expect( generateMatrix( 1 ) ).toStrictEqual( [[1]] );
    } );

    it( '2', () => {
        expect( generateMatrix( 2 ) ).toStrictEqual( [
            [1, 2],
            [4, 3],
        ] );
    } );

    it( '3', () => {
        expect( generateMatrix( 3 ) ).toStrictEqual( [
            [1, 2, 3],
            [8, 9, 4],
            [7, 6, 5],
        ] );
    } );
} );
