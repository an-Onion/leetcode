function alternatingSum( nums: number[] ): number {
    return nums.reduce( ( acc, cur, i ) => acc + ( -1 ) ** i * cur, 0 );
}

describe( '3710. Compute Alternating Sum', () => {
    it( 'case 1', () => {
        expect( alternatingSum( [1, 3, 5, 7] ) ).toBe( -4 );
    } );
    it( 'case 2', () => {
        expect( alternatingSum( [100] ) ).toBe( 100 );
    } );
} );
