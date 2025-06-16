function maximumDifference( nums: number[] ): number {
    let ret = -1,
        min = nums[0];

    for ( let i = 1; i < nums.length; i++ ) {
        if ( nums[i] <= min ) {
            min = nums[i];
            continue;
        }
        ret = Math.max( ret, nums[i] - min );
    }
    return ret;
}

describe( '2016. maximum difference between increasing elements', () => {
    it( 'case 1', () => {
        expect( maximumDifference( [7, 1, 5, 4] ) ).toEqual( 4 );
    } );

    it( 'case 2', () => {
        expect( maximumDifference( [9, 4, 3, 2] ) ).toEqual( -1 );
    } );

    it( 'case 3', () => {
        expect( maximumDifference( [1, 5, 2, 10] ) ).toEqual( 9 );
    } );
} );
