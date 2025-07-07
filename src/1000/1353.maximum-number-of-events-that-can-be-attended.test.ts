import { MinPriorityQueue } from '@datastructures-js/priority-queue';

function maxEvents( events: number[][] ): number {
    const n = events.length;
    const maxDay = Math.max( ...events.map( ( item ) => item[1] ) );
    events.sort( ( a, b ) => a[0] - b[0] );
    const pq = new MinPriorityQueue<number>();
    let ans = 0;
    for ( let day = 1, j = 0; day <= maxDay; day++ ) {
        while ( j < n && events[j][0] <= day ) {
            pq.enqueue( events[j][1] );
            j++;
        }
        while ( !pq.isEmpty() && pq.front() < day ) {
            pq.dequeue();
        }
        if ( !pq.isEmpty() ) {
            pq.dequeue();
            ans++;
        }
    }
    return ans;
}

describe( '1353. maximum-number-of-events-that-can-be-attended', () => {
    it( 'case 1', () => {
        expect(
            maxEvents( [
                [1, 2],
                [2, 3],
                [3, 4],
            ] ),
        ).toBe( 3 );
    } );

    it( 'case 2', () => {
        expect(
            maxEvents( [
                [1, 2],
                [2, 3],
                [3, 4],
                [1, 2],
            ] ),
        ).toBe( 4 );
    } );

    it( 'case 3', () => {
        expect(
            maxEvents( [
                [1, 2],
                [1, 2],
                [1, 6],
                [1, 2],
                [1, 2],
            ] ),
        ).toBe( 3 );
    } );
} );
