function getSneakyNumbers( nums: number[] ): number[] {
    const n = nums.length;
    for ( let i = 0; i < nums.length; i++ ) {
        while ( nums[i] !== i && nums[i] !== nums[nums[i]] ) {
            const j = nums[i];
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
    return [nums[n - 2], nums[n - 1]];
}

describe( '3289. the-two-sneaky-numbers-of-digitville', () => {
    it( 'case 1', () => {
        expect( getSneakyNumbers( [0, 1, 1, 0] ) ).toEqual( [1, 0] );
    } );

    it( 'case 2', () => {
        expect( getSneakyNumbers( [0, 3, 2, 1, 3, 2] ).sort() ).toEqual( [2, 3] );
    } );

    it( 'case 3', () => {
        expect(
            getSneakyNumbers( [7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2] ).sort(),
        ).toEqual( [4, 5] );
    } );
} );
