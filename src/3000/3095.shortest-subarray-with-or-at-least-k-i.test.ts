function minimumSubarrayLength( nums: number[], k: number ): number {
    const bits = Array( 30 ).fill( 0 );

    let ret = Infinity,
        left = 0,
        right = 0;

    while ( right < nums.length ) {
        for ( let i = 0; i < bits.length; i++ ) {
            bits[i] += ( nums[right] >> i ) & 1;
        }

        while ( left <= right && calBits() >= k ) {
            ret = Math.min( ret, right - left + 1 );
            for ( let i = 0; i < bits.length; i++ ) {
                bits[i] -= ( nums[left] >> i ) & 1;
            }
            left++;
        }
        right++;
    }

    return ret === Infinity ? -1 : ret;

    function calBits() {
        let ans = 0;

        for ( let i = 0; i < bits.length; i++ ) {
            if ( bits[i] === 0 ) continue;
            ans |= 1 << i;
        }
        return ans;
    }
}

describe( '3095. Shortest Subarray with Sum at Least K', () => {
    it( 'case 1', () => {
        const nums = [1, 2, 3],
            k = 2;
        expect( minimumSubarrayLength( nums, k ) ).toBe( 1 );
    } );

    it( 'case 2', () => {
        const nums = [2, 1, 8],
            k = 10;
        expect( minimumSubarrayLength( nums, k ) ).toBe( 3 );
    } );

    it( 'case 3', () => {
        const nums = [1, 2],
            k = 0;
        expect( minimumSubarrayLength( nums, k ) ).toBe( 1 );
    } );
} );
