function maxProductPath( grid: number[][] ): number {
    const MOD = 1000000007;
    const m = grid.length,
        n = grid[0].length;

    const maxProd: number[][] = new Array( m )
        .fill( 0 )
        .map( () => new Array( n ).fill( 0 ) );
    const minProd: number[][] = new Array( m )
        .fill( 0 )
        .map( () => new Array( n ).fill( 0 ) );

    maxProd[0][0] = minProd[0][0] = grid[0][0];
    for ( let i = 1; i < n; i++ ) {
        maxProd[0][i] = minProd[0][i] = maxProd[0][i - 1] * grid[0][i];
    }
    for ( let i = 1; i < m; i++ ) {
        maxProd[i][0] = minProd[i][0] = maxProd[i - 1][0] * grid[i][0];
    }
    for ( let i = 1; i < m; i++ ) {
        for ( let j = 1; j < n; j++ ) {
            if ( grid[i][j] >= 0 ) {
                maxProd[i][j] =
                    Math.max( maxProd[i][j - 1], maxProd[i - 1][j] ) * grid[i][j];
                minProd[i][j] =
                    Math.min( minProd[i][j - 1], minProd[i - 1][j] ) * grid[i][j];
            } else {
                maxProd[i][j] =
                    Math.min( minProd[i][j - 1], minProd[i - 1][j] ) * grid[i][j];
                minProd[i][j] =
                    Math.max( maxProd[i][j - 1], maxProd[i - 1][j] ) * grid[i][j];
            }
        }
    }

    const result = maxProd[m - 1][n - 1] % MOD;
    if ( result < 0 ) {
        return -1;
    }
    return result;
}

describe( '1594. Maximum Non-Negative Product in a Matrix', () => {
    it( 'case 1', () => {
        const grid = [
            [-1, -2, -3],
            [-2, -3, -3],
            [-3, -3, -2],
        ];
        expect( maxProductPath( grid ) ).toBe( -1 );
    } );

    it( 'case 2', () => {
        const grid = [
            [1, -2, 1],
            [1, -2, 1],
            [3, -4, 1],
        ];
        expect( maxProductPath( grid ) ).toBe( 8 );
    } );

    it( 'case 3', () => {
        const grid = [
            [1, 3],
            [0, -4],
        ];
        expect( maxProductPath( grid ) ).toEqual( -0 );
    } );
} );
