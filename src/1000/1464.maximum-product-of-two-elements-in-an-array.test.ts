function maxProduct( nums: number[] ): number {
    nums.sort( ( a, b ) => a - b );

    return ( nums.at( -1 )! - 1 ) * ( nums.at( -2 )! - 1 );
}

describe( '1464.maximum-product-of-two-elements-in-an-array', () => {
    it( 'case 1', () => {
        expect( maxProduct( [3, 4, 5, 2] ) ).toBe( 12 );
    } );

    it( 'case 2', () => {
        expect( maxProduct( [1, 5, 4, 5] ) ).toBe( 16 );
    } );

    it( 'case 3', () => {
        expect( maxProduct( [3, 7] ) ).toBe( 12 );
    } );
} );
