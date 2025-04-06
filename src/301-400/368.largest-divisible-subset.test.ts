function largestDivisibleSubset( nums: number[] ): number[] {
    nums.sort( ( a, b ) => a - b );
    const n = nums.length;
    const dp = Array( n ).fill( 1 );
    const prev = Array( n ).fill( -1 );
    let maxIndex = 0,
        maxSize = 1;

    for ( let i = 1; i < n; i++ ) {
        for ( let j = 0; j < i; j++ ) {
            if ( nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1 ) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }
        if ( dp[i] > maxSize ) {
            maxSize = dp[i];
            maxIndex = i;
        }
    }
    const ret: number[] = [];
    while ( maxIndex !== -1 ) {
        ret.push( nums[maxIndex] );
        maxIndex = prev[maxIndex];
    }
    return ret;
}

describe( '368. largest-divisible-subset', () => {
    it( '[1,2,3]', () => {
        expect( largestDivisibleSubset( [1, 2, 3] ).sort() ).toEqual( [1, 2] );
    } );

    it( '[1,2,4,8]', () => {
        expect( largestDivisibleSubset( [1, 2, 4, 8] ).sort() ).toEqual( [
            1, 2, 4, 8,
        ] );
    } );
} );
