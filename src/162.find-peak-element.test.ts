function findPeakElement( nums: number[] ): number {
    
    let [l, u] = [0, nums.length - 1];

    while( l <= u ){
        const m = l+u >> 1;
        if( nums[m] > ( nums[m-1] ?? -Infinity ) && nums[m] > ( nums[m+1] ?? -Infinity ) ) return m;
        if( nums[m] < ( nums[m+1] ?? -Infinity ) ) l = m + 1;
        else u = m-1;
    }

    return l;
}

describe( '162. find-peak-element', () => {

    it( '[6,5,4,3,2,3,2]', () => {
        expect( findPeakElement( [6,5,4,3,2,3,2] ) ).toBe( 0 );
    } );

    it( '[3,1,2]', () => {
        expect( findPeakElement( [3,1,2] ) ).toBe( 2 );
    } );

    it( '[1,2,3,1]', ( ) =>{
        expect( findPeakElement( [1,2,3,1] ) ).toBe( 2 );
    } );

    it( '[1,2,1,3,5,6,4]', () => {
        expect( findPeakElement( [1,2,1,3,5,6,4] ) ).toBe( 5 );
    } );
} );