function numberOfArithmeticSlices( nums: number[] ): number {
    let ret = 0,
        delta = Infinity,
        count = 1;

    for ( let i = 1; i < nums.length; i++ ) {
        if ( nums[i] - nums[i - 1] === delta ) {
            if ( ++count < 3 ) continue;
            ret += count - 2;
        } else {
            delta = nums[i] - nums[i - 1];
            count = 2;
        }
    }
    return ret;
}

describe( '413. Arithmetic Slices', () => {
    it( '[1,2,3,4]', () => {
        expect( numberOfArithmeticSlices( [1, 2, 3, 4] ) ).toBe( 3 );
    } );

    it( '[1]', () => {
        expect( numberOfArithmeticSlices( [1] ) ).toBe( 0 );
    } );
} );
