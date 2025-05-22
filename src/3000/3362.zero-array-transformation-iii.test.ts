import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

function maxRemoval( nums: number[], queries: number[][] ): number {
    queries.sort( ( a, b ) => a[0] - b[0] );
    const heap = new MaxPriorityQueue<number>();
    const delta = Array( nums.length + 1 ).fill( 0 );
    let j = 0,
        sum = 0;

    for ( let i = 0; i < nums.length; i++ ) {
        sum += delta[i];

        while ( queries[j]?.[0] === i ) {
            heap.enqueue( queries[j][1] );
            j++;
        }

        while ( sum < nums[i] && heap.front() >= i ) {
            sum += 1;
            const top = heap.pop();
            delta[top + 1] -= 1;
        }

        if ( sum < nums[i] ) {
            return -1;
        }
    }

    return heap.size();
}

describe( '3362. zero-array-transformation-iii', () => {
    it( 'case 1', () => {
        const nums = [2, 0, 2],
            queries = [
                [0, 2],
                [0, 2],
                [1, 1],
            ];
        expect( maxRemoval( nums, queries ) ).toEqual( 1 );
    } );

    it( 'case 2', () => {
        const nums = [1, 1, 1, 1],
            queries = [
                [1, 3],
                [0, 2],
                [1, 3],
                [1, 2],
            ];

        expect( maxRemoval( nums, queries ) ).toEqual( 2 );
    } );

    it( 'case 3', () => {
        const nums = [1, 2, 3, 4],
            queries = [[0, 3]];
        expect( maxRemoval( nums, queries ) ).toEqual( -1 );
    } );
} );
