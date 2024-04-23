function containsNearbyDuplicate( nums: number[], k: number ): boolean {
    const map = new Map<number, number>();

    for ( let i = 0; i < nums.length; i++ ) {

        const prev = map.get( nums[i] ) ?? -Infinity;

        if( i - prev <= k ) {
            return true;
        }
        map.set( nums[i], i );
    }
    return false;
}

describe( '219. contains-duplicate-ii', () => {
    it( 'nums = [1,2,3,1], k = 3', () => {
        expect( containsNearbyDuplicate( [1,2,3,1], 3 ) ).toBeTruthy( );
    } );

    it( 'nums = [1,0,1,1], k = 1', () => {
        expect( containsNearbyDuplicate( [1,0,1,1], 1 ) ).toBeTruthy( );
    } );

    it( 'nums = [1,2,3,1,2,3], k = 2', () => {
        expect( containsNearbyDuplicate( [1,2,3,1,2,3], 2 ) ).toBeFalsy( );
    } );

} );