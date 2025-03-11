function sumOfBeauties( nums: number[] ): number {
    const states = Array( nums.length ).fill( 0 );

    let preMax = nums[0];
    for ( let i = 1; i < nums.length - 1; ++i ) {
        if ( nums[i] > preMax ) {
            states[i] = 1;
            preMax = nums[i];
        }
    }

    let sufMax = nums.at( -1 ),
        ret = 0;
    for ( let i = nums.length - 2; i > 0; --i ) {
        if ( states[i] && nums[i] < sufMax ) {
            ret += 2;
        } else if ( nums[i - 1] < nums[i] && nums[i] < nums[i + 1] ) {
            ret += 1;
        }
        sufMax = Math.min( sufMax, nums[i] );
    }
    return ret;
}

describe( '2012. sum-of-beauty-in-the-array', () => {
    it( 'case 1', () => {
        expect( sumOfBeauties( [1, 2, 3] ) ).toBe( 2 );
    } );

    it( 'case 2', () => {
        expect( sumOfBeauties( [2, 4, 6, 4] ) ).toBe( 1 );
    } );

    it( 'case 3', () => {
        expect( sumOfBeauties( [3, 2, 1] ) ).toBe( 0 );
    } );
} );
