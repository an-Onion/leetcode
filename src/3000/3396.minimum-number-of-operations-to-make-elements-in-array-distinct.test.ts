function minimumOperations( nums: number[] ): number {
    const set = new Set<number>();
    for ( let i = nums.length - 1; i >= 0; i-- ) {
        if ( set.has( nums[i] ) ) {
            return Math.floor( i / 3 ) + 1;
        }

        set.add( nums[i] );
    }
    return 0;
}

describe( '3396. minimum-number-of-operations-to-make-elements-in-array-distinct ', () => {
    it( 'case 1', () => {
        expect( minimumOperations( [1, 2, 3, 4, 2, 3, 3, 5, 7] ) ).toBe( 2 );
    } );

    it( 'case 2', () => {
        expect( minimumOperations( [4, 5, 6, 4, 4] ) ).toBe( 2 );
    } );
} );
