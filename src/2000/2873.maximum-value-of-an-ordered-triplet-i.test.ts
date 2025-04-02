function maximumTripletValue( nums: number[] ): number {
    const n = nums.length;
    let ret = 0,
        maxI = 0,
        maxDelta = 0;
    for ( let k = 0; k < n; k++ ) {
        ret = Math.max( ret, maxDelta * nums[k] );
        maxDelta = Math.max( maxDelta, maxI - nums[k] );
        maxI = Math.max( maxI, nums[k] );
    }
    return ret;
}

describe( '2783. maximumTripletValue', () => {
    it( 'case 1', () => {
        expect( maximumTripletValue( [12, 6, 1, 2, 7] ) ).toBe( 77 );
    } );

    it( 'case 2', () => {
        expect( maximumTripletValue( [1, 10, 3, 4, 19] ) ).toBe( 133 );
    } );

    it( 'case 3', () => {
        expect( maximumTripletValue( [1, 2, 3] ) ).toBe( 0 );
    } );
} );
