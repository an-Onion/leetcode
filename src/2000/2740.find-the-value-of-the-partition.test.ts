function findValueOfPartition( nums: number[] ): number {
    nums.sort( ( x, y ) => x - y );
    let min = Number.MAX_SAFE_INTEGER;

    for ( let i = 1; i < nums.length; ++i ) {
        min = Math.min( min, nums[i] - nums[i - 1] );
    }
    return min;
}
describe( '2740. Find the Value of the Partition', () => {
    it( 'should work', () => {
        expect( findValueOfPartition( [1, 3, 2, 4] ) ).toBe( 1 );
        expect( findValueOfPartition( [100, 1, 10] ) ).toBe( 9 );
    } );
} );
