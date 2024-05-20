function findDuplicate( nums: number[] ): number {

    let slow = 0, fast = 0;

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while ( slow !== fast );

    slow = 0;

    while ( slow !== fast ) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
}

describe( '287. find-the-duplicate-number', () => {

    it( '[1,3,4,2,2]', () => {
        expect( findDuplicate( [1,3,4,2,2] ) ).toBe( 2 );
    } );

    it( '[3,1,3,4,2]', () => {
        expect( findDuplicate( [3,1,3,4,2] ) ).toBe( 3 );
    } );

    it( '[1,1]', () => {
        expect( findDuplicate( [1,1] ) ).toBe( 1 );
    } );
} );