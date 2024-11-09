class NeighborSum {
    adj: number[] = [];
    dia: number[] = [];

    constructor( grid: number[][] ) {
        const N = grid.length;
        this.adj = new Array( N * N ).fill( 0 );
        this.dia = new Array( N * N ).fill( 0 );

        const Grid = ( i: number, j: number ) => grid[i]?.[j] ?? 0;

        for ( let i = 0; i < N; i++ ) {
            for ( let j = 0; j < N; j++ ) {
                const val = grid[i][j];
                this.adj[val] =
                    Grid( i - 1, j ) +
                    Grid( i + 1, j ) +
                    Grid( i, j - 1 ) +
                    Grid( i, j + 1 );
                this.dia[val] =
                    Grid( i - 1, j - 1 ) +
                    Grid( i - 1, j + 1 ) +
                    Grid( i + 1, j - 1 ) +
                    Grid( i + 1, j + 1 );
            }
        }
    }

    adjacentSum( value: number ): number {
        return this.adj[value];
    }

    diagonalSum( value: number ): number {
        return this.dia[value];
    }
}

/**
 * Your NeighborSum object will be instantiated and called as such:
 * var obj = new NeighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */

describe( '3242.design-neighbor-sum-service', () => {
    it( 'case 1', () => {
        const grid = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
        ];
        const obj = new NeighborSum( grid );
        expect( obj.adjacentSum( 1 ) ).toBe( 6 );
        expect( obj.adjacentSum( 4 ) ).toBe( 16 );
        expect( obj.diagonalSum( 4 ) ).toBe( 16 );
        expect( obj.diagonalSum( 8 ) ).toBe( 4 );
    } );

    it( 'case 2', () => {
        const grid = [
            [1, 2, 0, 3],
            [4, 7, 15, 6],
            [8, 9, 10, 11],
            [12, 13, 14, 5],
        ];
        const obj = new NeighborSum( grid );
        expect( obj.adjacentSum( 15 ) ).toBe( 23 );
        expect( obj.diagonalSum( 9 ) ).toBe( 45 );
    } );
} );
