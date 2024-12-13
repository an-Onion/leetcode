import { MinPriorityQueue } from '@datastructures-js/priority-queue';

function getFinalState(
    nums: number[],
    k: number,
    multiplier: number,
): number[] {
    const queue = new MinPriorityQueue<[number, number]>( {
        priority: ( [index, value] ) => {
            return value * 100000 + index;
        },
    } );

    for ( let i = 0; i < nums.length; i++ ) {
        queue.enqueue( [i, nums[i]] );
    }
    for ( let i = 0; i < k; i++ ) {
        const [index, value] = queue.dequeue().element;
        nums[index] = value * multiplier;
        queue.enqueue( [index, nums[index]] );
    }
    return nums;
}

describe( '3264.final-array-state-after-k-multiplication-operations-i', () => {
    it( 'case 1', () => {
        expect( getFinalState( [2, 1, 3, 5, 6], 5, 2 ) ).toEqual( [8, 4, 6, 5, 6] );
    } );

    it( 'case 2', () => {
        expect( getFinalState( [1, 2], 3, 4 ) ).toEqual( [16, 8] );
    } );
} );
