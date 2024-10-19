function minOperations( nums: number[] ): number {
    let count = 0;
    for ( let i = 0; i < nums.length; i++ ) {
        if ( nums[i] === 1 ) continue;
        if ( i >= nums.length - 2 ) return -1;
        nums[i] ^= 1;
        nums[i + 1] ^= 1;
        nums[i + 2] ^= 1;
        count++;
    }
    return count;
}

describe( '3191.minimum-operations-to-make-binary-array-elements-equal-to-one-i', () => {
    it( 'e.g. 1', () => {
        const nums = [0, 1, 1, 1, 0, 0];
        expect( minOperations( nums ) ).toBe( 3 );
    } );

    it( 'e.g. 2', () => {
        const nums = [0, 1, 1, 1];
        expect( minOperations( nums ) ).toBe( -1 );
    } );
} );
