function smallestRangeI( nums: number[], k: number ): number {
    const min = Math.min( ...nums ),
        max = Math.max( ...nums );
    const delta = max - min;

    if ( delta > 2 * k ) {
        return delta - 2 * k;
    }
    return 0;
}

describe( '908.smallest-range-i', () => {
    it( 'e.g. 1', () => {
        const nums = [1],
            k = 0;
        expect( smallestRangeI( nums, k ) ).toBe( 0 );
    } );

    it( 'e.g. 2', () => {
        const nums = [0, 10],
            k = 2;
        expect( smallestRangeI( nums, k ) ).toBe( 6 );
    } );

    it( 'e.g. 3', () => {
        const nums = [1, 3, 6],
            k = 3;
        expect( smallestRangeI( nums, k ) ).toBe( 0 );
    } );
} );
