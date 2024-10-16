function minimumAverage( nums: number[] ): number {
    nums.sort( ( a, b ) => a - b );

    let i = 0,
        j = nums.length - 1;

    let ret = Infinity;
    while ( i < j ) {
        ret = Math.min( ret, nums[i] + nums[j] );
        i++, j--;
    }
    return ret / 2;
}

describe( '3194.minimum-average-of-smallest-and-largest-elements', () => {
    it( '[7,8,3,4,15,13,4,1]', () => {
        expect( minimumAverage( [7, 8, 3, 4, 15, 13, 4, 1] ) ).toBe( 5.5 );
    } );

    it( '[1,9,8,3,10,5]', () => {
        expect( minimumAverage( [1, 9, 8, 3, 10, 5] ) ).toBe( 5.5 );
    } );

    it( '[1,2,3,7,8,9]', () => {
        expect( minimumAverage( [1, 2, 3, 7, 8, 9] ) ).toBe( 5 );
    } );
} );
