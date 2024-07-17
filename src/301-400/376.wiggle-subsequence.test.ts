function wiggleMaxLength( nums: number[] ): number {

    let [inc, dec] = [1, 1];

    for( let i = 1; i < nums.length; i++ ) {
        if( nums[i] > nums[i - 1] ) {
            inc = dec + 1;
        }
        if( nums[i] < nums[i - 1] ) {
            dec = inc + 1;
        }
    }
    return Math.max( inc, dec );
}

describe( '376. wiggleMaxLength', () => {
    it( '[1,7,4,9,2,5]', () => {
        expect( wiggleMaxLength( [1, 7, 4, 9, 2, 5] ) ).toBe( 6 );
    } );

    it( '[1,17,5,10,13,15,10,5,16,8]', () => {
        expect( wiggleMaxLength( [1, 17, 5, 10, 13, 15, 10, 5, 16, 8] ) ).toBe( 7 );
    } );

    it( '[1,2,3,4,5,6,7,8,9]', () => {
        expect( wiggleMaxLength( [1, 2, 3, 4, 5, 6, 7, 8, 9] ) ).toBe( 2 );
    } );
} );
