function numberGame( nums: number[] ): number[] {
    nums.sort( ( a, b ) => a - b );
    const ret = [];
    for ( let i = 0; i < nums.length; i += 2 ) {
        ret.push( nums[i + 1], nums[i] );
    }
    return ret;
}

describe( '2974. minimum-number-game', () => {
    it( '[5,4,2,3]', () => {
        expect( numberGame( [5, 4, 2, 3] ) ).toEqual( [3, 2, 5, 4] );
    } );
    it( '[2,5]', () => {
        expect( numberGame( [2, 5] ) ).toEqual( [5, 2] );
    } );
} );
