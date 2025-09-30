function triangularSum( nums: number[] ): number {
    let N = nums.length;

    while ( N-- ) {
        for ( let i = 0; i < N; i++ ) {
            nums[i] = ( nums[i] + nums[i + 1] ) % 10;
        }
    }

    return nums[0];
}

describe( '2221.find-triangular-sum-of-an-array', () => {
    it( 'case 1', () => {
        expect( triangularSum( [1, 2, 3, 4, 5] ) ).toBe( 8 );
    } );

    it( 'case 2', () => {
        expect( triangularSum( [5] ) ).toBe( 5 );
    } );
} );
