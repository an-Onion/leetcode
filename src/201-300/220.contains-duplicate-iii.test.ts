function containsNearbyAlmostDuplicate( nums: number[], indexDiff: number, valueDiff: number ): boolean {

    const offset = 1_000_000_000; // 1e9

    function getId( idx: number ): number {
        return ( offset + nums[idx] ) / ( valueDiff+1 ) | 0;
    }

    const map = new Map<number, number>();

    for( let i = 0; i < nums.length; i++ ){
        const num = nums[i];
        const id = getId( i );

        if( map.has( id ) ){
            return true;
        }

        if( map.has( id - 1 ) && Math.abs( map.get( id - 1 )! - num ) <= valueDiff ){
            return true;
        }

        if( map.has( id + 1 ) && Math.abs( map.get( id + 1 )! - num ) <= valueDiff ){
            return true;
        }

        map.set( id, num );

        if( i >= indexDiff ){
            const top = getId( i-indexDiff );
            map.delete( top );
        }
    }

    return false;
}

describe( '220. contains-duplicate-iii', () => {
    it( 'nums = [1,2,3,1], indexDiff = 3, valueDiff = 0', () => {
        const nums = [1,2,3,1], indexDiff = 3, valueDiff = 0;
        expect( containsNearbyAlmostDuplicate( nums, indexDiff, valueDiff ) ).toBeTruthy();
    } );

    it( 'nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3', () => {
        const nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3;
        expect( containsNearbyAlmostDuplicate( nums, indexDiff, valueDiff ) ).toBeFalsy();
    } );
} );