class NumMatrix {
    sums: number[][];

    constructor( matrix: number[][] ) {
        const m = matrix.length;
        const n = matrix[0].length;
        this.sums = Array.from( { length: m + 1 }, () => new Array<number>( n + 1 ).fill( 0 ) );

        for ( let i = 1; i <= m; i++ ) {
            for ( let j = 1; j <= n; j++ ) {
                this.sums[i][j] =
                    this.sums[i - 1][j] + this.sums[i][j - 1] - this.sums[i - 1][j - 1] + matrix[i - 1][j - 1];
            }
        }
    }

    sumRegion( row1: number, col1: number, row2: number, col2: number ): number {
        return (
            this.sums[row2 + 1][col2 + 1] -
            this.sums[row2 + 1][col1] -
            this.sums[row1][col2 + 1] +
            this.sums[row1][col1]
        );
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

describe( '304. Range Sum Query 2D - Immutable', () => {
    it( 'case 1', () => {
        const matrix = [[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]];
        const numMatrix = new NumMatrix( matrix );
        expect( numMatrix.sumRegion( 2, 1, 4, 3 ) ).toBe( 8 );
        expect( numMatrix.sumRegion( 1, 1, 2, 2 ) ).toBe( 11 );
        expect( numMatrix.sumRegion( 1, 2, 2, 4 ) ).toBe( 12 );
    } );
} );