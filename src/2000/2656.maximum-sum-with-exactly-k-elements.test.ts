function maximizeSum( nums: number[], k: number ): number {
    const max = Math.max( ...nums );

    return max * k + ( k * ( k - 1 ) ) / 2;
}

describe( '2656. maximum-sum-with-exactly-k-elements', () => {
    it( 'case 1', () => {
        expect( maximizeSum( [1, 2, 3, 4, 5], 3 ) ).toBe( 18 );
    } );

    it( 'case 2', () => {
        expect( maximizeSum( [5, 5, 5], 2 ) ).toBe( 11 );
    } );
} );
