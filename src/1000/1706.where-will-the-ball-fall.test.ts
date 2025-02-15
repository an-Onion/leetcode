function findBall( grid: number[][] ): number[] {
    const N = grid[0].length;
    const ret: number[] = [];

    ball: for ( let j = 0; j < N; j++ ) {
        let col = j;
        for ( const row of grid ) {
            const dir = row[col];
            col += dir;
            if ( col < 0 || col >= N || row[col] !== dir ) {
                ret.push( -1 );
                continue ball;
            }
        }
        ret.push( col );
    }
    return ret;
}

describe( '1706. Where Will the Ball Fall', () => {
    it( 'case 1', () => {
        const grid = [
            [1, 1, 1, -1, -1],
            [1, 1, 1, -1, -1],
            [-1, -1, -1, 1, 1],
            [1, 1, 1, 1, -1],
            [-1, -1, -1, -1, -1],
        ];
        expect( findBall( grid ) ).toStrictEqual( [1, -1, -1, -1, -1] );
    } );

    it( 'case 2', () => {
        const grid = [[-1]];
        expect( findBall( grid ) ).toStrictEqual( [-1] );
    } );

    it( 'case 3', () => {
        const grid = [
            [1, 1, 1, 1, 1, 1],
            [-1, -1, -1, -1, -1, -1],
            [1, 1, 1, 1, 1, 1],
            [-1, -1, -1, -1, -1, -1],
        ];
        expect( findBall( grid ) ).toStrictEqual( [0, 1, 2, 3, 4, -1] );
    } );
} );
