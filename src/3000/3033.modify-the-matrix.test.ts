function modifiedMatrix( matrix: number[][] ): number[][] {
    const [M, N] = [matrix.length, matrix[0].length];

    const answer = Array.from( { length: M }, () => Array( N ).fill( Infinity ) );

    for ( let j = 0; j < N; j++ ) {
        let max = -1;
        for ( let i = 0; i < M; i++ ) {
            max = Math.max( max, matrix[i][j] );
        }
        for ( let i = 0; i < M; i++ ) {
            if ( matrix[i][j] === -1 ) {
                answer[i][j] = max;
                continue;
            }
            answer[i][j] = matrix[i][j];
        }
    }

    return answer;
}

describe( '3033. Modify the Matrix', () => {
    it( 'example 1', () => {
        expect(
            modifiedMatrix( [
                [1, 2, -1],
                [4, -1, 6],
                [7, 8, 9],
            ] ),
        ).toStrictEqual( [
            [1, 2, 9],
            [4, 8, 6],
            [7, 8, 9],
        ] );
    } );

    it( 'example 2', () => {
        expect(
            modifiedMatrix( [
                [3, -1],
                [5, 2],
            ] ),
        ).toStrictEqual( [
            [3, 2],
            [5, 2],
        ] );
    } );
} );
