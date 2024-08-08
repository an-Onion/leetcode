function maxRotateFunction( nums: number[] ): number {
    const sum = nums.reduce( ( a, b ) => a + b, 0 );
    const N = nums.length;
    let F = nums.reduce( ( a, b, i ) => a + b * i, 0 );
    let ret = F;

    for ( let i = 1; i < N; i++ ) {
        F += sum - N * nums[N - i];
        ret = Math.max( ret, F );
    }
    return ret;
}

describe( '396. rotate-function', () => {
    it( '[4,3,2,6]', () => {
        expect( maxRotateFunction( [4, 3, 2, 6] ) ).toBe( 26 );
    } );

    it( '[100]', () => {
        expect( maxRotateFunction( [100] ) ).toBe( 0 );
    } );
} );
