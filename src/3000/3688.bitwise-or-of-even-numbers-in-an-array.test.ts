function evenNumberBitwiseORs( nums: number[] ): number {
    let ans = 0;

    for ( const num of nums ) {
        if ( num % 2 === 0 ) {
            ans |= num;
        }
    }
    return ans;
}

describe( '3588. bitwise-or-of-even-numbers-in-an-array', () => {
    it( 'case 1', () => {
        expect( evenNumberBitwiseORs( [1, 2, 3, 4, 5, 6] ) ).toBe( 6 );
    } );
    it( 'case 2', () => {
        expect( evenNumberBitwiseORs( [7, 9, 11] ) ).toBe( 0 );
    } );

    it( 'case 3', () => {
        expect( evenNumberBitwiseORs( [1, 8, 16] ) ).toBe( 24 );
    } );
} );
