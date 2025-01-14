function minOperations( nums: number[], k: number ): number {
    return nums.filter( ( num ) => num < k ).length;
}

describe( '3065. Minimum Operations to Exceed Threshold Value', () => {
    it( 'Case 1', () => {
        const nums = [2, 11, 10, 1, 3],
            k = 10;
        expect( minOperations( nums, k ) ).toBe( 3 );
    } );

    it( 'Case 2', () => {
        const nums = [1, 1, 2, 4, 9],
            k = 1;
        expect( minOperations( nums, k ) ).toBe( 0 );
    } );
} );
