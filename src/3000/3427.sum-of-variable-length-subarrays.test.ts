function subarraySum( nums: number[] ): number {
    const diff = new Array( nums.length + 1 ).fill( 0 );
    for ( let i = 0; i < nums.length; i++ ) {
        const start = Math.max( 0, i - nums[i] );
        diff[start]++;
        diff[i + 1]--;
    }
    let sum = 0;
    for ( let i = 0; i < nums.length; i++ ) {
        diff[i] += diff[i - 1] ?? 0;
        sum += diff[i] * nums[i];
    }
    return sum;
}

describe( '3427. sum-of-variable-length-subarrays', () => {
    it( 'case 1', () => {
        expect( subarraySum( [2, 3, 1] ) ).toBe( 11 );
    } );

    it( 'case 2', () => {
        expect( subarraySum( [3, 1, 1, 2] ) ).toBe( 13 );
    } );
} );
