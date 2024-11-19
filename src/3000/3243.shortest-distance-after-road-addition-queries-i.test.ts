function shortestDistanceAfterQueries(
    n: number,
    queries: number[][],
): number[] {
    const prev = Array.from( { length: n }, () => [] );
    for ( let i = 1; i < n; ++i ) {
        prev[i].push( i - 1 );
    }
    const dp = Array( n )
        .fill( 0 )
        .map( ( _, i ) => i );
    const res = [];

    for ( const [u, v] of queries ) {
        prev[v].push( u );
        for ( let j = v; j < n; ++j ) {
            for ( const i of prev[j] ) {
                dp[j] = Math.min( dp[j], dp[i] + 1 );
            }
        }
        res.push( dp[n - 1] );
    }
    return res;
}

describe( '3243.shortest-distance-after-road-addition-queries-i', () => {
    it( 'case 1', () => {
        const n = 5,
            queries = [
                [2, 4],
                [0, 2],
                [0, 4],
            ];
        expect( shortestDistanceAfterQueries( n, queries ) ).toEqual( [3, 2, 1] );
    } );
    it( 'case 2', () => {
        const n = 4,
            queries = [
                [0, 3],
                [0, 2],
            ];
        expect( shortestDistanceAfterQueries( n, queries ) ).toEqual( [1, 1] );
    } );
} );
