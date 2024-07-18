import { MinPriorityQueue } from '@datastructures-js/priority-queue';

function minimumTime(
    n: number,
    edges: number[][],
    disappear: number[],
): number[] {
    const adj: [number, number][][] = Array.from( { length: n }, () => [] );
    for ( const [u, v, w] of edges ) {
        adj[u].push( [v, w] );
        adj[v].push( [u, w] );
    }

    const Q = new MinPriorityQueue<number[]>( {
        priority: ( [t] ) => t,
    } );

    Q.enqueue( [0, 0] );
    const answer: number[] = Array( n ).fill( -1 );
    answer[0] = 0;
    while ( !Q.isEmpty() ) {
        const [t, u] = Q.dequeue().element;
        if ( t !== answer[u] ) {
            continue;
        }
        for ( const [v, length] of adj[u] ) {
            if (
                t + length < disappear[v] &&
                ( answer[v] === -1 || t + length < answer[v] )
            ) {
                Q.enqueue( [t + length, v] );
                answer[v] = t + length;
            }
        }
    }

    return answer;
}

describe( '3112. Minimum Time to Visit a Disappearing Array', () => {
    it( 'Example 1', () => {
        const n = 3,
            edges = [
                [0, 1, 2],
                [1, 2, 1],
                [0, 2, 4],
            ],
            disappear = [1, 3, 5];
        expect( minimumTime( n, edges, disappear ) ).toEqual( [0, 2, 3] );
    } );

    it( 'Example 2', () => {
        const n = 2,
            edges = [[0, 1, 1]],
            disappear = [1, 1];

        expect( minimumTime( n, edges, disappear ) ).toEqual( [0, -1] );
    } );

    it( 'Example 3', () => {
        const n = 3,
            edges = [
                [0, 1, 2],
                [1, 2, 1],
                [0, 2, 4],
            ],
            disappear = [1, 1, 5];

        expect( minimumTime( n, edges, disappear ) ).toEqual( [0, -1, 4] );
    } );
} );
