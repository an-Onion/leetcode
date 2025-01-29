function containsNearbyDuplicate( nums: number[], k: number ): boolean {
    const map = new Map<number, number>();
    for ( let j = 0; j < nums.length; j++ ) {
        const i = map.get( nums[j] );
        if ( Math.abs( i - j ) <= k ) return true;
        map.set( nums[j], j );
    }
    return false;
}

describe( '219. contains-duplicate-ii', () => {
    it( 'nums = [1,2,3,1], k = 3', () => {
        expect( containsNearbyDuplicate( [1, 2, 3, 1], 3 ) ).toBeTruthy();
    } );

    it( 'nums = [1,0,1,1], k = 1', () => {
        expect( containsNearbyDuplicate( [1, 0, 1, 1], 1 ) ).toBeTruthy();
    } );

    it( 'nums = [1,2,3,1,2,3], k = 2', () => {
        expect( containsNearbyDuplicate( [1, 2, 3, 1, 2, 3], 2 ) ).toBeFalsy();
    } );
} );
