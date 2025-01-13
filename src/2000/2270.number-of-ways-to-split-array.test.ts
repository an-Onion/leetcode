function waysToSplitArray( nums: number[] ): number {
    const sum = nums.reduce( ( acc, cur ) => acc + cur, 0 );
    let left = 0,
        right = sum,
        ret = 0;
    for ( let i = 0; i < nums.length - 1; i++ ) {
        ( left += nums[i] ), ( right -= nums[i] );
        if ( left >= right ) ret++;
    }
    return ret;
}

describe( '2270. Number of Ways to Split Array', () => {
    it( 'Case 1', () => {
        const nums = [10, 4, -8, 7];
        const output = 2;
        expect( waysToSplitArray( nums ) ).toBe( output );
    } );

    it( 'Case 2', () => {
        const nums = [2, 3, 1, 0];
        const output = 2;
        expect( waysToSplitArray( nums ) ).toBe( output );
    } );
} );
