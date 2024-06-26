function getSum( a: number, b: number ): number {
    return b === 0 ? a : getSum( a ^ b, ( a & b ) << 1 );
}

describe( '371. sum-of-two-integers', () => {
    it( '1+2', () => {
        expect( getSum( 1, 2 ) ).toBe( 3 );
    } );

    it( '-1+2', () => {
        expect( getSum( -1, 2 ) ).toBe( 1 );
    } );

} );