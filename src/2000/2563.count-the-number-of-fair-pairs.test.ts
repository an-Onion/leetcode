function countFairPairs( nums: number[], lower: number, upper: number ): number {
    nums.sort( ( a, b ) => a - b );
    let count = 0;
    let left = nums.length,
        right = nums.length;

    for ( let j = 0; j < nums.length; j++ ) {
        while ( nums[left - 1] + nums[j] >= lower ) left--;
        while ( nums[right - 1] + nums[j] > upper ) right--;
        count += Math.min( j, right ) - Math.min( j, left );
    }

    return count;
}

describe( '2563. count the number of fair pairs', () => {
    it( 'case 1', () => {
        const nums = [0, 1, 7, 4, 4, 5],
            lower = 3,
            upper = 6;
        expect( countFairPairs( nums, lower, upper ) ).toBe( 6 );
    } );

    it( 'case 2', () => {
        const nums = [1, 7, 9, 2, 5],
            lower = 11,
            upper = 11;
        expect( countFairPairs( nums, lower, upper ) ).toBe( 1 );
    } );
} );
