function largestSubmatrix( matrix: number[][] ): number {
    const n = matrix[0].length;
    const heights = new Array( n ).fill( 0 );
    const idx = new Array( n ).fill( 0 ).map( ( _, i ) => i );
    const nonZeros = new Array( n ).fill( 0 );
    let ans = 0;

    for ( const row of matrix ) {
        let p = 0,
            q = 0;
        for ( const j of idx ) {
            if ( row[j] === 0 ) {
                heights[j] = 0;
                idx[p++] = j;
            } else {
                heights[j]++;
                nonZeros[q++] = j;
            }
        }

        for ( let i = p; i < n; i++ ) {
            idx[i] = nonZeros[i - p];
            ans = Math.max( ans, ( n - i ) * heights[idx[i]] );
        }
    }

    return ans;
}

describe( '1727. Largest Submatrix With Rearrangements', () => {
    it( 'case 1', () => {
        const matrix = [
            [0, 0, 1],
            [1, 1, 1],
            [1, 0, 1],
        ];
        expect( largestSubmatrix( matrix ) ).toBe( 4 );
    } );

    it( 'case 2', () => {
        const matrix = [[1, 0, 1, 0, 1]];
        expect( largestSubmatrix( matrix ) ).toBe( 3 );
    } );

    it( 'case 3', () => {
        const matrix = [
            [1, 1, 0],
            [1, 0, 1],
        ];
        expect( largestSubmatrix( matrix ) ).toBe( 2 );
    } );

    it( 'case 4', () => {
        const matrix = [
            [0, 0],
            [0, 0],
        ];
        expect( largestSubmatrix( matrix ) ).toBe( 0 );
    } );
} );
