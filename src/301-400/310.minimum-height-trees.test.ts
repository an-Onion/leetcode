function findMinHeightTrees( n: number, edges: number[][] ): number[] {

    if( n === 1 ) return [0];
    const graph = Array.from( { length: n }, () => new Set<number>() );

    for( const [a, b] of edges ){
        graph[a].add( b );
        graph[b].add( a );
    }

    const leaves = [];
    for( let i = 0; i < n; i++ ){
        if( graph[i].size === 1 ) leaves.push( i );
    }

    while( n > 2 ){
        let m = leaves.length;
        n -= m;

        while( m-- ){
            const node: number = leaves.shift()!;
            const neighbors = graph[node];
            for( const neighbor of neighbors ){
                graph[neighbor].delete( node );
                if( graph[neighbor].size === 1 ){
                    leaves.push( neighbor );
                }
            }
        }

    }
    return leaves;
}

describe( '310. minimum-height-trees', () => {
    it( 'case 1', () => {
        const n = 4, edges = [[1,0],[1,2],[1,3]];
        expect( findMinHeightTrees( n, edges ) ).toEqual( [1] );
    } );

    it( 'case 2', () => {
        const n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]];
        expect( findMinHeightTrees( n, edges ) ).toEqual( [3,4] );
    } );

    it( 'case 3', () => {
        const n = 1, edges = [];
        expect( findMinHeightTrees( n, edges ) ).toEqual( [0] );
    } );
} );