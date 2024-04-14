function rangeBitwiseAnd( left: number, right: number ): number {

    while( left < right ){
        right = right & ( right - 1 );
    }
    return right;
}

describe( '201. bitwise-and-of-numbers-range', () => {
    it( 'left = 0, right = 0', () => {
        expect( rangeBitwiseAnd( 0, 0 ) ).toEqual( 0 );
    } );

    it( 'left = 5, right = 7', () => {
        expect( rangeBitwiseAnd( 5, 7 ) ).toEqual( 4 );
    } );

    it( 'left = 1, right = 2147483647', () => {
        expect( rangeBitwiseAnd( 1, 2147483647 ) ).toEqual( 0 );
    } );
} );