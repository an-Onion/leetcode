function longestIncreasingPath( matrix: number[][] ): number {
    const M = matrix.length,
        N = matrix[0].length;
    const dirs = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    const isValid = ( i: number, j: number ) =>
        i >= 0 && i < M && j >= 0 && j < N;

    const inDegree = Array.from( { length: M }, () => Array( N ).fill( 0 ) );

    const Q: Array<[number, number]> = [];

    for ( let i = 0; i < M; i++ ) {
        for ( let j = 0; j < N; j++ ) {
            for ( const [x, y] of dirs ) {
                if ( !isValid( i + x, j + y ) ) continue;
                if ( matrix[i][j] > matrix[i + x][j + y] ) {
                    inDegree[i][j]++;
                }
            }
            if( inDegree[i][j] === 0 ) {
                Q.push( [i, j] );
            }
        }
    }

    let ans = 0;
    while( Q.length ){
        const L = Q.length;
        for ( let k = 0; k < L; k++ ) {
            const [i, j] = Q.shift()!;
            for ( const [x, y] of dirs ) {
                if( !isValid( i + x, j + y ) ) continue;
                if( matrix[i][j] >= matrix[i + x][j + y] ) continue;
                if( --inDegree[i + x][j + y] === 0 ) {
                    Q.push( [i + x, j + y] );
                }

            }
        }
        ans++;
    }
    return ans;
}

describe( '329. longest-increasing-path-in-a-matrix', () => {
    it( 'case 1', () => {
        const matrix = [
            [9, 9, 4],
            [6, 6, 8],
            [2, 1, 1],
        ];
        expect( longestIncreasingPath( matrix ) ).toBe( 4 );
    } );

    it( 'case 2', () => {
        const matrix = [
            [3, 4, 5],
            [3, 2, 6],
            [2, 2, 1],
        ];
        expect( longestIncreasingPath( matrix ) ).toBe( 4 );
    } );

    it( 'case 3', () => {
        const matrix = [[1]];
        expect( longestIncreasingPath( matrix ) ).toBe( 1 );
    } );
} );
