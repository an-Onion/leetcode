function isArraySpecial( nums: number[] ): boolean {
    let pre = nums[0];

    for ( let i = 1; i < nums.length; ++i ) {
        if ( ( ( nums[i] ^ pre ) & 1 ) === 0 ) {
            return false;
        }
        pre = nums[i];
    }

    return true;
}

describe( '3151. Special Array With X Elements Greater Than or Equal X', () => {
    it( '[2,1,4]', () => {
        expect( isArraySpecial( [2, 1, 4] ) ).toBe( true );
    } );

    it( '[1]', () => {
        expect( isArraySpecial( [1] ) ).toBe( true );
    } );

    it( '[4,3,1,6]', () => {
        expect( isArraySpecial( [4, 3, 1, 6] ) ).toBe( false );
    } );
} );
