import * as case3 from '../largeData/215.json';

function findKthLargest( nums: number[], k: number ): number {

    function swap( i: number, j: number ) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    function quickSelect( l: number, r: number, k: number ) {
        if ( l == r )
            return nums[k];
        const partition = nums[l];
        let i = l - 1, j = r + 1;
        while ( i < j ) {
            do i++; while ( nums[i] < partition );
            do j--; while ( nums[j] > partition );
            if ( i < j )
                swap( i, j );
        }
        if ( k <= j )return quickSelect( l, j, k );
        else return quickSelect( j + 1, r, k );
    }

    const n = nums.length;
    return quickSelect( 0, n - 1, n - k );
}

describe( '215. kth-largest-element-in-an-array', () => {
    it( '[3,2,1,5,6,4], k = 2', () => {
        expect( findKthLargest( [3,2,1,5,6,4], 2 ) ).toBe( 5 );
    } );

    it( '[3,2,3,1,2,4,5,5,6], k = 4', () => {
        expect( findKthLargest( [3,2,3,1,2,4,5,5,6], 4 ) ).toBe( 4 );
    } );

    it( 'case 3', () => {
        expect( findKthLargest( case3, 50000 ) ).toStrictEqual( 1 );
    } );
} );