export function resultsArray( nums: number[], k: number ): number[] {
    const N = nums.length;
    const ret = Array( N - k + 1 ).fill( -1 );
    let cnt = 0;

    for ( let i = 0; i < N; ++i ) {
        if ( nums[i] - nums[i - 1] !== 1 ) {
            cnt = 0;
        }
        if ( ++cnt >= k ) {
            ret[i - k + 1] = nums[i];
        }
    }
    return ret;
}

describe( '3255.find-the-power-of-k-size-subarrays-ii', () => {
    it( 'case 1', () => {
        const nums = [1, 2, 3, 4, 3, 2, 5],
            k = 3;
        expect( resultsArray( nums, k ) ).toEqual( [3, 4, -1, -1, -1] );
    } );

    it( 'case 2', () => {
        const nums = [2, 2, 2, 2, 2],
            k = 4;
        expect( resultsArray( nums, k ) ).toEqual( [-1, -1] );
    } );
} );
