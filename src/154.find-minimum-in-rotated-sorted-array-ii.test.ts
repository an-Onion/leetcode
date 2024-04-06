function findMin( nums: number[] ): number {

    let [l, u] = [0, nums.length-1];

    while( l < u ){
        const m = l+u >> 1;
        if( nums[m] > nums[u] ) l = m+1;
        else if ( nums[m] < nums[u] ) u = m;
        else u--;
    }
    return nums[l];
}

describe( '154. find-minimum-in-rotated-sorted-array-ii', () => {

    it( '[1,2,1]', () => {
        expect( findMin( [1,2,1] ) ).toBe( 1 );
    } );

    it( '[1]', () => {
        expect( findMin( [1] ) ).toBe( 1 );
    } );

    it( '[1,1]', () => {
        expect( findMin( [1,1] ) ).toBe( 1 );
    } );

    it( '[3,1,3]', () => {
        expect( findMin( [3,1,3] ) ).toBe( 1 );
    } );

    it( '[1,3,5]', () => {
        expect( findMin( [1, 3, 5] ) ).toBe( 1 );
    } );

    it( '[2,2,2,0,1]', () => {
        expect( findMin( [2, 2, 2, 0, 1] ) ).toBe( 0 );
    } );

} );