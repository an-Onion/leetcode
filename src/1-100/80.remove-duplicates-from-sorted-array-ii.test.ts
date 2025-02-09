function removeDuplicates( nums: number[] ): number {
    let fast = 0,
        slow = 0;

    while ( fast < nums.length ) {
        if ( nums[fast] !== nums[slow - 2] ) {
            nums[slow++] = nums[fast];
        }

        fast++;
    }
    return slow;
}
describe( 'Remove Duplicates from Sorted Array II', () => {
    it( '[1,1,1,2,2,3]', () => {
        const input = [1, 1, 1, 2, 2, 3];
        const k = removeDuplicates( input );
        expect( k ).toBe( 5 );
        input.length = k;
        expect( input ).toStrictEqual( [1, 1, 2, 2, 3] );
    } );

    it( '[0,0,1,1,1,1,2,3,3]', () => {
        const input = [0, 0, 1, 1, 1, 1, 2, 3, 3];
        const k = removeDuplicates( input );
        expect( k ).toBe( 7 );
        input.length = k;
        expect( input ).toStrictEqual( [0, 0, 1, 1, 2, 3, 3] );
    } );
} );
