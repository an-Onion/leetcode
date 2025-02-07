function spiralOrder( matrix: number[][] ): number[] {
    const M = matrix.length,
        N = matrix[0].length;

    const ret: number[] = [];

    let [top, right, bottom, left] = [0, N - 1, M - 1, 0];

    while ( left <= right && top <= bottom ) {
        for ( let i = left; i <= right; i++ ) {
            ret.push( matrix[top][i] );
        }

        for ( let i = top + 1; i <= bottom; i++ ) {
            ret.push( matrix[i][right] );
        }

        if ( left < right && top < bottom ) {
            for ( let i = right - 1; i > left; i-- ) {
                ret.push( matrix[bottom][i] );
            }

            for ( let i = bottom; i > top; i-- ) {
                ret.push( matrix[i][left] );
            }
        }

        top++, right--, bottom--, left++;
    }
    return ret;
}

describe( '54. Spiral Matrix', () => {
    it( '[[1]]', () => {
        expect( spiralOrder( [[1]] ) ).toStrictEqual( [1] );
    } );

    it( '[[1,2],[3,4]]', () => {
        expect(
            spiralOrder( [
                [1, 2],
                [3, 4],
            ] ),
        ).toStrictEqual( [1, 2, 4, 3] );
    } );

    it( '[[1,2,3],[4,5,6],[7,8,9]]', () => {
        expect(
            spiralOrder( [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ] ),
        ).toStrictEqual( [1, 2, 3, 6, 9, 8, 7, 4, 5] );
    } );

    it( '[[1,2,3,4],[5,6,7,8],[9,10,11,12]]', () => {
        expect(
            spiralOrder( [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12],
            ] ),
        ).toStrictEqual( [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7] );
    } );

    it( '[[2,5],[8,4],[0,-1]]', () => {
        expect(
            spiralOrder( [
                [2, 5],
                [8, 4],
                [0, -1],
            ] ),
        ).toStrictEqual( [2, 5, 4, -1, 0, 8] );
    } );
} );
