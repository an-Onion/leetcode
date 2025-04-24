function countCompleteSubarrays( nums: number[] ): number {
    const distinct = new Set( nums ).size;
    const set = new Set();
    const arr = Array( 2001 ).fill( 0 );
    let count = 0,
        right = 0;
    for ( let left = 0; left < nums.length; left++ ) {
        if ( left > 0 ) {
            const removed = nums[left - 1];
            if ( --arr[removed] === 0 ) {
                set.delete( removed );
            }
        }
        while ( right < nums.length && set.size < distinct ) {
            const added = nums[right];
            if ( ++arr[added] === 1 ) {
                set.add( added );
            }
            right++;
        }
        if ( set.size === distinct ) {
            count += nums.length - right + 1;
        }
    }
    return count;
}

describe( '2799. countCompleteSubarrays', () => {
    it( 'case 1', () => {
        expect( countCompleteSubarrays( [1, 3, 1, 2, 2] ) ).toBe( 4 );
    } );

    it( 'case 2', () => {
        expect( countCompleteSubarrays( [5, 5, 5, 5] ) ).toBe( 10 );
    } );
} );
