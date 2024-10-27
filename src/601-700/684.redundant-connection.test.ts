/*
 * @lc app=leetcode id=684 lang=typescript
 *
 * [684] Redundant Connection
 */

// @lc code=start
function findRedundantConnection( edges: number[][] ): number[] {
    const N = edges.length;

    const parent = Array( N + 1 ).fill( 0 );

    for ( const [x, y] of edges ) {
        const x0 = find( x ),
            y0 = find( y );
        if ( x0 === y0 ) return [x, y];
        parent[x0] = y0;
    }

    return [];

    function find( idx: number ) {
        if ( parent[idx] === 0 ) return idx;
        return find( parent[idx] );
    }
}
// @lc code=end

describe( 'Redundant Connection', () => {
    it( 'e.g. 1', () => {
        const edges = [
            [1, 2],
            [1, 3],
            [2, 3],
        ];
        expect( findRedundantConnection( edges ) ).toStrictEqual( [2, 3] );
    } );

    it( 'e.g. 2', () => {
        const edges = [
            [1, 2],
            [2, 3],
            [3, 4],
            [1, 4],
            [1, 5],
        ];
        expect( findRedundantConnection( edges ) ).toStrictEqual( [1, 4] );
    } );
} );
