function increasingTriplet( nums: number[] ): boolean {

    const arr = [nums[0], Infinity];

    for( const num of nums ){
        if( num > arr[1] ) return true;
        if( num > arr[0] ){
            arr[1] = num;
            continue;
        }
        arr[0] = num;
    }

    return false;
}

describe( '334. increasing-triplet-subsequence', () => {
    it( '[1,2,3,4,5]', () => {
        expect( increasingTriplet( [1,2,3,4,5] ) ).toBeTruthy();
    } );

    it( '[5,4,3,2,1]', () => {
        expect( increasingTriplet( [5,4,3,2,1] ) ).toBeFalsy();
    } );

    it( '[2,1,5,0,4,6]', () => {
        expect( increasingTriplet( [2,1,5,0,4,6] ) ).toBeTruthy();
    } );

    it( '[1,1,-2,6]', () => {
        expect( increasingTriplet( [1,1,-2,6] ) ).toBeFalsy();
    } );

} );