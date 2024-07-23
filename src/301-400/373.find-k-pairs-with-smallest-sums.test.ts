import { MinPriorityQueue } from '@datastructures-js/priority-queue';

function kSmallestPairs(
    nums1: number[],
    nums2: number[],
    k: number,
): number[][] {
    const Q = new MinPriorityQueue<number[]>( {
        priority: ( a ) => a[0],
    } );

    Q.enqueue( [nums1[0] + nums2[0], 0, 0] );

    const ret: number[][] = [];

    while ( ret.length < k && !Q.isEmpty() ) {
        const first = Q.dequeue().element;
        const i = first[1],
            j = first[2];
        ret.push( [nums1[i], nums2[j]] );

        if ( j === 0 && i + 1 < nums1.length ) {
            Q.enqueue( [nums1[i + 1] + nums2[j], i + 1, j] );
        }

        if ( j + 1 < nums2.length ) {
            Q.enqueue( [nums1[i] + nums2[j + 1], i, j + 1] );
        }
    }

    return ret;
}

describe( '373. Find K Pairs with Smallest Sums', () => {
    it( 'e.g. 1', () => {
        const nums1 = [1, 7, 11],
            nums2 = [2, 4, 6],
            k = 3;
        expect( kSmallestPairs( nums1, nums2, k ) ).toEqual( [
            [1, 2],
            [1, 4],
            [1, 6],
        ] );
    } );

    it( 'e.g. 2', () => {
        const nums1 = [1, 1, 2],
            nums2 = [1, 2, 3],
            k = 2;
        expect( kSmallestPairs( nums1, nums2, k ) ).toEqual( [
            [1, 1],
            [1, 1],
        ] );
    } );
} );
