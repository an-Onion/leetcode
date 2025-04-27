function countSubarrays( nums: number[] ): number {
    let count = 0;
    for ( let i = 2; i < nums.length; i++ ) {
        if ( ( nums[i - 2] + nums[i] ) << 1 === nums[i - 1] ) {
            count++;
        }
    }
    return count;
}

describe( '3392. countSubarrays', () => {
    it( 'case 1', () => {
        expect( countSubarrays( [1, 2, 1, 4, 1] ) ).toEqual( 1 );
    } );

    it( 'case 2', () => {
        expect( countSubarrays( [1, 1, 1] ) ).toBe( 0 );
    } );
} );
