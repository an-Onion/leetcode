function canPartitionGrid( grid: number[][] ): boolean {
    const m = grid.length,
        n = grid[0].length;
    const sum: number[][] = Array.from( { length: m + 1 }, () =>
        Array( n + 1 ).fill( 0 ),
    );
    let total = 0;
    for ( let i = 0; i < m; i++ ) {
        for ( let j = 0; j < n; j++ ) {
            sum[i + 1][j + 1] =
                sum[i + 1][j] + sum[i][j + 1] - sum[i][j] + grid[i][j];
            total += grid[i][j];
        }
    }
    for ( let i = 0; i < m - 1; i++ ) {
        if ( total === sum[i + 1][n] * 2 ) {
            return true;
        }
    }
    for ( let i = 0; i < n - 1; i++ ) {
        if ( total === sum[m][i + 1] * 2 ) {
            return true;
        }
    }
    return false;
}

describe( '3546. Equal Sum Grid Partition I', () => {
    it( 'case 1', () => {
        expect(
            canPartitionGrid( [
                [1, 4],
                [2, 3],
            ] ),
        ).toBeTruthy();
    } );

    it( 'case 2', () => {
        expect(
            canPartitionGrid( [
                [1, 3],
                [2, 4],
            ] ),
        ).toBeFalsy();
    } );
} );
