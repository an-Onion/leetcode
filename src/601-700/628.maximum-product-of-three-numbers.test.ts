function maximumProduct( nums: number[] ): number {
    nums.sort( ( a, b ) => a - b );
    return Math.max(
        nums.at( -1 )! * nums.at( -2 )! * nums.at( -3 )!,
        nums.at( 0 )! * nums.at( 1 )! * nums.at( -1 )!,
    );
}

describe( '628.maximum-product-of-three-numbers', () => {
    it( 'case 1', () => {
        expect( maximumProduct( [1, 2, 3] ) ).toBe( 6 );
    } );

    it( 'case 2', () => {
        expect( maximumProduct( [1, 2, 3, 4] ) ).toBe( 24 );
    } );

    it( 'case 3', () => {
        expect( maximumProduct( [-1, -2, -3] ) ).toBe( -6 );
    } );
} );
