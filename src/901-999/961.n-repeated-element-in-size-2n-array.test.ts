function repeatedNTimes( nums: number[] ): number {
    const n = nums.length;

    const head = nums[0];
    let prev = head;

    for ( let i = 1; i < n; i++ ) {
        if ( head === nums[i] ) {
            return head;
        }
        if ( nums[i] === prev ) return prev;
        prev = nums[i];
    }
    return prev;
}

describe( '961. N-Repeated Element in Size 2N Array', () => {
    it( 'case 1', () => {
        expect( repeatedNTimes( [1, 2, 3, 3] ) ).toBe( 3 );
    } );
    it( 'case 2', () => {
        expect( repeatedNTimes( [2, 1, 2, 5, 3, 2] ) ).toBe( 2 );
    } );
    it( 'case 3', () => {
        expect( repeatedNTimes( [5, 1, 5, 2, 5, 3, 5, 4] ) ).toBe( 5 );
    } );

    it( 'case 4', () => {
        expect( repeatedNTimes( [2, 0, 2, 2, 1, 2, 9, 7] ) ).toBe( 2 );
    } );
} );
