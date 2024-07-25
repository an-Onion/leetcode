function kthSmallest( matrix: number[][], k: number ): number {
    const N = matrix.length;

    function count( up: number ) {
        let ret = 0;
        let i = N - 1,
            j = 0;

        while ( i >= 0 && j < N ) {
            if ( matrix[i][j] <= up ) {
                ret += i + 1;
                j++;
            } else {
                i--;
            }
        }
        return ret;
    }

    let l = matrix[0][0],
        u = matrix[N - 1][N - 1];

    while ( l <= u ) {
        const m = Math.floor( ( l + u ) / 2 );
        if ( count( m ) < k ) {
            l = m + 1;
        } else {
            u = m - 1;
        }
    }
    return l;
}

describe( '378. Kth Smallest Element in a Sorted Matrix', () => {
    it( 'e.g. 1', () => {
        expect(
            kthSmallest(
                [
                    [1, 5, 9],
                    [10, 11, 13],
                    [12, 13, 15],
                ],
                8,
            ),
        ).toBe( 13 );
    } );

    it( 'e.g. 2', () => {
        expect( kthSmallest( [[-5]], 1 ) ).toBe( -5 );
    } );
} );
