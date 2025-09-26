function triangleNumber( nums: number[] ): number {
    nums.sort( ( a, b ) => a - b );
    let ret = 0;
    for ( let i = 0; i < nums.length; i++ ) {
        for ( let j = i + 1; j < nums.length; j++ ) {
            let l = j + 1,
                u = nums.length - 1;
            while ( l <= u ) {
                const m = ( l + u ) >> 1;
                if ( nums[i] + nums[j] > nums[m] ) l = m + 1;
                else u = m - 1;
            }
            ret += l - j - 1;
        }
    }
    return ret;
}

describe( '611.valid-triangle-number', () => {
    it( 'case 1', () => {
        expect( triangleNumber( [2, 2, 3, 4] ) ).toBe( 3 );
    } );

    it( 'case 2', () => {
        expect( triangleNumber( [4, 2, 3, 4] ) ).toBe( 4 );
    } );
} );
