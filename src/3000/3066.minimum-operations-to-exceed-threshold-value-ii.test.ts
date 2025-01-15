import {
    MinPriorityQueue,
    type PriorityQueue,
} from '@datastructures-js/priority-queue';

function minOperations( nums: number[], k: number ): number {
    const queue: PriorityQueue<number> = new MinPriorityQueue();

    nums.forEach( ( num ) => queue.enqueue( num ) );

    let operations = 0;

    while ( queue.front().element < k ) {
        const first = queue.dequeue().element;
        const second = queue.dequeue().element;
        const newElement =
            Math.min( first, second ) * 2 + Math.max( first, second );
        queue.enqueue( newElement );
        operations++;
    }

    return operations;
}

describe( '3066. Minimum Operations to Exceed Threshold Value II', () => {
    it( 'case 1', () => {
        const nums = [2, 11, 10, 1, 3],
            k = 10;
        expect( minOperations( nums, k ) ).toBe( 2 );
    } );

    it( 'case 2', () => {
        const nums = [1, 1, 2, 4, 9],
            k = 20;
        expect( minOperations( nums, k ) ).toBe( 4 );
    } );
} );
