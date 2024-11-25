function networkDelayTime( times: number[][], n: number, k: number ): number {
    const graph = Array.from( { length: n }, () => [] );

    for ( const [u, v, w] of times ) {
        graph[u - 1].push( [v - 1, w] );
    }
    const cost = Array( n ).fill( Infinity );
    const visited = Array( n ).fill( false );
    let u = k - 1;
    cost[u] = 0;
    for ( let i = 0; i < n; ++i ) {
        visited[u] = true;
        for ( const [v, w] of graph[u] ) {
            if ( visited[v] ) continue;
            cost[v] = Math.min( cost[v], cost[u] + w );
        }
        let min = Infinity;
        for ( let i = 0; i < n; ++i ) {
            if ( visited[i] ) continue;
            if ( min > cost[i] ) {
                ( min = cost[i] ), ( u = i );
            }
        }
        if ( min === Infinity ) break;
    }
    const max = Math.max( ...cost );
    return max === Infinity ? -1 : max;
}

describe( '743. network delay time', () => {
    it( 'case 1', () => {
        const times = [
                [2, 1, 1],
                [2, 3, 1],
                [3, 4, 1],
            ],
            n = 4,
            k = 2;
        expect( networkDelayTime( times, n, k ) ).toBe( 2 );
    } );

    it( 'case 2', () => {
        const times = [[1, 2, 1]],
            n = 2,
            k = 1;
        expect( networkDelayTime( times, n, k ) ).toBe( 1 );
    } );

    it( 'case 3', () => {
        const times = [[1, 2, 1]],
            n = 2,
            k = 2;
        expect( networkDelayTime( times, n, k ) ).toBe( -1 );
    } );
} );
