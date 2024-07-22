function maximumDetonation( bombs: number[][] ): number {
    const N = bombs.length;
    const graph: Array<Set<number>> = Array.from(
        { length: N },
        () => new Set<number>(),
    );

    for ( let i = 0; i < N; i++ ) {
        const [xi, yi, ri] = bombs[i];

        for ( let j = 0; j < N; ++j ) {
            const [xj, yj] = bombs[j];
            if ( ( xi - xj ) ** 2 + ( yi - yj ) ** 2 <= ri ** 2 ) {
                graph[i].add( j );
            }
        }
    }

    for ( let v = 0; v < N; v++ ) {
        const dest = graph[v];
        for ( let u = 0; u < N; u++ ) {
            if ( !graph[u].has( v ) ) continue;

            dest.forEach( ( w ) => graph[u].add( w ) );
        }
    }
    let ans = 0;

    for ( const set of graph ) {
        ans = Math.max( ans, set.size );
    }
    return ans;
}

describe( '2101. Detonate the Maximum Bombs', () => {
    it( 'example 1', () => {
        expect(
            maximumDetonation( [
                [2, 1, 3],
                [6, 1, 4],
            ] ),
        ).toBe( 2 );
    } );

    it( 'example 2', () => {
        expect(
            maximumDetonation( [
                [1, 1, 5],
                [10, 10, 5],
            ] ),
        ).toBe( 1 );
    } );

    it( 'example 3', () => {
        expect(
            maximumDetonation( [
                [1, 2, 3],
                [2, 3, 1],
                [3, 4, 2],
                [4, 5, 3],
                [5, 6, 4],
            ] ),
        ).toBe( 5 );
    } );
} );
