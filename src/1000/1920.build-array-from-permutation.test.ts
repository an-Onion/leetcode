function buildArray( nums: number[] ): number[] {
    const ret: number[] = [];
    for ( let i = 0; i < nums.length; i++ ) {
        ret.push( nums[nums[i]] );
    }

    return ret;
}

describe( '1920. build array from permutation', () => {
    it( 'case 1', () => {
        expect( buildArray( [0, 2, 1, 5, 3, 4] ) ).toEqual( [0, 1, 2, 4, 5, 3] );
    } );

    it( 'case 2', () => {
        expect( buildArray( [5, 0, 1, 2, 3, 4] ) ).toEqual( [4, 5, 0, 1, 2, 3] );
    } );
} );
