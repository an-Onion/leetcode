function minimumMoves( grid: number[][] ): number {
    const from = [],
        to = [];

    for ( let i = 0; i < grid.length; i++ ) {
        for ( let j = 0; j < grid[i].length; j++ ) {
            if ( grid[i][j] === 0 ) {
                to.push( [i, j] );
                continue;
            }
            if ( grid[i][j] > 1 ) {
                for ( let k = 2; k <= grid[i][j]; k++ ) {
                    from.push( [i, j] );
                }
            }
        }
    }

    let ret = Infinity;

    for ( const perm of permute( from ) ) {
        let total = 0;
        for ( let i = 0; i < perm.length; i++ ) {
            total +=
                Math.abs( perm[i][0] - to[i][0] ) +
                Math.abs( perm[i][1] - to[i][1] );
        }
        ret = Math.min( ret, total );
    }

    return ret;

    function permute( arr: number[][] ) {
        const ret: number[][][] = [];
        function perm( start: number ) {
            if ( start === arr.length ) {
                ret.push( [...arr] );
                return;
            }
            for ( let i = start; i < arr.length; i++ ) {
                if (
                    i !== start &&
                    arr[i][0] === arr[start][0] &&
                    arr[i][1] === arr[start][1]
                )
                    continue;
                [arr[start], arr[i]] = [arr[i], arr[start]];
                perm( start + 1 );
                [arr[start], arr[i]] = [arr[i], arr[start]];
            }
        }
        perm( 0 );
        return ret;
    }
}

describe( '2850. Minimum Moves to Spread Stones Over Grid', () => {
    it( 'e.g. 1', () => {
        const grid = [
            [1, 1, 0],
            [1, 1, 1],
            [1, 2, 1],
        ];
        expect( minimumMoves( grid ) ).toBe( 3 );
    } );

    it( 'e.g. 2', () => {
        const grid = [
            [1, 3, 0],
            [1, 0, 0],
            [1, 0, 3],
        ];
        expect( minimumMoves( grid ) ).toBe( 4 );
    } );
} );
