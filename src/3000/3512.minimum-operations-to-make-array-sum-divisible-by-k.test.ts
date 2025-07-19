function minOperations( nums: number[], k: number ): number {
    return nums.reduce( ( a, b ) => a + b, 0 ) % k;
}

describe( '3512.minimum-operations-to-make-array-sum-divisible-by-k', () => {
    it( 'case 1', () => {
        expect( minOperations( [3, 9, 7], 5 ) ).toBe( 4 );
    } );

    it( 'case 2', () => {
        expect( minOperations( [4, 1, 3], 4 ) ).toBe( 0 );
    } );
} );
