function missingNumber( nums: number[] ): number {

    const n = nums.length;
    const total = n * ( n + 1 ) / 2;
    const sum = nums.reduce( ( acc, cur ) => acc + cur, 0 );

    return total - sum;
}

describe( '268. missing-number', () => {

    it( '[3,0,1]', () => {
        expect( missingNumber( [3,0,1] ) ).toBe( 2 );
    } );

    it( '[0,1]', () => {
        expect( missingNumber( [0,1] ) ).toBe( 2 );
    } );

    it( '[9,6,4,2,3,5,7,0,1]', () => {
        expect( missingNumber( [9,6,4,2,3,5,7,0,1] ) ).toBe( 8 );
    } );

    it( '[0]', () => {
        expect( missingNumber( [0] ) ).toBe( 1 );
    } );
} );