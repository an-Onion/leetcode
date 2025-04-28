export function countSubarrays( nums: number[], k: number ): number {
    let count = 0;
    let sum = 0;
    let left = 0;
    for ( let right = 0; right < nums.length; right++ ) {
        sum += nums[right];
        while ( sum * ( right - left + 1 ) >= k ) {
            sum -= nums[left];
            left++;
        }
        count += right - left + 1;
    }
    return count;
}

describe( '2302. count subarrays with score less than k', () => {
    it( 'case 1', () => {
        expect( countSubarrays( [2, 1, 4, 3, 5], 10 ) ).toBe( 6 );
    } );

    it( 'case 2', () => {
        expect( countSubarrays( [1, 1, 1], 5 ) ).toBe( 5 );
    } );
} );
