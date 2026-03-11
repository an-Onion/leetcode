function bitwiseComplement( n: number ): number {
    if ( n === 0 ) return 1;
    let ans = 0;
    for ( let b = 0; n > 0; b++, n >>= 1 ) {
        if ( !( n & 1 ) ) ans |= 1 << b;
    }
    return ans;
}

describe( '1009. Complement of Base 10 Integer', () => {
    it( 'case 1', () => {
        expect( bitwiseComplement( 5 ) ).toBe( 2 );
    } );

    it( 'case 2', () => {
        expect( bitwiseComplement( 7 ) ).toBe( 0 );
    } );

    it( 'case 3', () => {
        expect( bitwiseComplement( 10 ) ).toBe( 5 );
    } );
} );
