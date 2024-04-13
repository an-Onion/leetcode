function findMin( nums: number[] ): number {
    let [l, u]= [0, nums.length - 1];

    while( l < u ) {
        if( nums[l] < nums[u] ) return nums[l];
        const m = l + u >> 1;
        if( nums[m] > nums[u] ) l = m + 1;
        else u = m;
    }
    return nums[l];
}

describe( '153. find-minimum-in-rotated-sorted-array', () => {


    it( '[2,1]', () => {
        expect( findMin( [2,1] ) ).toBe( 1 );
    } );

    it( '[3,1,2]', () => {
        expect( findMin( [3,1,2] ) ).toBe( 1 );
    } );

    it( '[2,3,1]', () => {
        expect( findMin( [2,3,1] ) ).toBe( 1 );
    } );


    it( '[3,4,5,1,2]', () => {
        expect( findMin( [3, 4, 5, 1, 2] ) ).toBe( 1 );

    } );

    it( '[4,5,6,7,0,1,2]', () => {
        expect( findMin( [4, 5, 6, 7, 0, 1, 2] ) ).toBe( 0 );
    } );

    it( '[11,13,15,17]', () => {
        expect( findMin( [11, 13, 15, 17] ) ).toBe( 11 );
    } );

} );