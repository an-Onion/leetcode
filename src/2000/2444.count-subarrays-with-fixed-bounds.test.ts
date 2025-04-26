function countSubarrays( nums: number[], minK: number, maxK: number ): number {
    let count = 0;
    let minPos = -1,
        maxPos = -1,
        leftBound = -1;
    for ( let i = 0; i < nums.length; i++ ) {
        if ( nums[i] < minK || nums[i] > maxK ) {
            minPos = -1;
            maxPos = -1;
            leftBound = i;
        }
        if ( nums[i] === minK ) {
            minPos = i;
        }
        if ( nums[i] === maxK ) {
            maxPos = i;
        }

        if ( minPos !== -1 && maxPos !== -1 ) {
            count += Math.min( minPos, maxPos ) - leftBound;
        }
    }
    return count;
}

describe( '2444. count subarrays with fixed bounds', () => {
    it( 'case 1', () => {
        const nums = [1, 3, 5, 2, 7, 5],
            minK = 1,
            maxK = 5;
        expect( countSubarrays( nums, minK, maxK ) ).toBe( 2 );
    } );
    it( 'case 2', () => {
        const nums = [1, 1, 1, 1],
            minK = 1,
            maxK = 1;
        expect( countSubarrays( nums, minK, maxK ) ).toBe( 10 );
    } );
} );
