function countGoodNodes( edges: number[][] ): number {
    const N = edges.length + 1;
    const graph = Array.from( { length: N }, () => [] );

    for ( const [x, y] of edges ) {
        graph[x].push( y );
        graph[y].push( x );
    }
    let res = 0;
    DFS( 0, -1 );
    return res;

    function DFS( node: number, parent: number ): number {
        let valid = true;
        let treeSize = 0,
            subTreeSize = 0;

        for ( const child of graph[node] ) {
            if ( child === parent ) continue;
            const size = DFS( child, node );
            subTreeSize ||= size;
            if ( subTreeSize !== size ) {
                valid = false;
            }
            treeSize += size;
        }

        if ( valid ) res++;
        return treeSize + 1;
    }
}

describe( '3249. Count the Number of Good Nodes', () => {
    it( 'case 1', () => {
        expect(
            countGoodNodes( [
                [0, 1],
                [0, 2],
                [1, 3],
                [1, 4],
                [2, 5],
                [2, 6],
            ] ),
        ).toBe( 7 );
    } );

    it( 'case 2', () => {
        expect(
            countGoodNodes( [
                [0, 1],
                [1, 2],
                [2, 3],
                [3, 4],
                [0, 5],
                [1, 6],
                [2, 7],
                [3, 8],
            ] ),
        ).toBe( 6 );
    } );

    it( 'case 3', () => {
        expect(
            countGoodNodes( [
                [0, 1],
                [1, 2],
                [1, 3],
                [1, 4],
                [0, 5],
                [5, 6],
                [6, 7],
                [7, 8],
                [0, 9],
                [9, 10],
                [9, 12],
                [10, 11],
            ] ),
        ).toBe( 12 );
    } );
} );
