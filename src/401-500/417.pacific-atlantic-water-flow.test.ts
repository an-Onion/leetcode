function pacificAtlantic( heights: number[][] ): number[][] {
    const M = heights.length,
        N = heights[0].length;
    const pacific = Array.from( { length: M }, () => Array( N ).fill( 0 ) );

    for ( let i = 0; i < M; i++ ) {
        DFS( i, 0, 1 );
        DFS( i, N - 1, 2 );
    }

    for ( let j = 0; j < N; j++ ) {
        DFS( 0, j, 1 );
        DFS( M - 1, j, 2 );
    }

    const result: number[][] = [];

    for ( let i = 0; i < M; i++ ) {
        for ( let j = 0; j < N; j++ ) {
            if ( pacific[i][j] === 3 ) {
                result.push( [i, j] );
            }
        }
    }

    return result;

    function DFS( i: number, j: number, water: number ) {
        if ( i < 0 || j < 0 || i >= M || j >= N ) return;
        if ( ( water | pacific[i][j] ) === pacific[i][j] ) return;

        pacific[i][j] |= water;
        if ( heights[i][j] <= heights[i + 1]?.[j] ) DFS( i + 1, j, water );
        if ( heights[i][j] <= heights[i - 1]?.[j] ) DFS( i - 1, j, water );
        if ( heights[i][j] <= heights[i]?.[j + 1] ) DFS( i, j + 1, water );
        if ( heights[i][j] <= heights[i]?.[j - 1] ) DFS( i, j - 1, water );
    }
}

describe( '417. Pacific Atlantic Water Flow', () => {
    it( 'e.g. 1', () => {
        const heights = [
            [1, 2, 2, 3, 5],
            [3, 2, 3, 4, 4],
            [2, 4, 5, 3, 1],
            [6, 7, 1, 4, 5],
            [5, 1, 1, 2, 4],
        ];
        expect( pacificAtlantic( heights ) ).toEqual( [
            [0, 4],
            [1, 3],
            [1, 4],
            [2, 2],
            [3, 0],
            [3, 1],
            [4, 0],
        ] );
    } );

    it( 'e.g. 2', () => {
        const heights = [[1]];
        expect( pacificAtlantic( heights ) ).toEqual( [[0, 0]] );
    } );
} );
