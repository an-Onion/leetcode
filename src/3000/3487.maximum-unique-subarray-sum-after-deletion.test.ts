function maxSum( nums: number[] ): number {
    const set = new Set( nums );
    const max = Math.max( ...set );

    if ( max <= 0 ) {
        return max;
    }
    return [...set].filter( ( x ) => x > 0 ).reduce( ( a, b ) => a + b );
}

describe( '3487. maximum-unique-subarray-sum-after-deletion', () => {
    it( 'case 1', () => {
        expect( maxSum( [1, 2, 3, 4, 5] ) ).toBe( 15 );
    } );
    it( 'case 2', () => {
        expect( maxSum( [1, 1, 0, 1, 1] ) ).toBe( 1 );
    } );
    it( 'case 3', () => {
        expect( maxSum( [1, 2, -1, -2, 1, 0, -1] ) ).toBe( 3 );
    } );
} );
